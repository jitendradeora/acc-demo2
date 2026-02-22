import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionTitle } from '../components/SectionTitle';
import { Clock, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import newsone from '@/assets/news-1.jpg';
import newstwo from '@/assets/news-2.jpg';
import newsthree from '@/assets/news-3.jpg';
import newsfour from '@/assets/news-4.jpg';
import newsfive from '@/assets/news-5.jpg';

const milestones = [
  { year: '2025', title: 'التأسيس والبداية', description: 'تأسس النادي الثقافي العربي في الشارقة كأول نادٍ ثقافي يجمع المثقفين العرب في دولة الإمارات العربية المتحدة.', image: newsone },
  { year: '2020', title: 'المقر الجديد', description: 'الافتتاح الرسمي للمقر الدائم للنادي في منطقة الآبار، ليكون مركزاً متكاملاً للأنشطة الثقافية والأدبية.', image: newstwo },
  { year: '2015', title: 'إطلاق مهرجان الشارقة للشعر', description: 'بداية تنظيم المهرجانات الشعرية الكبرى التي استضافت شعراء من كافة أنحاء الوطن العربي.', image: newsthree },
  { year: '2010', title: 'جائزة الشارقة للإبداع العربي', description: 'توسع دور النادي في دعم الجوائز الثقافية التي ترعاها دائرة الثقافة بالشارقة.', image: newsfour },
  { year: '2005', title: 'اليوبيل الأربعيني', description: 'الاحتفال بمرور 40 عاماً على تأسيس النادي، وتدشين الأرشيف الرقمي للثقافة العربية.', image: newsfive },
];

export const History = () => {
  return (
    <div className="pt-25 pb-25">
      <SEO title="تاريخ النادي" description="رحلة النادي الثقافي العربي في الشارقة عبر العقود." />
      
      <div className="py-10 mb-10 relative overflow-hidden text-center bg-secondary"> 
        <div className="container max-w-2xl mx-auto px-4 md:px-6 relative z-10 ">
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-black">مسيرة من العطاء</h1>
          <p className="text-x2 max-w-2xl mx-auto leading-relaxed text-black">
            أكثر من أربعة عقود من الريادة الثقافية، نروي فيها قصة الإبداع التي بدأت من الشارقة ووصلت إلى كل بيت عربي.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative border-r-2 border-club-purple/20 pr-8 md:pr-0 md:border-r-0 max-w-5xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-club-purple/20 -translate-x-1/2 hidden md:block"></div>

          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative mb-24 md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Year marker */}
              <div className="absolute top-0 -right-10 md:right-auto md:left-1/2 w-12 h-12 bg-club-purple rounded-full flex items-center justify-center text-white font-bold text-sm z-20 md:-translate-x-1/2 shadow-lg border-4 border-background">
                {milestone.year}
              </div>

              {/* Content Card */}
              <div className="md:w-[45%]">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-border group hover:shadow-xl transition-all duration-300">
                  <div className="h-48 rounded-2xl overflow-hidden mb-6">
                    <ImageWithFallback src={milestone.image} alt={milestone.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-club-purple transition-colors">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-8">وما زال العطاء مستمراً</h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             نحن اليوم نكتب فصولاً جديدة في تاريخ النادي، مستندين إلى إرثنا العريق وطموحاتنا التي لا تعرف الحدود في خدمة الثقافة العربية والإنسان.
           </p>
        </div>
      </div>
    </div>
  );
};
