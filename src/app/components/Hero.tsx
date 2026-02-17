import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Play, Sparkles, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import banner from '@/assets/acc-banner-3.jpg';

//import logo from "figma:asset/665594bb71bcdb9334ebb59cc5fb94e1679c29b7.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-secondary">
      {/* Background Layer: Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1731167710949-e7bb4b0d3b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Arabic Pattern"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Background Layer: Gradient & Shapes */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-accent-purple/10 to-transparent z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/50 to-transparent z-0" />

      {/* Decorative Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none rotate-12 z-0">
        {/* <img src={logo} alt="" className="w-full h-full object-contain" /> */}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center space-x-reverse space-x-3 px-6 py-2.5 bg-white/80 backdrop-blur-md border border-accent-purple/10 text-accent-purple rounded-full text-sm font-bold shadow-sm">
              <Sparkles size={16} className="text-accent-purple animate-pulse" />
              <span>نحتفي بمرور 45 عاماً من الإبداع الثقافي</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-6xl font-black font-tajawal text-primary tracking-tight">
                واحة الفكر <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-purple/70">ومحراب الأدب</span>
              </h1>
              <div className="w-24 h-2 bg-accent-purple rounded-full" />
            </div>
            
            <p className="text-xl text-primary/70 max-w-xl leading-relaxed font-medium">
              في قلب الشارقة، يزدهر النادي الثقافي العربي كجسر يربط بين عراقة الماضي وطموح المستقبل، حيث تجتمع العقول لترسم ملامح الغد الثقافي.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">
              <button className="bg-primary text-white flex items-center space-x-reverse space-x-3 text-lg px-10 py-5 rounded-2xl hover:bg-accent-purple hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/20">
                <span className="font-tajawal font-bold">استكشف الفعاليات</span>
                <ChevronLeft size={24} />
              </button>
              <button className="group flex items-center space-x-reverse space-x-4 gap-x-3 px-6 py-4 font-tajawal font-bold text-primary hover:text-accent-purple transition-all">
                <div className="w-14 h-14 rounded-full border-2 border-primary/10 flex items-center justify-center bg-white shadow-lg group-hover:bg-accent-purple group-hover:border-accent-purple group-hover:text-white transition-all duration-500">
                  <Play size={24} fill="currentColor" />
                </div>
                <span className="text-lg">رحلة في أروقة النادي</span>
              </button>
            </div>

             
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="relative"
          >
            <div className="relative z-20">
              {/* Main Image Card */}
              <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-white">
                <ImageWithFallback 
                  src={banner} 
                  alt="ثقافة الشارقة"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                
                {/* Floating Info Badge */}
                

                <div className="absolute bottom-10 right-10 left-10 p-8 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent-blue text-primary text-[10px] font-black rounded-full mb-3 uppercase tracking-tighter">الحدث القادم</span>
                      <h4 className="text-white text-2xl font-bold font-tajawal">مهرجان الشارقة للمسرح العربي</h4>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg">
                      <ChevronLeft size={24} />
                    </div>
                  </div>
                </div>
              </div>

              
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
