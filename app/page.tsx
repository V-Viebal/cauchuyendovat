"use client";

import {
  ArrowUpRight,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Compass,
  Factory,
  Eye,
  FileCheck2,
  FileSearch,
  Layers3,
  Link2,
  MapPin,
  Menu,
  Ruler,
  ScanLine,
  Search,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { FeedStrip } from "./components/monos-shell";

type Story = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  tag: string;
  accent: string;
  number: string;
  image?: boolean;
};

const filters = [
  { label: "Tất cả", value: "Tất cả" },
  { label: "Câu chuyện đồ vật", value: "Object Story" },
  { label: "Hồ sơ designer", value: "Designer Profile" },
  { label: "Quy trình sản xuất", value: "How It’s Made" },
  { label: "Đồ vật trong đời sống", value: "Furniture in Use" },
];

const stories: Story[] = [
  {
    id: "cloudy",
    category: "Object Story / 001",
    title: "Cloudy: khi một chiếc ghế trở thành một vùng ký ức",
    excerpt:
      "Một hồ sơ mở về hình dáng, vật liệu và những người đã đưa chiếc ghế Cloudy từ ý tưởng vào đời sống.",
    author: "Monos Editorial",
    readTime: "08 phút đọc",
    tag: "Object Story",
    accent: "terra",
    number: "01",
    image: true,
  },
  {
    id: "material-remembers",
    category: "Material Intelligence",
    title: "Vật liệu nhớ gì sau khi rời khỏi xưởng?",
    excerpt:
      "Từ bề mặt đến dấu vết sử dụng, vật liệu ghi lại một phần đời sống của đồ vật.",
    author: "Linh Trần",
    readTime: "05 phút đọc",
    tag: "How It’s Made",
    accent: "lime",
    number: "02",
  },
  {
    id: "living-with-things",
    category: "Furniture in Use",
    title: "Sống cùng một món đồ không có nghĩa là giữ nó nguyên vẹn",
    excerpt:
      "Một chiếc ghế thay đổi thế nào khi bước ra khỏi showroom và đi vào những ngày thường.",
    author: "Mina Phạm",
    readTime: "06 phút đọc",
    tag: "Furniture in Use",
    accent: "blue",
    number: "03",
  },
  {
    id: "designer-network",
    category: "Designer Profile",
    title: "Những người đứng sau bản vẽ đầu tiên",
    excerpt:
      "Gặp gỡ thế hệ furniture designer đang đưa ngôn ngữ địa phương vào những vật dụng mới.",
    author: "Khang Nguyễn",
    readTime: "07 phút đọc",
    tag: "Designer Profile",
    accent: "ink",
    number: "04",
  },
  {
    id: "origin-trail",
    category: "Origin / Provenance",
    title: "Một món đồ có thể kể lại hành trình của mình đến đâu?",
    excerpt:
      "Vì sao truy xuất nguồn gốc bắt đầu bằng câu hỏi đúng, không phải bằng một chiếc mã đẹp.",
    author: "Monos Research",
    readTime: "04 phút đọc",
    tag: "Object Story",
    accent: "sand",
    number: "05",
  },
];

const timeline = [
  {
    index: "01",
    label: "Design",
    title: "Một ý tưởng có hình dáng",
    body: "Cloudy bắt đầu từ mong muốn tạo ra một chỗ ngồi có cảm giác như được ôm.",
    state: "Do designer cung cấp",
  },
  {
    index: "02",
    label: "Material",
    title: "Bề mặt tạo nên cảm giác",
    body: "Lớp vải, lớp đệm và kết cấu bên trong cùng tham gia vào trải nghiệm ngồi.",
    state: "Đang xác minh",
  },
  {
    index: "03",
    label: "Making",
    title: "Bản vẽ đi qua bàn tay",
    body: "Hồ sơ mở chờ thêm dữ liệu về xưởng, kỹ thuật bọc và các công đoạn hoàn thiện.",
    state: "Cộng đồng đóng góp",
  },
  {
    index: "04",
    label: "Living",
    title: "Đồ vật bước vào đời sống",
    body: "Một chiếc ghế được hiểu đầy đủ hơn qua những không gian và người từng sống cùng nó.",
    state: "Hồ sơ đang mở",
  },
];

const networkCards = [
  {
    title: "Designer",
    count: "24 hồ sơ",
    copy: "Những người biến ý tưởng thành hình dáng có thể sống cùng.",
    icon: Sparkles,
    tone: "network-green",
    href: "/designers",
  },
  {
    title: "Material",
    count: "18 nhóm",
    copy: "Vật liệu, kỹ thuật và những dấu vết tạo nên tính cách của đồ vật.",
    icon: Layers3,
    tone: "network-yellow",
    href: "/stories#material-remembers",
  },
  {
    title: "Place",
    count: "12 không gian",
    copy: "Furniture trong những không gian thật, sau khi rời khỏi catalogue.",
    icon: MapPin,
    tone: "network-blue",
    href: "/spaces",
  },
];

const factoryFilters = ["Tất cả", "Gỗ & bọc", "Kim loại", "Hoàn thiện"];

const factoryDirectory = [
  {
    id: "factory-01",
    name: "Nhà máy 01 / Gỗ & bọc",
    region: "Bình Dương · Miền Nam",
    capability: "Prototype · Small batch",
    specialties: ["Gỗ", "Bọc", "Lắp ráp"],
    filter: "Gỗ & bọc",
    status: "Hồ sơ mẫu",
    icon: Factory,
  },
  {
    id: "factory-02",
    name: "Xưởng 02 / Kim loại",
    region: "Đồng Nai · Miền Nam",
    capability: "Cơ khí · Sơn tĩnh điện",
    specialties: ["Kim loại", "Hàn", "Sơn"],
    filter: "Kim loại",
    status: "Đang xác minh",
    icon: Ruler,
  },
  {
    id: "factory-03",
    name: "Xưởng 03 / Hoàn thiện",
    region: "Hà Nội · Miền Bắc",
    capability: "Mẫu · Hoàn thiện bề mặt",
    specialties: ["Sơn", "Veneer", "Mẫu"],
    filter: "Hoàn thiện",
    status: "Hồ sơ mẫu",
    icon: Sparkles,
  },
];

const scanArchive = [
  {
    terms: ["cloudy", "b+", "b plus", "lounge chair", "ghế cloudy"],
    title: "Cloudy",
    subtitle: "Object Profile / 001 · B+ · Lounge chair",
    status: "Đã có hồ sơ trong Monos",
    detail: "Bản ghi tương đồng cao trong archive hiện tại.",
  },
  {
    terms: ["cloud chair", "ghế đám mây", "upholstered cloud"],
    title: "Cloudy / hồ sơ liên quan",
    subtitle: "Material Intelligence · Upholstery",
    status: "Có hồ sơ liên quan",
    detail: "Tìm thấy từ khóa và nhóm vật liệu tương đồng.",
  },
];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

function SaveButton({
  saved,
  onClick,
  label = "Lưu câu chuyện",
}: {
  saved: boolean;
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      className={`save-button ${saved ? "is-saved" : ""}`}
      type="button"
      aria-pressed={saved}
      aria-label={saved ? "Đã lưu" : label}
      onClick={onClick}
    >
      <Bookmark size={16} strokeWidth={1.8} fill={saved ? "currentColor" : "none"} />
      <span>{saved ? "Đã lưu" : "Lưu"}</span>
    </button>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [savedStories, setSavedStories] = useState<string[]>([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);
  const [scanQuery, setScanQuery] = useState("");
  const [scanResult, setScanResult] = useState<{
    kind: "match" | "clear" | "empty";
    title: string;
    subtitle: string;
    status: string;
    detail: string;
  } | null>(null);
  const [factoryFilter, setFactoryFilter] = useState("Tất cả");
  const [submitOpen, setSubmitOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleStories =
    activeFilter === "Tất cả"
      ? stories
      : stories.filter((story) => story.tag === activeFilter);

  const visibleFactories =
    factoryFilter === "Tất cả"
      ? factoryDirectory
      : factoryDirectory.filter((factory) => factory.filter === factoryFilter);

  const toggleSaved = (id: string) => {
    setSavedStories((current) =>
      current.includes(id) ? current.filter((storyId) => storyId !== id) : [...current, id],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleScan = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = scanQuery.trim().toLowerCase();

    if (!query) {
      setScanResult({
        kind: "empty",
        title: "Hãy nhập một sản phẩm để bắt đầu",
        subtitle: "Tên sản phẩm · brand · designer · URL",
        status: "Chưa có dữ liệu đầu vào",
        detail: "Scan Pattern cần ít nhất một từ khóa để đối chiếu với archive.",
      });
      return;
    }

    const match = scanArchive.find((entry) =>
      entry.terms.some((term) => query.includes(term) || term.includes(query)),
    );

    setScanResult(
      match
        ? { kind: "match", ...match }
        : {
            kind: "clear",
            title: "Chưa thấy bản ghi tương đồng",
            subtitle: "Archive hiện tại của Monos",
            status: "Chưa có kết quả trong archive",
            detail:
              "Điều này không chứng minh sản phẩm chưa từng tồn tại ngoài đời. Cần mở rộng nguồn tham chiếu và kiểm tra hồ sơ thiết kế trước khi kết luận.",
          },
    );
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Monos, về đầu trang">
          <LogoMark />
          <span className="brand-word">MONOS</span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Điều hướng chính">
          <a className="nav-link" href="/stories" onClick={() => setMobileMenuOpen(false)}>
            Câu chuyện đồ vật
          </a>
          <a className="nav-link" href="/feed" onClick={() => setMobileMenuOpen(false)}>
            Feed
          </a>
          <div className="nav-dropdown">
            <a className="nav-link nav-parent" href="/network" aria-haspopup="true" onClick={() => setMobileMenuOpen(false)}>
              Hành trình<span className="nav-caret" aria-hidden="true">⌄</span>
            </a>
            <div className="nav-submenu" aria-label="Hành trình — danh mục">
              <a className="nav-sublink" href="/designers" onClick={() => setMobileMenuOpen(false)}>Designer</a>
              <a className="nav-sublink" href="/objects" onClick={() => setMobileMenuOpen(false)}>Đồ vật</a>
              <a className="nav-sublink" href="/factories" onClick={() => setMobileMenuOpen(false)}>Nhà máy</a>
              <a className="nav-sublink" href="/brands" onClick={() => setMobileMenuOpen(false)}>Brand</a>
              <a className="nav-sublink" href="/spaces" onClick={() => setMobileMenuOpen(false)}>Không gian</a>
            </div>
          </div>
          <div className="nav-dropdown">
            <a className="nav-link nav-parent" href="/materials" aria-haspopup="true" onClick={() => setMobileMenuOpen(false)}>
              Thư viện<span className="nav-caret" aria-hidden="true">⌄</span>
            </a>
            <div className="nav-submenu" aria-label="Thư viện — danh mục">
              <a className="nav-sublink" href="/materials" onClick={() => setMobileMenuOpen(false)}>Vật liệu</a>
            </div>
          </div>
          <a className="nav-link" href="/provenance" onClick={() => setMobileMenuOpen(false)}>
            Nguồn gốc
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-button search-trigger" type="button" aria-label="Tìm kiếm">
            <Search size={18} strokeWidth={1.8} />
          </button>
          <button className="submit-button header-submit" type="button" onClick={() => setSubmitOpen(true)}>
            Gửi một đồ vật <ArrowUpRight size={16} strokeWidth={1.8} />
          </button>
          <button
            className="icon-button menu-trigger"
            type="button"
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="ticker" aria-label="Thông tin Monos">
        <span className="ticker-dot" />
        <span>Vol. 01 / Đồ vật là trung tâm</span>
        <span className="ticker-line" />
        <span className="ticker-muted">Câu chuyện đồ vật · Lưu trữ · Mạng lưới</span>
      </div>

      <FeedStrip />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><CircleDot size={13} /> A magazine for the life of things</div>
          <h1>
            Đồ vật là <em>trung tâm.</em>
            <br />
            Câu chuyện là nội dung.
          </h1>
          <p className="hero-intro">
            Monos kể về những gì xảy ra phía sau một món đồ: người thiết kế, vật liệu, nơi nó ra đời,
            và những người đã sống cùng nó.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/stories">
              Khám phá câu chuyện <ChevronRight size={17} />
            </a>
            <button className="text-button" type="button" onClick={() => setProfileOpen(true)}>
              Xem Object Profile <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="hero-footnote">
            <span>01</span>
            <span className="footnote-rule" />
            <span>Story → Profile → Archive</span>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img
              src="/cloudy-profile-photo.jpg"
              alt="Nghiên cứu hình khối của một chiếc ghế lounge bọc vải"
              className="hero-image"
            />
            <div className="image-wash" />
            <div className="hero-image-note">
              <span className="note-label">Visual study</span>
              <span>Không phải ảnh sản phẩm</span>
            </div>
            <div className="hero-image-index">MONOS / 001</div>
            <div className="hero-image-caption">
              <span>Case mở màn</span>
              <strong>Cloudy</strong>
              <span>B+ · Việt Nam</span>
            </div>
          </div>
          <div className="hero-side-note">
            <span>Scroll to read</span>
            <span className="side-arrow">↘</span>
          </div>
        </div>
      </section>

      <section className="manifesto-band">
        <div className="manifesto-label">Why Monos</div>
        <p>
          Đồ vật không chỉ có tên, hình ảnh và giá bán. Mỗi món đồ còn có một người thiết kế, một nơi
          chốn, một hành trình — và có thể còn nhiều câu chuyện chưa được kể.
        </p>
        <div className="manifesto-mark" aria-hidden="true">↗</div>
      </section>

      <section className="profile-section section-pad" id="object-profile">
        <div className="profile-topline">
          <div className="eyebrow light"><FileCheck2 size={14} /> Object Profile / 001</div>
          <span className="verified-pill"><span /> Hồ sơ đang mở</span>
        </div>
        <div className="profile-layout">
          <div className="profile-intro">
            <span className="profile-index">01 / 10</span>
            <h2>Cloudy<span className="dot-mark">.</span></h2>
            <p className="profile-lede">
              Một chiếc ghế có hình dáng như một đám mây. Nhưng để hiểu Cloudy, hình dáng chỉ là điểm bắt đầu.
            </p>
            <div className="profile-credits">
              <div><span>Brand</span><strong>B+</strong></div>
              <div><span>Object type</span><strong>Lounge chair</strong></div>
              <div><span>Origin</span><strong>Vietnam</strong></div>
            </div>
            <button className="light-button" type="button" onClick={() => setProfileOpen(true)}>
              Mở hồ sơ đầy đủ <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="profile-timeline" aria-label="Timeline Cloudy">
            <div className="timeline-line" />
            {timeline.map((item, index) => (
              <div className={`timeline-item ${index === 0 ? "is-current" : ""}`} key={item.index}>
                <div className="timeline-marker">{item.index}</div>
                <div className="timeline-content">
                  <div className="timeline-label"><span>{item.label}</span><span>{item.state}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-bottomline">
          <span><ShieldCheck size={15} /> Mỗi dữ liệu có một trạng thái xác minh</span>
          <span><Link2 size={15} /> Nguồn tham chiếu được gắn vào hồ sơ</span>
          <span><Users size={15} /> Cộng đồng có thể tiếp tục đóng góp</span>
        </div>
      </section>

      <section className="network-section section-pad" id="network">
        <div className="section-heading network-heading">
          <div>
            <div className="eyebrow muted"><Users size={14} /> Furniture Designer Network</div>
            <h2>Một món đồ<br /><em>kết nối nhiều người.</em></h2>
          </div>
          <p className="section-aside-copy">Monos không chỉ là danh bạ. Mạng lưới được hình thành thông qua những đồ vật đã đi qua tay người.</p>
        </div>
        <div className="network-grid">
          {networkCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className={`network-card ${card.tone}`} key={card.title}>
                <div className="network-icon"><Icon size={22} strokeWidth={1.7} /></div>
                <div className="network-card-top"><span>{card.count}</span><ArrowUpRight size={18} /></div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <a className="card-link" href={card.href}>Khám phá <ChevronRight size={15} /></a>
              </article>
            );
          })}
        </div>

        <div className="factory-directory" id="factories">
          <div className="factory-directory-top">
            <div>
              <div className="eyebrow muted"><Factory size={14} /> Factory Directory</div>
              <h3>Danh bạ<br /><em>nhà máy.</em></h3>
            </div>
            <p>
              Tìm những đơn vị có thể biến bản vẽ thành sản phẩm thật — theo năng lực, vật liệu và công đoạn sản xuất.
            </p>
          </div>

          <div className="factory-toolbar">
            <span className="factory-count">{factoryDirectory.length} hồ sơ đang được mở</span>
            <div className="factory-filters" role="tablist" aria-label="Lọc danh bạ nhà máy">
              {factoryFilters.map((filter) => (
                <button
                  className={`factory-filter ${factoryFilter === filter ? "is-active" : ""}`}
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={factoryFilter === filter}
                  onClick={() => setFactoryFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="factory-grid">
            {visibleFactories.map((factory) => {
              const Icon = factory.icon;
              return (
                <article className="factory-card" key={factory.id}>
                  <div className="factory-card-head">
                    <div className="factory-icon"><Icon size={20} strokeWidth={1.7} /></div>
                    <span className="factory-status"><span /> {factory.status}</span>
                  </div>
                  <h4>{factory.name}</h4>
                  <div className="factory-region"><MapPin size={14} /> {factory.region}</div>
                  <p>{factory.capability}</p>
                  <div className="factory-tags">
                    {factory.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
                  </div>
                  <button className="card-link" type="button">Mở hồ sơ <ArrowUpRight size={15} /></button>
                </article>
              );
            })}
          </div>

          <div className="directory-note">
            <FileCheck2 size={16} />
            <span>Hồ sơ hiển thị là dữ liệu mẫu cho cấu trúc danh bạ. Thông tin nhà máy cần được Monos xác minh trước khi công bố chính thức.</span>
          </div>
        </div>
      </section>

      <section className="provenance-section section-pad" id="provenance">
        <div className="provenance-copy">
          <div className="eyebrow light"><ScanLine size={14} /> Scan Pattern</div>
          <h2>Kiểm tra trước khi<br /><em>công bố.</em></h2>
          <p>
            Scan Pattern giúp đối chiếu hình ảnh, hình dáng và đặc điểm thiết kế với kho dữ liệu đã có — để biết cần hỏi thêm điều gì trước khi một thiết kế được kể lại.
          </p>
          <button className="outline-light-button" type="button" onClick={() => setScanOpen((open) => !open)}>
            {scanOpen ? "Thu gọn quy trình" : "Xem quy trình"} <ChevronRight size={16} />
          </button>
        </div>
        <div className="scan-flow" aria-label="Quy trình Scan Pattern">
          {[
            ["01", "Gửi đồ vật", "Hình ảnh & hồ sơ ban đầu"],
            ["02", "Đối chiếu", "Kho dữ liệu thiết kế"],
            ["03", "Gắn trạng thái", "Nguyên bản · tương đồng · chưa đủ dữ liệu"],
            ["04", "Công bố", "Hồ sơ với nguồn tham chiếu"],
          ].map(([number, title, body]) => (
            <div className="scan-step" key={number}>
              <span className="scan-number">{number}</span>
              <div><strong>{title}</strong><span>{body}</span></div>
              {number !== "04" && <ChevronRight className="scan-chevron" size={16} />}
            </div>
          ))}
          {scanOpen && (
            <div className="scan-disclaimer">
              <ShieldCheck size={17} />
              <span>Scan Pattern chỉ phát hiện và đối chiếu tương đồng. Đây không phải là kết luận đạo nhái hay vi phạm pháp lý.</span>
            </div>
          )}

          <div className="scan-console">
            <div className="scan-console-head">
              <div>
                <span>Đối chiếu archive</span>
                <strong>Thử một sản phẩm</strong>
              </div>
              <SearchCheck size={24} strokeWidth={1.5} />
            </div>
            <form className="scan-form" onSubmit={handleScan}>
              <label htmlFor="scan-query">Tên sản phẩm, brand, designer hoặc URL</label>
              <div className="scan-input-row">
                <input
                  id="scan-query"
                  type="search"
                  value={scanQuery}
                  onChange={(event) => setScanQuery(event.target.value)}
                  placeholder="Ví dụ: Cloudy, B+ hoặc lounge chair"
                />
                <button className="scan-submit" type="submit">
                  Đối chiếu <SearchCheck size={16} />
                </button>
              </div>
            </form>
            <div className="scan-hint">Thử từ khóa: Cloudy · B+ · lounge chair</div>

            {scanResult && (
              <div className={`scan-result scan-result-${scanResult.kind}`}>
                <div className="scan-result-icon">
                  {scanResult.kind === "match" ? <CheckCircle2 size={19} /> : <FileSearch size={19} />}
                </div>
                <div>
                  <span className="scan-result-status">{scanResult.status}</span>
                  <strong>{scanResult.title}</strong>
                  <span className="scan-result-subtitle">{scanResult.subtitle}</span>
                  <p>{scanResult.detail}</p>
                </div>
              </div>
            )}

            <p className="scan-console-note"><ShieldCheck size={15} /> Bản thử nghiệm đang đối chiếu với archive nội bộ. Kết quả “chưa thấy” không có nghĩa là sản phẩm chưa từng tồn tại ngoài đời.</p>
          </div>
        </div>
      </section>

      <section className="submit-section section-pad" id="submit">
        <div className="submit-symbol" aria-hidden="true">+</div>
        <div>
          <div className="eyebrow muted"><Send size={14} /> Open archive</div>
          <h2>Bạn đang sống cùng<br /><em>một món đồ có chuyện để kể?</em></h2>
        </div>
        <div className="submit-cta-wrap">
          <p>Gửi cho Monos một món đồ, một bức ảnh hoặc một ký ức. Hồ sơ đầu tiên có thể bắt đầu từ bạn.</p>
          <button className="dark-button" type="button" onClick={() => setSubmitOpen(true)}>
            Gửi một đồ vật <ArrowUpRight size={17} />
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><LogoMark /><span>MONOS</span></div>
        <p>Stories of the things we live with.</p>
        <div className="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/spaces">Không gian</a><a href="/provenance">Nguồn gốc</a></div>
        <span className="footer-credit">© 2026 Monos / Issue 01</span>
      </footer>

      {profileOpen && (
        <div className="overlay" role="presentation" onMouseDown={() => setProfileOpen(false)}>
          <aside className="side-panel" role="dialog" aria-modal="true" aria-labelledby="profile-panel-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="panel-header">
              <div><span className="panel-kicker">Object Profile / 001</span><h2 id="profile-panel-title">Cloudy.</h2></div>
              <button className="panel-close" type="button" aria-label="Đóng hồ sơ" onClick={() => setProfileOpen(false)}><X size={20} /></button>
            </div>
            <img className="panel-image" src="/cloudy-profile-photo.jpg" alt="Cloudy — ghế lounge bọc vải" />
            <div className="panel-image-note">Visual study / Không phải ảnh sản phẩm</div>
            <p className="panel-lede">Một hồ sơ sống được tạo từ câu chuyện thiết kế, dữ liệu nguồn gốc và những người đã sử dụng món đồ.</p>
            <div className="panel-facts">
              <div><span>Brand</span><strong>B+</strong></div>
              <div><span>Designer</span><strong>Hồ sơ đang mở</strong></div>
              <div><span>Material</span><strong>Upholstery / đang xác minh</strong></div>
              <div><span>Evidence</span><strong>Brand supplied + community</strong></div>
            </div>
            <div className="panel-status"><ShieldCheck size={16} /><span>Thông tin được phân biệt theo trạng thái xác minh, không gộp thành một kết luận duy nhất.</span></div>
            <button className="dark-button full-width" type="button" onClick={() => setProfileOpen(false)}>Quay lại archive <ArrowUpRight size={16} /></button>
          </aside>
        </div>
      )}

      {submitOpen && (
        <div className="overlay" role="presentation" onMouseDown={() => setSubmitOpen(false)}>
          <div className="form-modal" role="dialog" aria-modal="true" aria-labelledby="submit-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="panel-header">
              <div><span className="panel-kicker">Open archive</span><h2 id="submit-title">Gửi một đồ vật.</h2></div>
              <button className="panel-close" type="button" aria-label="Đóng biểu mẫu" onClick={() => setSubmitOpen(false)}><X size={20} /></button>
            </div>
            {submitted ? (
              <div className="success-state"><div className="success-icon"><Check size={24} /></div><h3>Cảm ơn bạn đã mở câu chuyện.</h3><p>Monos đã nhận được tín hiệu đầu tiên. Chúng mình sẽ liên hệ khi hồ sơ cần thêm dữ liệu.</p><button className="dark-button" type="button" onClick={() => { setSubmitOpen(false); setSubmitted(false); }}>Đóng</button></div>
            ) : (
              <form className="submit-form" onSubmit={handleSubmit}>
                <p>Chưa cần hoàn chỉnh. Hãy bắt đầu bằng điều bạn biết rõ nhất về món đồ.</p>
                <label>Tên của bạn<input name="name" required placeholder="Tên hoặc studio" /></label>
                <label>Đồ vật bạn muốn kể<input name="object" required placeholder="Ví dụ: một chiếc ghế Cloudy" /></label>
                <label>Câu chuyện ngắn<textarea name="story" required rows={4} placeholder="Nó đến với bạn như thế nào?" /></label>
                <button className="dark-button full-width" type="submit">Gửi tín hiệu <Send size={16} /></button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
