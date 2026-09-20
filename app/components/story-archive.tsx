import {
  ArrowUpRight,
  BookOpenText,
  Factory,
  Home,
  Layers3,
  PencilRuler,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

const cloudyLayers = [
  {
    number: "01",
    title: "Object Story",
    subtitle: "Món đồ là nhân vật",
    icon: BookOpenText,
    state: "Thông tin do brand cung cấp",
    body: "Cloudy là một lounge chair của B+ Furniture, mã LC060. Hình dáng được phát triển từ cảm giác mềm, nhẹ và được ôm lấy; các múi đệm ngang tạo nhịp như một đám mây đang trôi, còn khung chân mảnh giữ cho chiếc ghế không trở nên nặng nề.",
    note: "Câu chuyện hiện được đối chiếu từ trang sản phẩm B+. Chưa có lời kể độc lập từ người thiết kế.",
  },
  {
    number: "02",
    title: "Designer",
    subtitle: "Người đứng sau",
    icon: PencilRuler,
    state: "Chưa xác minh",
    body: "Hồ sơ nguồn hiện chưa công bố tên designer, các bản vẽ đầu tiên, số vòng prototype hay những phương án đã bị loại. Lớp này được giữ mở để bổ sung người vẽ, người thử mẫu và các quyết định giúp Cloudy đi vào sản xuất.",
    note: "Không gán tác giả khi chưa có tài liệu hoặc xác nhận trực tiếp.",
  },
  {
    number: "03",
    title: "How it’s made",
    subtitle: "Từ prototype đến xưởng",
    icon: Factory,
    state: "Brand cung cấp · Chờ dữ liệu xưởng",
    body: "Dữ liệu kỹ thuật cho biết ghế dùng khung gỗ tự nhiên đã xử lý, đệm polyurethane tỷ trọng D35–50 bọc fiber, vải contract-grade và chân thép sơn tĩnh điện. Trình tự làm mẫu, cấu tạo khớp, kỹ thuật bọc và đơn vị hoàn thiện vẫn chưa có bằng chứng công khai.",
    note: "Những gì thuộc thông số được ghi nhận; những gì thuộc quy trình xưởng vẫn là khoảng trống.",
  },
  {
    number: "04",
    title: "Vật liệu",
    subtitle: "Chọn gì, vì sao",
    icon: Layers3,
    state: "Thông tin do brand cung cấp",
    body: "Cloudy kết hợp khung gỗ Pinewood, Ash hoặc Beech theo chỉ định; mút tỷ trọng cao; lớp fiber; vải contract-grade trên 30.000 chu kỳ Martindale; và chân thép sơn tĩnh điện mờ. Vải và đệm tạo độ mềm thị giác, trong khi gỗ và thép đảm nhiệm kết cấu.",
    note: "Nguồn vật liệu, nhà cung cấp và tỷ lệ cấu thành chưa được công bố.",
  },
  {
    number: "05",
    title: "Nguồn gốc",
    subtitle: "Brand, xưởng, bằng chứng",
    icon: ShieldCheck,
    state: "Đã đối chiếu một phần",
    body: "Brand B+ Furniture, tên sản phẩm Cloudy, mã LC060, nhóm Lounge Chair và thông số 850 × 840 × 790 mm được đối chiếu từ nguồn chính thức. Tên xưởng, nơi lắp ráp và nguồn gốc từng bộ phận chưa được xác minh độc lập.",
    note: "Monos tách rõ dữ liệu đã đối chiếu, dữ liệu brand khai và phần chưa biết.",
  },
  {
    number: "06",
    title: "Đời sống thật",
    subtitle: "Sau khi rời showroom",
    icon: Home,
    image: "/cloudy-space-pvgas.jpg",
    imageAlt: "Cloudy trong một không gian văn phòng mở",
    state: "Hồ sơ đang mở",
    body: "Chưa có hồ sơ người dùng về nơi Cloudy đang sống, bề mặt thay đổi ra sao, ghế đã được sửa hay di chuyển qua những ngôi nhà nào. Đây là lớp dành cho ảnh trong không gian thật, dấu vết sử dụng và ký ức của người sống cùng món đồ.",
    note: "Không dùng ảnh styling để thay cho bằng chứng về đời sống thật.",
  },
  {
    number: "07",
    title: "Kết nối ngành",
    subtitle: "Designer ↔ xưởng ↔ brand",
    icon: Waypoints,
    state: "Bản đồ quan hệ đang mở",
    body: "Cloudy có brand đã xác định, nhưng mắt xích designer và xưởng vẫn cần được nối bằng nguồn tham chiếu. Câu chuyện đồ vật dùng món đồ như điểm gặp để hiểu ai nghĩ, ai làm, ai chịu trách nhiệm cho từng quyết định — không biến mối quan hệ này thành trang bán hàng.",
    note: "Mục tiêu là làm rõ hệ sinh thái tạo ra sản phẩm, không thúc đẩy giao dịch.",
  },
];

export default function StoryArchive() {
  return (
    <article className="magazine-seven-layers" aria-labelledby="cloudy-magazine-title">
      <header className="magazine-object-intro">
        <div className="magazine-object-copy">
          <span className="magazine-issue">Câu chuyện đồ vật / 001</span>
          <h2 id="cloudy-magazine-title">Cloudy<span>.</span></h2>
          <p className="magazine-hook">Vì sao một chiếc ghế lại muốn được ôm?</p>
          <p>
            Cloudy bắt đầu từ một cảm giác rất đơn giản: ngồi xuống và được giữ lấy. Từ đó,
            câu chuyện đi qua người thiết kế, vật liệu, xưởng làm ra nó và nơi chiếc ghế bắt đầu sống.
          </p>
          <div className="magazine-object-meta">
            <span>B+ Furniture</span><span>LC060</span><span>Lounge chair</span><span>Việt Nam</span>
          </div>
        </div>
        <figure className="magazine-object-image">
          <img
            src="https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY%203.jpg"
            alt="Ghế Cloudy của B+ Furniture"
          />
          <figcaption>Ảnh sản phẩm / B+ Furniture</figcaption>
        </figure>
      </header>

      <div className="magazine-fact-strip" aria-label="Thông tin nhanh về Cloudy">
        <div><span>Brand</span><strong>B+ Furniture</strong></div>
        <div><span>Mã sản phẩm</span><strong>LC060</strong></div>
        <div><span>Loại</span><strong>Lounge chair</strong></div>
        <div><span>Hồ sơ</span><strong>Đang mở</strong></div>
      </div>

      <div className="magazine-reading-note">
        <span>Đọc theo hành trình</span>
        <p>Không phải bảy chuyên mục. Một món đồ đi qua bảy lớp để lộ ra những người, vật liệu và quyết định phía sau nó.</p>
      </div>

      <nav className="magazine-layer-index" aria-label="Bảy lớp của hồ sơ Cloudy">
        {cloudyLayers.map((layer) => <a href={`#layer-${layer.number}`} key={layer.number}>{layer.number} {layer.title}</a>)}
      </nav>

      <div className="magazine-layer-list">
        {cloudyLayers.map((layer) => {
          const Icon = layer.icon;
          return (
            <section className="magazine-layer" id={`layer-${layer.number}`} key={layer.number}>
              <div className="magazine-layer-number">{layer.number}</div>
              <div className="magazine-layer-title">
                <Icon size={22} strokeWidth={1.6} />
                <span>{layer.subtitle}</span>
                <h3>{layer.title}</h3>
              </div>
              <div className="magazine-layer-content">
                <span className="magazine-layer-state"><i /> {layer.state}</span>
                <p>{layer.body}</p>
                {layer.image && (
                  <figure className="magazine-layer-image">
                    <img src={layer.image} alt={layer.imageAlt} loading="lazy" />
                    <figcaption>Furniture in use / Không gian đại diện cho Cloudy</figcaption>
                  </figure>
                )}
                <small>{layer.note}</small>
              </div>
            </section>
          );
        })}
      </div>

      <footer className="magazine-footer">
        <div>
          <span>Đọc tiếp hồ sơ dữ liệu</span>
          <h3>Object Profile / Cloudy</h3>
        </div>
        <a className="dark-button" href="/objects#cloudy-product-data">Mở hồ sơ Cloudy <ArrowUpRight size={16} /></a>
      </footer>
    </article>
  );
}
