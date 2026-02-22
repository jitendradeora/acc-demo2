import React from 'react';
import { NavLink } from 'react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">               
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight"> النادي الثقافي العربي في الشارقة </span>                
              </div>
            </div>
            <p className="text-secondary/70 leading-relaxed text-sm">
              مؤسسة ثقافية عربية رائدة في إمارة الشارقة، تهدف إلى تعزيز الهوية الثقافية العربية وفتح آفاق الحوار الإبداعي والفكري.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-club-purple hover:border-club-purple transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-club-purple hover:border-club-purple transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-club-purple hover:border-club-purple transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-club-purple hover:border-club-purple transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-r-4 border-club-purple pr-4">روابط سريعة</h3>
            <ul className="flex flex-col gap-4 text-secondary/70 text-sm">
              <li><NavLink to="/about" className="hover:text-club-blue transition-colors">من نحن</NavLink></li>
              <li><NavLink to="/events" className="hover:text-club-blue transition-colors">الفعاليات القادمة</NavLink></li>
              <li><NavLink to="/news" className="hover:text-club-blue transition-colors">آخر الأخبار</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-club-blue transition-colors">معرض الصور</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-club-blue transition-colors">تواصل معنا</NavLink></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-r-4 border-club-purple pr-4"> النشرة الثقافية </h3>
            <ul className="flex flex-col gap-4 text-secondary/70 text-sm">
              <li><NavLink to="/" className="hover:text-club-blue transition-colors"> مهرجان الشارقة القرائي  </NavLink></li>
              <li><NavLink to="/" className="hover:text-club-blue transition-colors"> أيام الشارقة التراثية </NavLink></li>
              <li><NavLink to="/" className="hover:text-club-blue transition-colors"> بينالي الشارقة </NavLink></li>
              <li><NavLink to="/" className="hover:text-club-blue transition-colors">  معرض الشارقة الدولي للكتاب </NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-r-4 border-club-blue pr-4">معلومات الاتصال</h3>
            <ul className="flex flex-col gap-4 text-secondary/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-club-blue" />
                <span>الشارقة، منطقة الآبار، ص.ب 20021، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-club-blue" />
                <span dir="ltr">+971 6 500 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-club-blue" />
                <span>info@shjarabclub.ae</span>
              </li>
            </ul>
          </div>

         
        </div>

        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/50">
          <p>© {currentYear} النادي الثقافي العربي في الشارقة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-secondary transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
