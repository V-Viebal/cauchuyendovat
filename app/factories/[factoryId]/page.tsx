import type { Metadata } from "next";
import { ArrowUpRight, Check, Factory, FileCheck2, MapPin, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { MonosFrame } from "../../components/monos-shell";

type FactoryDetail = {
  id: string;
  name: string;
  shortName: string;
  region: string;
  capability: string;
  filter: string;
  status: string;
  icon: "factory" | "ruler" | "sparkles";
  intro: string;
  capacity: string[];
  materials: string[];
  process: Array<{ title: string; body: string }>;
  related: string;
  relatedState: string;
  query: string;
  mapPosition: "north" | "south" | "southeast";
};

const details: Record<string, FactoryDetail> = {
  "factory-01": {
    id: "factory-01",
    name: "Nhà máy 01 / Gỗ & bọc",
    shortName: "Gỗ & bọc",
    region: "Bình Dương · Miền Nam",
    capability: "Prototype · Small batch",
    filter: "Gỗ & bọc",
    status: "Hồ sơ mẫu",
    icon: "factory",
    intro: "Một hồ sơ mẫu cho năng lực đi từ khung gỗ, lớp đệm đến công đoạn bọc hoàn thiện — nơi bản vẽ bắt đầu được thử bằng vật liệu thật.",
    capacity: ["Prototype", "Small batch", "Gỗ", "Bọc", "Lắp ráp"],
    materials: ["Gỗ tự nhiên", "Mút polyurethane", "Fiber wrap", "Vải contract-grade"],
    process: [
      { title: "Đọc bản vẽ", body: "Kiểm tra tỷ lệ, cấu tạo và những điểm cần thử trước khi chốt mẫu." },
      { title: "Làm khung", body: "Tạo kết cấu gỗ và kiểm tra các mối nối, độ ổn định, khả năng lắp ráp." },
      { title: "Tạo hình đệm", body: "Điều chỉnh lớp mút, fiber wrap và đường may theo hình khối đã định." },
      { title: "Bọc & hoàn thiện", body: "Lắp ráp, bọc thử và ghi nhận những thay đổi cần quay lại bản vẽ." },
    ],
    related: "Cloudy",
    relatedState: "Liên hệ tiềm năng · Chưa xác minh",
    query: "Binh Duong,Vietnam",
    mapPosition: "southeast",
  },
  "factory-02": {
    id: "factory-02",
    name: "Xưởng 02 / Kim loại",
    shortName: "Kim loại",
    region: "Đồng Nai · Miền Nam",
    capability: "Cơ khí · Sơn tĩnh điện",
    filter: "Kim loại",
    status: "Đang xác minh",
    icon: "ruler",
    intro: "Hồ sơ đang được xác minh cho năng lực gia công kim loại, từ cắt và hàn đến xử lý bề mặt cho các chi tiết furniture.",
    capacity: ["Cơ khí", "Kim loại", "Hàn", "Sơn", "Small batch"],
    materials: ["Thép", "Inox", "Sơn tĩnh điện", "Phụ kiện kim khí"],
    process: [
      { title: "Kiểm tra cấu tạo", body: "Đọc tiết diện, điểm chịu lực và dung sai cần được xác nhận trên bản vẽ." },
      { title: "Cắt & tạo hình", body: "Chuẩn bị phôi, uốn hoặc tạo hình theo quy cách của từng chi tiết." },
      { title: "Hàn & xử lý", body: "Kiểm tra mối hàn, làm sạch bề mặt và xử lý các điểm giao nhau." },
      { title: "Sơn tĩnh điện", body: "Hoàn thiện bề mặt theo mẫu màu; quy cách sơn vẫn đang chờ bằng chứng." },
    ],
    related: "Cloudy / chân & đế",
    relatedState: "Liên hệ kỹ thuật · Chưa xác minh",
    query: "Dong Nai,Vietnam",
    mapPosition: "south",
  },
  "factory-03": {
    id: "factory-03",
    name: "Xưởng 03 / Hoàn thiện",
    shortName: "Hoàn thiện",
    region: "Hà Nội · Miền Bắc",
    capability: "Mẫu · Hoàn thiện bề mặt",
    filter: "Hoàn thiện",
    status: "Hồ sơ mẫu",
    icon: "sparkles",
    intro: "Một điểm nối mẫu cho các công đoạn bề mặt — nơi màu, vân, độ bóng và dấu vết thủ công hoàn thiện tính cách của đồ vật.",
    capacity: ["Mẫu", "Sơn", "Veneer", "Hoàn thiện bề mặt"],
    materials: ["Veneer", "Sơn bóng", "Sơn mờ", "Bề mặt gỗ"],
    process: [
      { title: "Đọc mẫu màu", body: "Đối chiếu màu, độ bóng và vân bề mặt với reference đã được cung cấp." },
      { title: "Chuẩn bị bề mặt", body: "Làm phẳng, xử lý nền và kiểm tra độ sạch trước khi phủ." },
      { title: "Phủ & sấy", body: "Thực hiện lớp phủ và theo dõi độ khô, độ đều, khả năng chạm." },
      { title: "Đối chiếu mẫu", body: "Ghi nhận sai khác giữa mẫu thử và bản cần bàn giao trước khi xác nhận." },
    ],
    related: "Cloudy / bề mặt tay vịn",
    relatedState: "Chưa có liên kết xác minh",
    query: "Hanoi,Vietnam",
    mapPosition: "north",
  },
  "factory-04": {
    id: "factory-04",
    name: "First Maker / Custom furniture",
    shortName: "First Maker",
    region: "Hồ Chí Minh · Miền Nam",
    capability: "Custom furniture · Bespoke interiors",
    filter: "Custom furniture",
    status: "Thông tin công khai · đang xác minh",
    icon: "factory",
    intro: "Một hồ sơ xưởng được nối từ Gánh Bench: First Maker được dossier HMA ghi nhận ở vai trò thi công, trong khi kênh công khai mô tả họ làm custom furniture và bespoke interiors.",
    capacity: ["Custom furniture", "Bespoke interiors", "Design · Build", "Renovate"],
    materials: ["Gỗ tự nhiên", "Oak", "Chốt mộng", "Bề mặt hoàn thiện"],
    process: [
      { title: "Đọc brief", body: "Bắt đầu từ nhu cầu, bản vẽ và những chi tiết cần biến thành một món đồ có thể làm thật." },
      { title: "Custom furniture", body: "Kênh công khai của First Maker mô tả năng lực làm furniture theo yêu cầu; cấu trúc xưởng cụ thể vẫn chờ xác minh." },
      { title: "Build & hoàn thiện", body: "Dossier HMA ghi First Maker ở vai trò thi công Gánh Bench; các bước chi tiết chưa được công bố trong nguồn hiện có." },
      { title: "Bespoke interiors", body: "Hồ sơ công khai giới thiệu thêm Design · Build · Renovate cho nội thất đặt theo dự án." },
    ],
    related: "Gánh Bench",
    relatedState: "Thi công · theo dossier HMA 2026",
    query: "Ho Chi Minh City,Vietnam",
    mapPosition: "south",
  },
  "factory-05": {
    id: "factory-05",
    name: "Nhà máy Tân Thành / Ambie Shelf",
    shortName: "Tân Thành",
    region: "Việt Nam · địa điểm đang xác minh",
    capability: "Đồ gỗ · Sơn hoàn thiện",
    filter: "Hoàn thiện",
    status: "Theo hồ sơ sản phẩm · đang xác minh",
    icon: "factory",
    intro: "Hồ sơ nhà máy được nối từ Ambie Shelf. Tân Thành được người dùng cung cấp là đơn vị sản xuất; địa điểm cụ thể, năng lực xưởng và phạm vi tham gia vẫn cần được xác minh trực tiếp.",
    capacity: ["Đồ gỗ", "Lắp ráp", "Sơn hoàn thiện", "Prototype"],
    materials: ["Gỗ lau màu", "Sơn Protego", "Sắt sơn tĩnh điện", "Bánh xe nhựa"],
    process: [
      { title: "Đọc hệ mô-đun", body: "Bản vẽ Ambie Shelf cho thấy một hệ kệ gồm các tầng gỗ, trụ đứng, khớp và bánh xe; thông số sản xuất chi tiết đang chờ đối chiếu với xưởng." },
      { title: "Gia công chi tiết gỗ", body: "Các mặt kệ có biên dạng bo cong và kích thước mô-đun; loại gỗ và quy cách xử lý bề mặt cần được Tân Thành xác nhận." },
      { title: "Sơn & lắp ráp", body: "Hồ sơ ghi Sơn Protego là vật liệu hoàn thiện; các chi tiết sắt, trụ và vòng đỡ được lắp thành hệ có thể di chuyển." },
      { title: "Kiểm tra chuyển động", body: "Bánh xe 360° và bánh có phanh là một phần của cấu tạo được mô tả trong dossier; điều kiện tải và độ bền chưa được công bố." },
    ],
    related: "Ambie Shelf",
    relatedState: "Nhà máy sản xuất · theo thông tin người dùng cung cấp",
    query: "Vietnam",
    mapPosition: "south",
  },
};

export function generateStaticParams() {
  return Object.keys(details).map((factoryId) => ({ factoryId }));
}

export async function generateMetadata({ params }: { params: Promise<{ factoryId: string }> }): Promise<Metadata> {
  const { factoryId } = await params;
  const factory = details[factoryId] ?? details["factory-01"];
  return {
    title: `${factory.name} — Monos`,
    description: `Hồ sơ năng lực ${factory.shortName} của ${factory.region}, đang được Monos xác minh theo nguồn tham chiếu.`,
  };
}

export default async function FactoryDetailPage({ params }: { params: Promise<{ factoryId: string }> }) {
  const { factoryId } = await params;
  const factory = details[factoryId] ?? details["factory-01"];
  const Icon = factory.icon === "factory" ? Factory : factory.icon === "ruler" ? Ruler : Sparkles;

  return (
    <MonosFrame active="factories">
      <section className="factory-detail-hero">
        <div className="factory-detail-hero-copy">
          <div className="eyebrow muted"><FileCheck2 size={14} /> Factory Profile / {factory.id.replace("factory-", "00")}</div>
          <div className="factory-detail-status"><span /> {factory.status}</div>
          <h1>{factory.name}<em>.</em></h1>
          <p>{factory.intro}</p>
          <div className="factory-detail-meta"><span><MapPin size={15} /> {factory.region}</span><span><Icon size={15} /> {factory.capability}</span></div>
        </div>
        <div className="factory-detail-mark"><Icon size={58} strokeWidth={1.1} /><span>{factory.filter}</span><small>Hồ sơ khu vực · dữ liệu mẫu</small></div>
      </section>

      <section className="factory-detail-facts">
        <div><span>Địa điểm hiển thị</span><strong>{factory.region.split(" · ")[0]}</strong><small>Chỉ hiển thị đến cấp khu vực</small></div>
        <div><span>Năng lực chính</span><strong>{factory.capability}</strong><small>{factory.status}</small></div>
        <div><span>Trạng thái hồ sơ</span><strong>{factory.status}</strong><small>Monos đang tiếp tục thu thập bằng chứng</small></div>
        <div><span>Hồ sơ liên quan</span><strong>{factory.related}</strong><small>{factory.relatedState}</small></div>
      </section>

      <section className="factory-detail-section factory-detail-capabilities">
        <div className="factory-detail-section-head"><div><div className="eyebrow muted">What can happen here</div><h2>Năng lực<br /><em>được đọc qua vật liệu.</em></h2></div><p>Những tag dưới đây mô tả cấu trúc dữ liệu cần có trong một hồ sơ xưởng. Chúng chưa thay thế cho việc xác minh trực tiếp.</p></div>
        <div className="factory-capability-columns">
          <div><h3>Năng lực & công đoạn</h3><div className="factory-pill-list">{factory.capacity.map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div></div>
          <div><h3>Vật liệu có thể liên quan</h3><div className="factory-material-list">{factory.materials.map((item) => <div key={item}><span>{item}</span><small>Chưa xác minh</small></div>)}</div></div>
        </div>
      </section>

      <section className="factory-detail-section factory-detail-process">
        <div className="factory-detail-section-head"><div><div className="eyebrow muted">How it could be made</div><h2>Một bản vẽ<br /><em>đi qua nhiều tay.</em></h2></div><p>Quy trình dưới đây là khung biên tập để ghi nhận xưởng đã làm gì, ở bước nào và bằng chứng nằm ở đâu.</p></div>
        <div className="factory-process-grid">{factory.process.map((step, index) => <article key={step.title}><strong>0{index + 1}</strong><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
      </section>

      <section className="factory-detail-map-section">
        <div className="factory-detail-map-copy"><div className="eyebrow light"><MapPin size={14} /> Regional location</div><h2>Vị trí theo<br /><em>khu vực.</em></h2><p>Google Maps được dùng để định vị ở cấp tỉnh/thành. Địa chỉ cụ thể chỉ xuất hiện khi hồ sơ có bằng chứng phù hợp.</p><a className="light-button" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(factory.query)}`} target="_blank" rel="noreferrer">Mở khu vực trên Google Maps <ArrowUpRight size={16} /></a></div>
        <div className="factory-detail-map-wrap">
          <iframe className="factory-detail-map" title={`Google Maps — ${factory.region}`} src={`https://www.google.com/maps?q=${encodeURIComponent(factory.query)}&hl=vi&z=8&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className={`factory-detail-map-marker factory-detail-map-marker-${factory.mapPosition}`} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(factory.query)}`} target="_blank" rel="noreferrer" aria-label={`Mở khu vực ${factory.region.split(" · ")[0]} trên Google Maps`}>
            <span className="factory-detail-map-pin"><MapPin size={18} /></span>
            <span className="factory-detail-map-label"><strong>{factory.shortName}</strong><small>{factory.region.split(" · ")[0]} · {factory.status}</small></span>
          </a>
          <div className="factory-detail-map-caption"><span><MapPin size={14} /> Nhà máy đang xem</span><small>Vị trí khu vực · chưa phải địa chỉ xưởng đã xác minh</small></div>
        </div>
      </section>

      <section className="factory-detail-section factory-detail-connections">
        <div className="factory-detail-section-head"><div><div className="eyebrow muted">Connected records</div><h2>Nhà máy không<br /><em>đứng một mình.</em></h2></div><p>Một hồ sơ hoàn chỉnh cần nối được người thiết kế, brand, vật liệu, đồ vật và các không gian nơi sản phẩm tiếp tục sống.</p></div>
          <div className="factory-connection-grid"><article><span>OBJECT</span><h3>{factory.related}</h3><p>{factory.relatedState}</p><a className="card-link" href={factory.id === "factory-05" ? "/objects/ambie-shelf" : "/objects"}>Mở hồ sơ đồ vật <ArrowUpRight size={15} /></a></article><article><span>BRAND</span><h3>{factory.id === "factory-05" ? "Sơn Protego" : "B+ Furniture"}</h3><p>{factory.id === "factory-05" ? "Vật liệu hoàn thiện · đang xác minh" : "Liên hệ trong hồ sơ Cloudy · do brand cung cấp"}</p><a className="card-link" href={factory.id === "factory-05" ? "/materials" : "/provenance"}>Xem thư viện vật liệu <ArrowUpRight size={15} /></a></article><article><span>DESIGNER</span><h3>{factory.id === "factory-05" ? "Cao Thị Mai Nguyễn · Daniela Thạch Thảo" : "Designer 01 / Furniture"}</h3><p>{factory.id === "factory-05" ? "Hai hồ sơ cá nhân tạm · cùng thiết kế Ambie Shelf" : "Hồ sơ cá nhân mẫu · liên kết cần xác minh"}</p><a className="card-link" href={factory.id === "factory-05" ? "/designers" : "/designers/designer-01"}>Mở cộng đồng Designer <ArrowUpRight size={15} /></a></article></div>
      </section>

      <section className="factory-detail-verification"><div className="eyebrow light"><ShieldCheck size={14} /> Data status</div><h2>Hồ sơ đang mở<br /><em>để được kiểm chứng.</em></h2><div className="factory-verification-grid"><span><Check size={15} /> Vùng/tỉnh: đang hiển thị</span><span><FileCheck2 size={15} /> Năng lực: dữ liệu mẫu</span><span><FileCheck2 size={15} /> Địa chỉ: chưa công bố</span></div><a className="light-button" href="/provenance">Xem nguyên tắc nguồn gốc <ArrowUpRight size={16} /></a></section>
    </MonosFrame>
  );
}
