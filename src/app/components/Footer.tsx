import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback'; 

export const Footer: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* About Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-reverse space-x-4">
              
              <div className="flex flex-col">
                  <span className="font-bold text-xl leading-tight"> النادي الثقافي العربي في الشارقة </span>
              </div>
            </div>
            <p className="text-white/60 text-base leading-relaxed font-tajawal">
              منارة ثقافية رائدة في إمارة الشارقة، تهدف إلى تعزيز الهوية العربية ودعم الفكر والأدب والفن من خلال فعاليات نوعية وورش عمل متخصصة منذ عام 1981.
            </p>
            <div className="flex space-x-reverse space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple hover:border-accent-purple hover:scale-110 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-accent-blue font-tajawal relative inline-block">
              روابط سريعة
              <span className="absolute bottom-[-10px] right-0 w-12 h-1 bg-accent-purple rounded-full" />
            </h3>
            <ul className="space-y-5 text-white/70 font-tajawal text-lg">
              {[
                { label: 'نبذة عن النادي', path: 'about' },
                { label: 'تاريخ النادي', path: 'history' },
                { label: 'الفعاليات القادمة', path: 'events' },
                { label: 'أحدث الأخبار', path: 'news' },
                { label: 'معرض الصور', path: 'gallery' }
              ].map((link) => (
                <li key={link.path}>
                  <button 
                    onClick={() => setPage(link.path)} 
                    className="hover:text-white hover:mr-2 transition-all duration-300 flex items-center space-x-reverse space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultural Sharjah */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-accent-blue font-tajawal relative inline-block">
              ثقافة الشارقة
              <span className="absolute bottom-[-10px] right-0 w-12 h-1 bg-accent-purple rounded-full" />
            </h3>
            <ul className="space-y-5 text-white/70 font-tajawal text-lg">
              {['مهرجان الشارقة القرائي', 'أيام الشارقة التراثية', 'بينالي الشارقة', 'معرض الشارقة الدولي للكتاب'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:mr-2 transition-all duration-300 flex items-center space-x-reverse space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-accent-blue font-tajawal relative inline-block">
              تواصل معنا
              <span className="absolute bottom-[-10px] right-0 w-12 h-1 bg-accent-purple rounded-full" />
            </h3>
            <ul className="space-y-6 text-white/70 font-tajawal">
              <li className="flex items-start space-x-reverse space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent-purple shrink-0 border border-white/10">
                  <MapPin size={20} />
                </div>
                <span className="text-sm leading-relaxed">الشارقة، منطقة الثقافة، بجانب دائرة الثقافة والإعلام، دولة الإمارات العربية المتحدة.</span>
              </li>
              <li className="flex items-center space-x-reverse space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent-purple shrink-0 border border-white/10">
                  <Phone size={20} />
                </div>
                <span dir="ltr" className="text-lg font-bold tracking-wider">+971 6 555 1234</span>
              </li>
              <li className="flex items-center space-x-reverse space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent-purple shrink-0 border border-white/10">
                  <Mail size={20} />
                </div>
                <span className="text-sm">info@shjarabclub.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 mt-10 flex flex-col lg:flex-row justify-between items-center text-sm text-white/40 font-tajawal">
          <p className="mb-6 lg:mb-0">© {currentYear} النادي الثقافي العربي في الشارقة. جميع الحقوق محفوظة. تم التطوير بكل فخر في الشارقة.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">سياسة الخصوصية</button>
            <button onClick={() => setPage('terms')} className="hover:text-white transition-colors">شروط الاستخدام</button>
            <a href="#" className="hover:text-white transition-colors">خريطة الموقع</a>
            <a href="#" className="hover:text-white transition-colors">إمكانية الوصول</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
