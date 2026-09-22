import React from 'react';
import { X, Bookmark, ExternalLink, Trash2, Layers, QrCode } from 'lucide-react';
import { ObjectProfile } from '../types';

interface SavedCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedObjects: ObjectProfile[];
  onRemoveFromSaved: (id: string) => void;
  onOpenObjectProfile: (obj: ObjectProfile) => void;
}

export const SavedCollectionModal: React.FC<SavedCollectionModalProps> = ({
  isOpen,
  onClose,
  savedObjects,
  onRemoveFromSaved,
  onOpenObjectProfile
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div 
        className="bg-white border border-[#e7e7e9] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-[#0d0c22] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#f3f3f4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#ea4c89] fill-[#ea4c89]" />
            <h3 className="font-bold text-lg font-display text-[#0d0c22]">
              Bộ Sưu Tập Đồ Vật Của Bạn ({savedObjects.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#f3f3f4] text-[#6e6d7a] hover:text-[#0d0c22] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {savedObjects.length > 0 ? (
            savedObjects.map((obj) => (
              <div 
                key={obj.id}
                className="p-3.5 bg-[#f8f8f8] border border-[#e7e7e9] rounded-2xl flex items-center justify-between gap-4 hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <img 
                    src={obj.images[0]} 
                    alt={obj.name} 
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#e7e7e9]"
                  />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-[#ea4c89] bg-[#ea4c89]/10 px-2 py-0.5 rounded-full font-bold">
                      {obj.monosCode}
                    </span>
                    <h4 className="font-bold text-sm text-[#0d0c22] truncate mt-1">
                      {obj.name}
                    </h4>
                    <span className="text-xs text-[#6e6d7a] block truncate">
                      {obj.brand} • {obj.designer.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onOpenObjectProfile(obj);
                      onClose();
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-[#0d0c22] hover:bg-[#2e2d3d] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Xem hồ sơ
                  </button>

                  <button
                    onClick={() => onRemoveFromSaved(obj.id)}
                    className="p-2 rounded-full hover:bg-rose-50 text-[#9e9ea7] hover:text-rose-600 transition-colors cursor-pointer"
                    title="Xóa khỏi bộ sưu tập"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-[#9e9ea7] space-y-2">
              <Bookmark className="w-10 h-10 mx-auto opacity-30 text-[#ea4c89]" />
              <p className="text-sm font-semibold text-[#0d0c22]">Chưa có đồ vật nào trong bộ sưu tập</p>
              <p className="text-xs text-[#6e6d7a]">Nhấn biểu tượng Lưu trữ trên các Shot đồ vật để gom vào đây.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
