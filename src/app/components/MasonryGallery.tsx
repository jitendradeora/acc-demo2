import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import gallery1 from '@/assets/news-1.jpg';
import gallery2 from '@/assets/news-2.jpg';
import gallery3 from '@/assets/news-3.jpg';
import gallery4 from '@/assets/news-4.jpg';
import gallery5 from '@/assets/news-5.jpg';
import gallery6 from '@/assets/news-6.jpg';

const galleryImages = [
  { src: gallery1, title: "مبنى النادي الثقافي" },
  { src: gallery2, title: "معرض الخط العربي" },
  { src: gallery3, title: "عمارة الشارقة الإسلامية" },
  { src: gallery4, title: "أمسية شعرية" },
  { src: gallery5, title: "مكتبة النادي" },
  { src: gallery6, title: "ورشة عمل فنية" },
];

export const MasonryGallery: React.FC = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="20px">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
          >
            <ImageWithFallback
              src={img.src}
              alt={img.title}
              className="w-full block"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg px-4 text-center">{img.title}</span>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
