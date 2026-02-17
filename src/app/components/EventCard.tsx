import React from 'react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  image: string;
  category: string;
}

export const EventCard: React.FC<EventProps> = ({ title, date, location, time, image, category }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/5">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent-purple text-white px-3 py-1 rounded-full text-xs font-bold">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-primary/50 font-medium">
          <div className="flex items-center space-x-reverse space-x-1">
            <Calendar size={14} className="text-accent-purple" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-reverse space-x-1">
            <Clock size={14} className="text-accent-purple" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-reverse space-x-1">
            <MapPin size={14} className="text-accent-purple" />
            <span>{location}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold font-tajawal mb-4 group-hover:text-accent-purple transition-colors">
          {title}
        </h3>
        
        <button className="flex items-center space-x-reverse space-x-2 text-accent-purple font-bold text-sm group/btn">
          <span>سجل الآن</span>
          <ArrowLeft size={16} className="transition-transform group-hover/btn:-translate-x-1" />
        </button>
      </div>
    </div>
  );
};
