"use client";

import { ArrowUpRight, Beaker, FileCheck2, Layers3, Search } from "lucide-react";
import { useMemo, useState } from "react";

type Material = {
  id: string;
  name: string;
  family: string;
  use: string;
  properties: string;
  source: string;
  status: string;
  tone: string;
};

const filters = ["Tất cả", "Gỗ", "Dệt may", "Kim loại", "Bề mặt", "Đệm & lõi"];

const materials: Material[] = [
  { id: "protego-paint", name: "Sơn Protego", family: "Bề mặt", use: "Hoàn thiện các chi tiết của Ambie Shelf", properties: "Vật liệu được ghi trong hồ sơ Ambie Shelf; màu, hệ sơn, độ bóng và quy trình thi công cần được xác nhận thêm với nhà máy Tân Thành.", source: "Ambie Shelf / dossier người dùng cung cấp", status: "Theo hồ sơ sản phẩm · đang xác minh", tone: "paint" },
  { id: "pinewood", name: "Gỗ tự nhiên", family: "Gỗ", use: "Khung, tay vịn, chi tiết chịu lực", properties: "Có thể gia công, chà nhám và phủ bảo vệ; cần xác định đúng chủng loại trước khi sản xuất.", source: "Cloudy / thông số do brand cung cấp", status: "Do thương hiệu cung cấp", tone: "wood" },
  { id: "contract-fabric", name: "Vải contract-grade", family: "Dệt may", use: "Bọc ghế, seating sử dụng thường xuyên", properties: "Ưu tiên độ bền mài mòn, khả năng vệ sinh và độ ổn định màu theo bối cảnh sử dụng.", source: "Cloudy / thông số do brand cung cấp", status: "Do thương hiệu cung cấp", tone: "fabric" },
  { id: "powder-coat", name: "Sơn tĩnh điện", family: "Bề mặt", use: "Chân thép, khung kim loại", properties: "Tạo lớp phủ đồng đều, hỗ trợ bảo vệ bề mặt và kiểm soát độ bóng theo mẫu màu.", source: "Cloudy / đang chờ hồ sơ xưởng", status: "Chưa xác minh", tone: "paint" },
  { id: "steel", name: "Thép", family: "Kim loại", use: "Chân, đế và kết cấu mảnh", properties: "Có thể cắt, hàn, uốn và hoàn thiện; thông số tiết diện cần được kiểm tra trên bản vẽ kỹ thuật.", source: "Cloudy / thông tin cấu hình", status: "Cộng đồng đóng góp", tone: "steel" },
  { id: "pu-foam", name: "Mút polyurethane", family: "Đệm & lõi", use: "Đệm ngồi, tay vịn và lưng ghế", properties: "Tỷ trọng, độ cứng và khả năng hồi phục ảnh hưởng trực tiếp đến cảm giác ngồi và tuổi thọ.", source: "Cloudy / thông số do brand cung cấp", status: "Do thương hiệu cung cấp", tone: "foam" },
  { id: "fiber-wrap", name: "Fiber wrap", family: "Đệm & lõi", use: "Lớp bao ngoài lõi đệm", properties: "Tạo độ mềm và chuyển tiếp cho hình khối bọc; cần ghi nhận quy cách trong hồ sơ sản xuất.", source: "Cloudy / đang chờ hồ sơ kỹ thuật", status: "Chưa xác minh", tone: "fiber" },
  { id: "veneer", name: "Veneer", family: "Bề mặt", use: "Ốp bề mặt, chi tiết gỗ hoàn thiện", properties: "Lựa chọn vân, chiều dày và lớp phủ quyết định cảm giác chạm và độ ổn định bề mặt.", source: "Hồ sơ thư viện mẫu", status: "Hồ sơ mẫu", tone: "veneer" },
  { id: "cork", name: "Bần", family: "Bề mặt", use: "Bề mặt chạm, panel và chi tiết nhẹ", properties: "Nhẹ, có độ đàn hồi và bề mặt nhận diện; cần xác minh nguồn gốc và quy cách ép.", source: "Hồ sơ thư viện mẫu", status: "Hồ sơ mẫu", tone: "cork" },
];

export default function MaterialLibrary() {
  const [filter, setFilter] = useState("Tất cả");
  const [query, setQuery] = useState("");
  const visibleMaterials = useMemo(() => materials.filter((material) => {
    const matchesFilter = filter === "Tất cả" || material.family === filter;
    const search = query.trim().toLowerCase();
    const matchesQuery = !search || `${material.name} ${material.family} ${material.use}`.toLowerCase().includes(search);
    return matchesFilter && matchesQuery;
  }), [filter, query]);

  return (
    <section className="material-library">
      <div className="material-library-toolbar">
        <span>{visibleMaterials.length} vật liệu đang hiển thị</span>
        <label className="material-search">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm vật liệu" aria-label="Tìm vật liệu" />
        </label>
      </div>

      <div className="material-filters" role="tablist" aria-label="Lọc thư viện vật liệu">
        {filters.map((item) => (
          <button type="button" role="tab" aria-selected={filter === item} className={filter === item ? "is-active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>

      <div className="material-grid">
        {visibleMaterials.map((material) => (
          <article className="material-card" key={material.id}>
            <div className={`material-swatch material-swatch-${material.tone}`}><Layers3 size={26} strokeWidth={1.4} /></div>
            <div className="material-card-top"><span>{material.family}</span><small><i />{material.status}</small></div>
            <h2>{material.name}</h2>
            <p className="material-use">{material.use}</p>
            <p>{material.properties}</p>
            <div className="material-source"><FileCheck2 size={15} /><span>{material.source}</span></div>
            <a className="card-link" href="/provenance">Xem nguồn & bằng chứng <ArrowUpRight size={15} /></a>
          </article>
        ))}
      </div>

      <div className="directory-note material-note"><Beaker size={16} /><span>Thư viện là lớp dữ liệu tham chiếu cho thiết kế và sản xuất. Một vật liệu chỉ trở thành dữ liệu đã xác minh khi có nguồn, mẫu hoặc bằng chứng đi kèm.</span></div>
    </section>
  );
}
