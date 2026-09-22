import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UploadCloud, 
  Scan, 
  CheckCircle2, 
  AlertTriangle, 
  FileSearch, 
  ArrowRight, 
  Sparkles, 
  RefreshCw, 
  Download, 
  HelpCircle,
  Layers,
  Check,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { ObjectProfile } from '../types';
import { INITIAL_OBJECTS } from '../data/mockData';

interface ScanPatternWorkspaceProps {
  initialObject?: ObjectProfile | null;
  onViewObjectProfile: (obj: ObjectProfile) => void;
}

export const ScanPatternWorkspace: React.FC<ScanPatternWorkspaceProps> = ({
  initialObject,
  onViewObjectProfile
}) => {
  const [selectedPreset, setSelectedPreset] = useState<ObjectProfile>(initialObject || INITIAL_OBJECTS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanCompleted, setScanCompleted] = useState(true);

  const [downloadedPdf, setDownloadedPdf] = useState(false);

  const startScanSimulation = () => {
    setIsScanning(true);
    setScanCompleted(false);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => {
      setIsScanning(false);
      setScanCompleted(true);
    }, 2100);
  };

  return (
    <div className="monos-scan-page w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Dribbble Style Studio Header */}
      <div className="bg-white border border-[#e7e7e9] rounded-3xl p-6 sm:p-10 text-[#0d0c22] shadow-xs space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f4] text-[#0d0c22] font-mono text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Hạ tầng kiểm định bản quyền thiết kế • Monos Scan Pattern AI</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black font-display text-[#0d0c22] tracking-tight">
          Kiểm Tra Tính Nguyên Bản & Phân Tích Hình Học Đồ Vật
        </h1>

        <p className="text-sm text-[#6e6d7a] max-w-2xl leading-relaxed">
          Công cụ trích xuất vector 3D đường cong công thái học, kết cấu mộng âm dương và đối chiếu thời gian ra mắt với cơ sở dữ liệu nội thất Đông Nam Á & Quốc tế.
        </p>

        {/* Workflow breadcrumbs */}
        <div className="pt-3 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-full bg-[#f3f3f4] text-[#0d0c22] font-semibold">
            1. Tải lên ảnh / CAD
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#9e9ea7]" />
          <span className="px-3 py-1.5 rounded-full bg-[#f3f3f4] text-[#0d0c22] font-semibold">
            2. Trích xuất vector mộng
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#9e9ea7]" />
          <span className="px-3 py-1.5 rounded-full bg-[#f3f3f4] text-[#0d0c22] font-semibold">
            3. Đối chiếu kho dữ liệu
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#9e9ea7]" />
          <span className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 font-bold">
            4. Cấp chứng chỉ & Mã MNS
          </span>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="bg-white border border-[#e7e7e9] rounded-3xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-[#0d0c22]">
            Chọn mẫu đồ vật để chạy kiểm định:
          </h3>
          <span className="text-xs text-[#6e6d7a]">
            Đang chọn: <strong>{selectedPreset.name}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {INITIAL_OBJECTS.map((obj) => (
            <button
              key={obj.id}
              onClick={() => {
                setSelectedPreset(obj);
                startScanSimulation();
              }}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                selectedPreset.id === obj.id
                  ? 'border-[#0d0c22] bg-[#f8f8f8] shadow-xs'
                  : 'border-[#e7e7e9] bg-white hover:bg-[#f8f8f8]'
              }`}
            >
              <img src={obj.images[0]} alt="" className="w-12 h-12 rounded-xl object-cover" />
              <div className="min-w-0">
                <span className="font-bold text-xs text-[#0d0c22] block truncate">{obj.name}</span>
                <span className="font-mono text-[10px] text-[#ea4c89]">{obj.monosCode}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Inspection Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Canvas */}
        <div className="lg:col-span-7 bg-white border border-[#e7e7e9] rounded-3xl p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7]">
              Mặt bằng nhận diện vector 3D
            </span>
            <button
              onClick={startScanSimulation}
              disabled={isScanning}
              className="px-4 py-1.5 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Đang phân tích...' : 'Chạy lại phân tích'}</span>
            </button>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f3f3f4] border border-[#e7e7e9]">
            <img 
              src={selectedPreset.images[0]} 
              alt={selectedPreset.name} 
              className="w-full h-full object-cover"
            />

            {/* Scan animation line */}
            {isScanning && (
              <div className="absolute inset-x-0 h-1 bg-[#ea4c89] shadow-[0_0_15px_#ea4c89] animate-bounce" />
            )}

            {/* Vector overlay nodes */}
            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white font-mono text-[10px] border border-white/20">
                  Node A: Bán kính uốn lưng R=420mm (105°)
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white font-mono text-[10px] border border-white/20">
                  Node B: Mộng âm giấu vít chịu lực 180kg
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="px-2.5 py-1 rounded-lg bg-teal-900/90 backdrop-blur-md text-teal-200 font-mono text-[10px] border border-teal-500/40">
                  Vật liệu: Gỗ Tần Bì (Ash) + Nỉ Bouclé
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-[#ea4c89] text-white font-mono text-[10px] font-bold">
                  {selectedPreset.monosCode}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Inspection Report Card */}
        <div className="lg:col-span-5 bg-white border border-[#e7e7e9] rounded-3xl p-6 space-y-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#f3f3f4]">
              <div>
                <h4 className="font-bold text-base text-[#0d0c22] font-display">Kết Quả Kiểm Định</h4>
                <span className="text-xs text-[#6e6d7a]">Thuật toán Monos Vector Pattern v2.4</span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-teal-50 border-2 border-teal-500 flex flex-col items-center justify-center font-bold text-teal-700">
                <span className="text-2xl leading-none font-mono">94%</span>
                <span className="text-[8px] uppercase tracking-wider font-bold">Nguyên bản</span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9e9ea7] block">
                Đặc tính cấu trúc đã thẩm định:
              </span>
              {selectedPreset.scanPatternReport.featuresAnalyzed.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3d3d4e]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#f8f8f8] rounded-2xl border border-[#e7e7e9] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e9ea7] block">
                Đối chiếu tương đồng trong cơ sở dữ liệu:
              </span>
              {selectedPreset.scanPatternReport.similarReferences.map((ref, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="flex justify-between font-semibold text-[#0d0c22]">
                    <span>{ref.name}</span>
                    <span className="font-mono text-[#ea4c89]">{ref.similarity}% tương đồng</span>
                  </div>
                  <p className="text-[11px] text-[#6e6d7a]">{ref.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#f3f3f4] flex gap-2">
            <button
              onClick={() => onViewObjectProfile(selectedPreset)}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Xem toàn bộ hồ sơ →
            </button>
            <button
              onClick={() => {
                setDownloadedPdf(true);
                setTimeout(() => setDownloadedPdf(false), 2500);
              }}
              className="px-4 py-2.5 rounded-full bg-[#f3f3f4] hover:bg-[#e7e7e9] text-[#0d0c22] text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadedPdf ? '✓ Đã xuất PDF' : 'Xuất PDF'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
