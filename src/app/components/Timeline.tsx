import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
const historyData = [
  { year: '2025', Image: '@/assets/news-1.jpg',  title: 'التأسيس', description: 'تأسس النادي الثقافي العربي في الشارقة ليكون ملتقى للمثقفين والمبدعين العرب.' },
  { year: '2020', Image: '@/assets/news-2.jpg',  title: 'المقر الدائم', description: 'انتقال النادي إلى مقره الحالي المتميز بتصميمه المعماري الإسلامي الفريد.' },
  { year: '2015', Image: '@/assets/news-3.jpg', title: 'موسوعة الثقافة', description: 'إطلاق أكبر مشروع لتوثيق الفعاليات الثقافية والأدبية في الإمارة.' },
  { year: '2010', Image: '@/assets/news-4.jpg',  title: 'جائزة الإبداع', description: 'إطلاق جائزة النادي الثقافي العربي للإبداع الأدبي والفكري.' },
  { year: '2005', Image: '@/assets/news-5.jpg',  title: 'التحول الرقمي', description: 'إطلاق المنصة الرقمية التفاعلية للنادي للوصول إلى جمهور أوسع عالمياً.' },
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Central Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/10 -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-12 relative">
        {historyData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Content Container */}
            <div className="w-full md:w-1/2 p-4">
              
              <div className={`glass-card p-8 relative ${index % 2 === 0 ? 'md:mr-8 text-right' : 'md:ml-8 text-right md:text-left'}`}>
                <ImageWithFallback src={item.Image} alt={item.title} className="w-full h-full object-cover mb-4" />
                <span className="text-3xl font-black text-accent-purple/20 absolute top-4 left-4 md:left-auto md:right-4 font-tajawal">{item.year}</span>
                <h3 className="text-xl font-bold mb-3 text-accent-purple">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed">{item.description}</p>
              </div>

            </div>
            
            {/* Dot on Line */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-accent-purple items-center justify-center z-10 shadow-lg">
              <div className="w-2 h-2 bg-accent-purple rounded-full" />
            </div>
            
            {/* Spacer */}
            <div className="w-full md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
