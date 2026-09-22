import React, { useState } from 'react';
import { 
  X, 
  Minus, 
  Send, 
  Image as ImageIcon, 
  Smile, 
  CheckCircle2, 
  QrCode, 
  Sparkles
} from 'lucide-react';
import { CURRENT_USER } from '../data/mockData';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  contactName: string;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({
  isOpen,
  onClose,
  contactName
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'them',
      text: `Chào anh Tuấn! Em là đại diện của ${contactName}. Cảm ơn anh đã theo dõi các đồ vật của bên em trên Monos.`,
      time: '14:20'
    },
    {
      id: 'm2',
      sender: 'me',
      text: 'Chào bạn! Mình rất ấn tượng với chiếc ghế Cloudy và cách xưởng xử lý góc ngả 105 độ. Hiện tại mã định danh MNS-VN-2024-CLD01 lô mới đã có sẵn bản bọc vải Bouclé màu xám khói chưa bạn?',
      time: '14:22'
    },
    {
      id: 'm3',
      sender: 'them',
      text: 'Dạ đợt này bên em đang hoàn thiện lô 12 chiếc ở xưởng Đồng Nai, đều có khắc laser mã QR định danh và chứng chỉ gỗ Tần Bì FSC. Anh có muốn ghé qua studio Thảo Điền để ngồi thử thực tế không ạ?',
      time: '14:25'
    }
  ]);

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMsg = {
      id: Date.now().toString(),
      sender: 'me',
      text: messageText.trim(),
      time: 'Vừa xong'
    };

    setMessages([...messages, newMsg]);
    setMessageText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'them',
          text: 'Xưởng em đã ghi nhận thông tin kích thước và mã yêu cầu của anh. Bên em sẽ gửi hồ sơ kỹ thuật chi tiết qua email trong ít phút ạ!',
          time: 'Vừa xong'
        }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:right-8 z-50 w-80 sm:w-96 bg-white border border-[#e7e7e9] rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-200">
      {/* Chat Header */}
      <div className="p-4 bg-[#0d0c22] text-white flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
              {contactName.charAt(0)}
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#0d0c22]" />
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-xs truncate leading-tight">
              {contactName}
            </h4>
            <span className="text-[10px] text-emerald-400 font-medium block flex items-center gap-1">
              <span>Đang trực tuyến trên Monos</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-white/70">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:text-white rounded-full hover:bg-white/10"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button 
            onClick={onClose}
            className="p-1 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      {!isMinimized && (
        <>
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#f8f8f8] text-xs">
            <div className="text-center">
              <span className="px-3 py-1 bg-white rounded-full text-[10px] text-[#9e9ea7] border border-[#e7e7e9]">
                Kênh trao đổi chuyên môn & Đặt hàng xưởng Monos
              </span>
            </div>

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'me' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'me'
                      ? 'bg-[#0d0c22] text-white rounded-tr-xs'
                      : 'bg-white text-[#0d0c22] border border-[#e7e7e9] rounded-tl-xs shadow-2xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#9e9ea7] mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}
          </div>

          {/* Chat Footer Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#f3f3f4] flex items-center gap-2">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 h-9 px-3.5 rounded-full bg-[#f3f3f4] text-xs text-[#0d0c22] placeholder-[#9e9ea7] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#ea4c89]"
            />
            <button
              type="submit"
              disabled={!messageText.trim()}
              className="w-9 h-9 rounded-full bg-[#ea4c89] hover:bg-[#d63d76] text-white flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </>
      )}
    </div>
  );
};
