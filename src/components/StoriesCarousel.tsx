import React from 'react';
import { Plus, Sparkles, ShieldCheck } from 'lucide-react';
import { StoryHighlight, ObjectProfile } from '../types';
import { CURRENT_USER } from '../data/mockData';

interface StoriesCarouselProps {
  stories: StoryHighlight[];
  onSelectStoryObject: (objectId: string) => void;
  onOpenCreateStory: () => void;
}

export const StoriesCarousel: React.FC<StoriesCarouselProps> = ({
  stories,
  onSelectStoryObject,
  onOpenCreateStory
}) => {
  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 py-4">
      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none select-none">
        {/* Creator Story Trigger */}
        <div 
          onClick={onOpenCreateStory}
          className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group"
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 border-2 border-dashed border-[#ea4c89] flex items-center justify-center group-hover:scale-105 transition-transform bg-white">
            <img 
              src={CURRENT_USER.avatar} 
              alt={CURRENT_USER.name} 
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0d0c22] text-white flex items-center justify-center border-2 border-white shadow-xs">
              <Plus className="w-3.5 h-3.5" />
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#0d0c22] text-center max-w-[72px] truncate">
            Tạo tin mới
          </span>
        </div>

        {/* Stories from Makers / Designers */}
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => story.objectId && onSelectStoryObject(story.objectId)}
            className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#ea4c89] via-pink-400 to-amber-400 group-hover:scale-105 transition-transform shadow-xs">
              <div className="w-full h-full rounded-full p-0.5 bg-white">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-[#ea4c89] text-white text-[8px] font-bold px-1 rounded-full font-mono uppercase">
                TIN
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#0d0c22] text-center max-w-[80px] truncate">
              {story.author?.split(' ')[0] || story.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
