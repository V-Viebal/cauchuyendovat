"use client";

import { ChevronRight, CheckCircle2, FileSearch, ScanLine, SearchCheck, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { scanArchive } from "../monos-data";

type ScanResult = {
  kind: "match" | "clear" | "empty";
  title: string;
  subtitle: string;
  status: string;
  detail: string;
};

export default function ScanPattern() {
  const [scanOpen, setScanOpen] = useState(true);
  const [scanQuery, setScanQuery] = useState("");
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

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
    <section className="provenance-section route-provenance section-pad" id="scan-pattern">
      <div className="provenance-copy">
        <div className="eyebrow light"><ScanLine size={14} /> Scan Pattern</div>
        <h1>Kiểm tra trước khi<br /><em>công bố.</em></h1>
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
            <label htmlFor="route-scan-query">Tên sản phẩm, brand, designer hoặc URL</label>
            <div className="scan-input-row">
              <input
                id="route-scan-query"
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
  );
}
