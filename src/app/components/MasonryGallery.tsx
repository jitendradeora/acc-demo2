import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1759047589470-a1e877b717aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", title: "مبنى النادي الثقافي" },
  { src: "https://images.unsplash.com/photo-1603801571246-be066de0c73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", title: "معرض الخط العربي" },
  { src: "https://images.unsplash.com/photo-1651566222024-6df11f897be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", title: "عمارة الشارقة الإسلامية" },
  { src: "https://images.unsplash.com/photo-1712366786881-e080e66fbf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", title: "أمسية شعرية" },
  { src: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", title: "مكتبة النادي" },
  { src: "https://images.unsplash.com/photo-1574169208507-84376144848b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", title: "ورشة عمل فنية" },
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
