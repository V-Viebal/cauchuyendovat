import React, { useMemo, useState } from 'react';
import {
  Layers,
  Search,
  Bookmark,
  ExternalLink,
  Plus,
  Check
} from 'lucide-react';
import { ObjectProfile } from '../types';

interface ObjectArchiveViewProps {
  objects: ObjectProfile[];
  onOpenObjectProfile: (obj: ObjectProfile) => void;
  savedObjectIds: string[];
  onToggleSaveObject: (objId: string) => void;
  onOpenCreateObjectModal: () => void;
}

export const ObjectArchiveView: React.FC<ObjectArchiveViewProps> = ({
  objects,
  onOpenObjectProfile,
  savedObjectIds,
  onToggleSaveObject,
  onOpenCreateObjectModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const bplusCount = objects.filter(
    (obj) => obj.brand.toLowerCase().includes('b+') || obj.id.startsWith('bplus-')
  ).length;

  const categories = [
    { id: 'all', label: `Tất cả (${objects.length})` },
    { id: 'bplus', label: `B+ Furniture (${bplusCount})`, highlight: true },
    { id: 'seating', label: 'Ghế & Sofa' },
    { id: 'table', label: 'Bàn trà & Bàn làm việc' },
    { id: 'storage', label: 'Kệ & Hệ lưu trữ' },
    { id: 'lighting', label: 'Đèn & Chiếu sáng' },
    { id: 'decor', label: 'Decor & Nghệ thuật' }
  ];

  const filteredObjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return objects.filter((obj) => {
      let matchesCategory = false;
      if (selectedCategory === 'all') {
        matchesCategory = true;
      } else if (selectedCategory === 'bplus') {
        matchesCategory =
          obj.brand.toLowerCase().includes('b+') || obj.id.startsWith('bplus-');
      } else {
        matchesCategory = obj.category === selectedCategory;
      }

      if (!query) return matchesCategory;

      const matchesSearch =
        obj.name.toLowerCase().includes(query) ||
        (obj.sku && obj.sku.toLowerCase().includes(query)) ||
        obj.brand.toLowerCase().includes(query) ||
        obj.designer.name.toLowerCase().includes(query) ||
        obj.monosCode.toLowerCase().includes(query) ||
        obj.materials.some((material) => material.toLowerCase().includes(query)) ||
        obj.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [objects, searchQuery, selectedCategory]);

  const displayedObjects = filteredObjects.slice(0, visibleCount);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setVisibleCount(24);
  };

  return (
    <section className="bplus-catalog monos-archive-catalog" aria-labelledby="archive-title">
      <div className="bplus-catalog-inner">
        <header className="bplus-catalog-header">
          <div>
            <span className="bplus-kicker">MONOS ARCHIVE · LƯU BẠ ĐỊNH DANH</span>
            <h1 id="archive-title">Hồ sơ đồ vật & Nguồn gốc</h1>
            <p>
              Mỗi đồ vật được cấp một mã Monos định danh vĩnh viễn, lưu giữ đầy đủ bản vẽ CAD,
              hình ảnh prototype tại xưởng mộc và chứng chỉ Scan Pattern độc bản.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCreateObjectModal}
            className="bplus-save-button"
            style={{
              padding: '10px 18px',
              borderRadius: '999px',
              background: 'var(--apple-ink)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Plus aria-hidden="true" size={15} />
            <span>Đăng bạ đồ vật mới</span>
          </button>
        </header>

        <div className="bplus-catalog-toolbar">
          <label className="bplus-search" aria-label="Tìm kiếm đồ vật">
            <Search aria-hidden="true" size={16} />
            <input
              type="search"
              placeholder="Tìm theo tên sản phẩm, SKU (vd: SAMY-B, CH008), mã MNS, vật liệu..."
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
                aria-label="Xóa từ khóa tìm kiếm"
              >
                ×
              </button>
            )}
          </label>

          <span className="bplus-catalog-count">
            Hiển thị <strong>{displayedObjects.length}</strong> / {filteredObjects.length} đồ vật
          </span>
        </div>

        <nav className="bplus-category-row" aria-label="Lọc theo danh mục đồ vật">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleCount(24);
                }}
                className={isActive ? 'is-active' : ''}
                aria-pressed={isActive}
              >
                <span>{category.label}</span>
              </button>
            );
          })}
        </nav>

        {displayedObjects.length === 0 ? (
          <div className="bplus-empty-state">
            <Search aria-hidden="true" size={24} />
            <h2>Không tìm thấy đồ vật phù hợp</h2>
            <p>Hãy thử từ khóa khác hoặc xem toàn bộ danh mục.</p>
            <button type="button" onClick={resetFilters}>
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="bplus-product-grid">
            {displayedObjects.map((obj) => {
              const isSaved = savedObjectIds.includes(obj.id);
              const image = obj.images[0];
              const isOfficial = Boolean(obj.bplusId) || obj.brand.toLowerCase().includes('b+');

              return (
                <article className="bplus-product-card" key={obj.id}>
                  <button
                    type="button"
                    className="bplus-product-image"
                    onClick={() => onOpenObjectProfile(obj)}
                    aria-label={`Xem ${obj.name}`}
                  >
                    <img src={image} alt={obj.name} loading="lazy" />
                    {isOfficial && (
                      <span className="bplus-verified">
                        <Check aria-hidden="true" size={12} />
                        Chính hãng
                      </span>
                    )}
                    <span className="bplus-image-action">Xem chi tiết</span>
                  </button>

                  <div className="bplus-product-info">
                    <div className="bplus-product-meta">
                      <span>{obj.categoryLabel}</span>
                      <span>{obj.sku || obj.monosCode}</span>
                    </div>

                    <div className="bplus-product-title-row">
                      <h2>{obj.name}</h2>
                      <button
                        type="button"
                        className={
                          isSaved
                            ? 'is-saved bplus-save-button'
                            : 'bplus-save-button'
                        }
                        onClick={() => onToggleSaveObject(obj.id)}
                        aria-label={
                          isSaved ? `Bỏ lưu ${obj.name}` : `Lưu ${obj.name}`
                        }
                      >
                        <Bookmark
                          aria-hidden="true"
                          size={17}
                          fill={isSaved ? 'currentColor' : 'none'}
                        />
                      </button>
                    </div>

                    <p>{obj.shortDescription}</p>

                    <div className="bplus-product-footer">
                      <span>{obj.dimensions}</span>
                      <button
                        type="button"
                        onClick={() => onOpenObjectProfile(obj)}
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {displayedObjects.length < filteredObjects.length && (
          <div className="bplus-catalog-pagination">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 24)}
            >
              Xem thêm đồ vật ({filteredObjects.length - displayedObjects.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

