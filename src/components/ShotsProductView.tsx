import React, { useMemo, useState } from 'react';
import { Bookmark, Check, ExternalLink, Search } from 'lucide-react';
import { BPLUS_OFFICIAL_PRODUCTS } from '../data/bplusOfficialProducts';
import { ObjectProfile } from '../types';

interface ShotsProductViewProps {
  objects: ObjectProfile[];
  savedObjectIds: string[];
  onToggleSaveObject: (objectId: string) => void;
  onOpenObjectProfile: (object: ObjectProfile) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  all: 'Tất cả',
  seating: 'Ghế & sofa',
  table: 'Bàn',
  lighting: 'Đèn',
  storage: 'Kệ & tủ',
  decor: 'Đồ trang trí'
};

export const ShotsProductView: React.FC<ShotsProductViewProps> = ({
  objects,
  savedObjectIds,
  onToggleSaveObject,
  onOpenObjectProfile,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  const profilesById = useMemo(
    () =>
      new Map(
        objects
          .filter((object) => object.bplusId)
          .map((object) => [object.id, object])
      ),
    [objects]
  );

  const categoryCounts = useMemo(
    () =>
      BPLUS_OFFICIAL_PRODUCTS.reduce<Record<string, number>>((counts, product) => {
        counts[product.category] = (counts[product.category] || 0) + 1;
        return counts;
      }, {}),
    []
  );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return BPLUS_OFFICIAL_PRODUCTS.filter((product) => {
      const profile = profilesById.get(product.id);
      const categoryMatch =
        selectedCategory === 'all' || product.category === selectedCategory;
      const savedMatch =
        !showSavedOnly || Boolean(profile && savedObjectIds.includes(profile.id));
      const searchMatch =
        !query ||
        [product.name, product.sku, product.categoryLabel, product.shortDescription]
          .join(' ')
          .toLowerCase()
          .includes(query);

      return categoryMatch && savedMatch && searchMatch;
    });
  }, [
    profilesById,
    savedObjectIds,
    searchQuery,
    selectedCategory,
    showSavedOnly
  ]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const featuredProduct = BPLUS_OFFICIAL_PRODUCTS[0];
  const featuredProfile = featuredProduct
    ? profilesById.get(featuredProduct.id)
    : undefined;

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setShowSavedOnly(false);
    setVisibleCount(24);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(24);
  };

  return (
    <section className="bplus-catalog shots-catalog" aria-labelledby="shots-title">
      <div className="bplus-catalog-inner">
        <header className="bplus-catalog-header shots-catalog-header">
          <div>
            <span className="bplus-kicker">MONOS SHOTS · B+ FURNITURE</span>
            <h1 id="shots-title">Khám phá sản phẩm</h1>
            <p>
              Toàn bộ bộ sưu tập B+ Furniture được trình bày như một thư viện
              Shots: xem nhanh, lưu lại và mở hồ sơ sản phẩm khi cần.
            </p>
          </div>
          <a
            className="bplus-source-link"
            href="https://bplusfurniture.com.vn/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Website B+</span>
            <ExternalLink aria-hidden="true" size={15} />
          </a>
        </header>

        {featuredProduct && (
          <article className="shots-featured-product" aria-labelledby="shots-featured-title">
            <button
              type="button"
              className="shots-featured-image"
              onClick={() => featuredProfile && onOpenObjectProfile(featuredProfile)}
              aria-label={`Xem ${featuredProduct.name}`}
              disabled={!featuredProfile}
            >
              <img
                src={featuredProduct.thumbnailUrl || featuredProduct.images[0]}
                alt={featuredProduct.name}
                onError={(event) => {
                  const target = event.currentTarget;
                  if (featuredProduct.images[0] && target.src !== featuredProduct.images[0]) {
                    target.src = featuredProduct.images[0];
                  }
                }}
              />
              <span className="bplus-verified">
                <Check aria-hidden="true" size={12} />
                Chính hãng
              </span>
            </button>

            <div className="shots-featured-details">
              <div className="shots-featured-meta">
                <span>SẢN PHẨM NỔI BẬT</span>
                <span>SHOT ĐỀ XUẤT</span>
              </div>
              <h2 id="shots-featured-title">{featuredProduct.name}</h2>
              <p>{featuredProduct.shortDescription}</p>
              <div className="shots-featured-footer">
                <span>{featuredProduct.categoryLabel} · {featuredProduct.sku}</span>
                <button
                  type="button"
                  onClick={() => featuredProfile && onOpenObjectProfile(featuredProfile)}
                  disabled={!featuredProfile}
                >
                  Mở hồ sơ
                  <ExternalLink aria-hidden="true" size={14} />
                </button>
              </div>
            </div>
          </article>
        )}

        <div className="bplus-catalog-toolbar">
          <label className="bplus-search">
            <Search aria-hidden="true" size={18} />
            <input
              aria-label="Tìm sản phẩm trong Shots"
              type="search"
              placeholder="Tìm theo tên sản phẩm hoặc mã SKU"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setVisibleCount(24);
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Xóa tìm kiếm"
              >
                ×
              </button>
            )}
          </label>

          <button
            type="button"
            className={
              showSavedOnly
                ? 'shots-saved-filter is-active'
                : 'shots-saved-filter'
            }
            onClick={() => {
              setShowSavedOnly((value) => !value);
              setVisibleCount(24);
            }}
          >
            <Bookmark
              aria-hidden="true"
              size={16}
              fill={showSavedOnly ? 'currentColor' : 'none'}
            />
            <span>Đã lưu</span>
            <strong>{savedObjectIds.length}</strong>
          </button>
        </div>

        <div className="bplus-category-list" aria-label="Lọc Shots theo danh mục">
          <button
            type="button"
            className={selectedCategory === 'all' ? 'is-active' : ''}
            onClick={() => selectCategory('all')}
          >
            {CATEGORY_LABELS.all}
            <span>{BPLUS_OFFICIAL_PRODUCTS.length}</span>
          </button>
          {Object.entries(CATEGORY_LABELS)
            .filter(([category]) => category !== 'all' && categoryCounts[category])
            .map(([category, label]) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? 'is-active' : ''}
                onClick={() => selectCategory(category)}
              >
                {label}
                <span>{categoryCounts[category]}</span>
              </button>
            ))}
        </div>

        {visibleProducts.length > 0 ? (
          <div className="bplus-product-grid">
            {visibleProducts.map((product) => {
              const profile = profilesById.get(product.id);
              const isSaved = Boolean(profile && savedObjectIds.includes(profile.id));
              const image = product.thumbnailUrl || product.images[0];

              return (
                <article className="bplus-product-card" key={product.id}>
                  <button
                    type="button"
                    className="bplus-product-image"
                    onClick={() => profile && onOpenObjectProfile(profile)}
                    aria-label={`Xem ${product.name}`}
                  >
                    <img
                      src={image}
                      alt={product.name}
                      loading="lazy"
                      onError={(event) => {
                        const target = event.currentTarget;
                        if (product.images[0] && target.src !== product.images[0]) {
                          target.src = product.images[0];
                        }
                      }}
                    />
                    <span className="bplus-verified">
                      <Check aria-hidden="true" size={12} />
                      Chính hãng
                    </span>
                    <span className="bplus-image-action">Xem chi tiết</span>
                  </button>

                  <div className="bplus-product-info">
                    <div className="bplus-product-meta">
                      <span>{product.categoryLabel}</span>
                      <span>{product.sku}</span>
                    </div>

                    <div className="bplus-product-title-row">
                      <h2>{product.name}</h2>
                      <button
                        type="button"
                        className={
                          isSaved
                            ? 'is-saved bplus-save-button'
                            : 'bplus-save-button'
                        }
                        onClick={() => profile && onToggleSaveObject(profile.id)}
                        aria-label={
                          isSaved ? `Bỏ lưu ${product.name}` : `Lưu ${product.name}`
                        }
                        disabled={!profile}
                      >
                        <Bookmark
                          aria-hidden="true"
                          size={17}
                          fill={isSaved ? 'currentColor' : 'none'}
                        />
                      </button>
                    </div>

                    <p>{product.shortDescription}</p>

                    <div className="bplus-product-footer">
                      <span>{product.dimensions}</span>
                      <button
                        type="button"
                        onClick={() => profile && onOpenObjectProfile(profile)}
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bplus-empty-state">
            <Search aria-hidden="true" size={24} />
            <h2>Không tìm thấy sản phẩm</h2>
            <p>Thử từ khóa khác hoặc bỏ bộ lọc “Đã lưu”.</p>
            <button type="button" onClick={resetFilters}>
              Xem tất cả sản phẩm
            </button>
          </div>
        )}

        {visibleCount < filteredProducts.length && (
          <div className="bplus-load-more">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 24)}
            >
              Xem thêm sản phẩm
            </button>
            <span>
              Đang xem {visibleProducts.length} / {filteredProducts.length}
            </span>
          </div>
        )}

        <footer className="bplus-catalog-note">
          <span>Danh mục sản phẩm chính hãng từ</span>
          <a href="https://bplusfurniture.com.vn/" target="_blank" rel="noreferrer">
            bplusfurniture.com.vn
          </a>
        </footer>
      </div>
    </section>
  );
};
