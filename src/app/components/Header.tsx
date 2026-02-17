import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '@/assets/logo-dark.svg';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'الرئيسية', path: 'home' },
  { label: 'نبذة عنا', path: 'about' },
  { label: 'تاريخ النادي', path: 'history' },
  { label: 'الفعاليات', path: 'events' },
  { label: 'الأخبار', path: 'news' },
  { label: 'ثقافة الشارقة', path: 'culture' },
  { label: 'معرض الصور', path: 'gallery' },
  { label: 'اتصل بنا', path: 'contact' },
];

export const Header: React.FC<{ activePage: string; setPage: (page: string) => void }> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-4'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setPage('home')}
          >
            <div className="relative flex items-center gap-2 group w-[110px]">
                <img src={logo} alt="Logo" className="w-full h-full" /> 
            </div>
           
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-1 gap-x-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => setPage(item.path)}
                className={`px-4 py-2 font-tajawal text-lg font-medium transition-all relative group overflow-hidden rounded-lg ${
                  activePage === item.path 
                    ? 'text-accent-purple bg-accent-purple/5' 
                    : 'text-primary/70 hover:text-accent-purple hover:bg-white/50'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activePage === item.path && (
                  <motion.div 
                    layoutId="nav-pill" 
                    className="absolute inset-0 bg-accent-purple/10 -z-0" 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-1/2" />
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-3 text-primary/70 hover:text-accent-purple hover:bg-white rounded-full transition-all border border-transparent hover:border-primary/5"
            >
              <SearchIcon size={20} />
            </button>
            
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden space-x-reverse space-x-2">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-primary bg-white/50 backdrop-blur-sm rounded-lg"
            >
              <SearchIcon size={24} />
            </button>
            <button 
              className="p-2 text-primary bg-white/50 backdrop-blur-sm rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[72px] lg:hidden bg-white z-40 overflow-y-auto"
            >
              <div className="container-custom py-10 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      setPage(item.path);
                      setIsOpen(false);
                    }}
                    className={`text-right text-xl py-4 px-6 rounded-2xl transition-all ${
                      activePage === item.path 
                        ? 'bg-accent-purple/10 text-accent-purple font-bold pr-8' 
                        : 'text-primary hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-8 px-6 flex flex-col space-y-4">
                  
                  <button className="w-full border-2 border-primary/10 text-primary py-4 rounded-2xl font-bold text-lg hover:bg-primary/5">تسجيل الدخول</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 left-10 text-white hover:text-accent-blue transition-colors p-4"
            >
              <X size={40} />
            </button>

            <div className="w-full max-w-4xl text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal tracking-tight">ابحث في أرشيف النادي الثقافي</h2>
                <p className="text-white/60 text-lg">اكتشف الفعاليات، المقالات، والكتب المتوفرة في مكتبتنا</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <input 
                  autoFocus
                  type="text" 
                  placeholder="ما الذي تبحث عنه اليوم؟" 
                  className="w-full bg-transparent border-b-4 border-white/20 py-8 text-3xl md:text-5xl text-white font-tajawal placeholder:text-white/10 focus:outline-none focus:border-accent-purple transition-colors text-right"
                />
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <span className="text-white/40 text-sm font-bold">كلمات شائعة:</span>
                  {['معرض الكتاب', 'ورش عمل الخط', 'ندوات أدبية', 'الشارقة 2026', 'مسابقات الشباب'].map(tag => (
                    <button key={tag} className="px-4 py-1.5 rounded-full bg-white/5 text-white/70 text-sm hover:bg-accent-purple hover:text-white transition-all">
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
