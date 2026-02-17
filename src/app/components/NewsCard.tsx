import React from 'react';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  onClick?: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ title, excerpt, date, author, image, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-500 group cursor-pointer"
    >
      <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
      </div>
      
      <div className="md:w-2/3 p-8 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center text-accent-purple text-xs font-bold uppercase tracking-widest">
            <Calendar size={14} className="ml-1.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-primary/40 text-xs font-bold uppercase tracking-widest">
            <User size={14} className="ml-1.5" />
            <span>{author}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 font-tajawal group-hover:text-accent-purple transition-colors leading-tight">
          {title}
        </h3>
        
        <p className="text-primary/60 text-sm mb-6 line-clamp-2 leading-relaxed font-tajawal">
          {excerpt}
        </p>
        
        <div className="flex items-center text-accent-purple font-bold text-sm group/btn">
          <span className="ml-2 group-hover/btn:ml-4 transition-all">اقرأ التفاصيل الكاملة</span>
          <ChevronLeft size={16} />
        </div>
      </div>
    </div>
  );
};
