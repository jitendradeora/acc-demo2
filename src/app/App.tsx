import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { SectionTitle } from './components/SectionTitle';
import { EventCard } from './components/EventCard';
import { NewsCard } from './components/NewsCard';
import { Timeline } from './components/Timeline';
import { MasonryGallery } from './components/MasonryGallery';
import { ContactForm } from './components/ContactForm';
import { SEO, OrganizationSchema } from './components/SEO';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Clock, ChevronRight, Info, Users, 
  BookOpen, Award, CheckCircle, Calendar, User, Share2, 
  MessageSquare, ArrowRight, Eye, Tag
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import about from '@/assets/acc-banner-1.jpg';
const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedArticle]);

  // Mock Data
  const events = [
    { id: '1', title: 'ندوة الأدب العربي المعاصر', date: '15 مارس 2026', location: 'قاعة المتنبي', time: '6:00 مساءً', category: 'ندوات', image: 'https://images.unsplash.com/photo-1712366786881-e080e66fbf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
    { id: '2', title: 'ورشة فن الخط الديواني', date: '22 مارس 2026', location: 'مرسم الفنون', time: '5:00 مساءً', category: 'ورش عمل', image: 'https://images.unsplash.com/photo-1603801571246-be066de0c73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
    { id: '3', title: 'أمسية الشعر النبطي', date: '5 أبريل 2026', location: 'المسرح المفتوح', time: '8:00 مساءً', category: 'أمسيات', image: 'https://images.unsplash.com/photo-1759047589470-a1e877b717aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
  ];

  const news = [
    { 
      id: '1',
      title: 'الشارقة تحتفي بيوم المخطوط العربي', 
      excerpt: 'نظم النادي الثقافي العربي فعالية خاصة للاحتفاء بيوم المخطوط العربي، شملت عرضاً لمخطوطات نادرة من المكتبة الخاصة للنادي...', 
      content: `نظم النادي الثقافي العربي فعالية خاصة للاحتفاء بيوم المخطوط العربي، شملت عرضاً لمخطوطات نادرة من المكتبة الخاصة للنادي. شهدت الفعالية حضوراً لافتاً من الباحثين والمختصين في التراث العربي، حيث تم تسليط الضوء على أهمية الحفاظ على المخطوطات ككنز معرفي لا يقدر بثمن.\n\nتضمنت الندوة المصاحبة ورش عمل حول ترميم المخطوطات القديمة باستخدام أحدث التقنيات العالمية، مع الحفاظ على أصالتها التاريخية. وأكد المتحدثون أن الشارقة، برؤية حاكمها، تولي اهتماماً استثنائياً بتوثيق التراث الفكري العربي وجعله متاحاً للأجيال القادمة.\n\nوفي ختام الفعالية، تم الإعلان عن مبادرة "رقمنة المخطوطات" التي سيبدأ النادي في تنفيذها بالتعاون مع جهات دولية متخصصة، لضمان وصول الباحثين حول العالم إلى هذه الموارد الثمينة بكل سهولة ويسر.`,
      date: '12 فبراير 2026', 
      author: 'إدارة النادي', 
      image: 'https://images.unsplash.com/photo-1651566222024-6df11f897be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
      category: 'فعاليات ثقافية',
      tags: ['تراث', 'مخطوطات', 'الشارقة', 'ثقافة']
    },
    { 
      id: '2',
      title: 'إطلاق مسابقة القصة القصيرة للشباب', 
      excerpt: 'أعلن النادي عن فتح باب المشاركة في مسابقة القصة القصيرة السنوية المخصصة للمبدعين الشباب من سن 18 إلى 30 عاماً...', 
      content: `أعلن النادي عن فتح باب المشاركة في مسابقة القصة القصيرة السنوية المخصصة للمبدعين الشباب من سن 18 إلى 30 عاماً. تهدف المسابقة إلى اكتشاف المواهب الأدبية الشابة ودعمها وفتح آفاق الإبداع أمامها في مجال السرد القصصي.\n\nتتضمن شروط المسابقة أن يكون الموضوع مستوحى من قيم المجتمع العربي وأصالته، مع ضرورة الالتزام بقواعد اللغة العربية السليمة. وقد تم تشكيل لجنة تحكيم تضم نخبة من كبار الأدباء والنقاد العرب لتقييم الأعمال المشاركة.\n\nسيتم رصد جوائز قيمة للفائزين الثلاثة الأوائل، بالإضافة إلى طباعة القصص المتميزة في كتاب خاص يصدر عن النادي تزامناً مع معرض الشارقة الدولي للكتاب القادم. يُذكر أن الموعد النهائي لاستلام المشاركات هو نهاية شهر أبريل المقبل.`,
      date: '8 فبراير 2026', 
      author: 'اللجنة الثقافية', 
      image: 'https://images.unsplash.com/photo-1712366786881-e080e66fbf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
      category: 'مسابقات',
      tags: ['أدب', 'شباب', 'قصة قصيرة', 'إبداع']
    },
  ];

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    setActivePage('news-detail');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            
            {/* About Preview */}
            <section className="py-24 bg-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -mr-32" />
               <div className="container-custom">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="relative">
                     <div className="aspect-square bg-secondary rounded-[3rem] relative z-10 overflow-hidden shadow-2xl">
                        <ImageWithFallback 
                          src={about} 
                          alt="Sharjah Architecture" 
                          className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent-purple rounded-[2rem] z-0 flex items-center justify-center p-8">
                        <div className="text-white text-center">
                          <span className="block text-4xl font-black font-tajawal">45+</span>
                          <span className="text-xs font-medium">سنة من التميز الثقافي</span>
                        </div>
                     </div>
                   </div>
                   
                   <div>
                     <SectionTitle title="أكثر من مجرد نادٍ، نحن بيت للمثقفين" subtitle="عن النادي" />
                     <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                       تأسس النادي الثقافي العربي في الشارقة ليكون حلقة وصل بين التراث العربي الأصيل ومعاصرة الفكر الحديث. نسعى لخلق بيئة محفزة للإبداع الأدبي والفني والفكري.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-6 mb-10">
                       <div className="flex items-start space-x-reverse space-x-4">
                         <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue shrink-0 gap-2">
                           <Info size={24} />
                         </div>
                         <div>
                           <h4 className="font-bold mb-1">رؤيتنا</h4>
                           <p className="text-sm text-primary/60 leading-relaxed">الريادة في تعزيز الهوية الثقافية العربية عالمياً.</p>
                         </div>
                       </div>
                       <div className="flex items-start space-x-reverse space-x-4">
                         <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple shrink-0 gap-2">
                           <Users size={24} />
                         </div>
                         <div>
                           <h4 className="font-bold mb-1">رسالتنا</h4>
                           <p className="text-sm text-primary/60 leading-relaxed">رعاية المبدعين وبناء جسور التواصل الثقافي.</p>
                         </div>
                       </div>
                     </div>
                     
                     <button onClick={() => setActivePage('about')} className="btn-primary">اكتشف المزيد</button>
                   </div>
                 </div>
               </div>
            </section>

            {/* Events Section */}
            <section className="py-24 bg-secondary/30">
              <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                  <SectionTitle title="الفعاليات القادمة" subtitle="أجندة الثقافة" />
                  <button onClick={() => setActivePage('events')} className="text-accent-purple font-bold flex items-center space-x-reverse space-x-2 mb-12 group">
                    <span className="group-hover:mr-2 transition-all">عرض كل الفعاليات</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </div>
            </section>

            {/* News Section */}
            <section className="py-24">
              <div className="container-custom">
                <SectionTitle title="آخر أخبار النادي" subtitle="المركز الإعلامي" centered />
                <div className="max-w-4xl mx-auto space-y-8">
                  {news.map((item, idx) => (
                    <NewsCard key={idx} {...item} onClick={() => handleArticleClick(item)} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button onClick={() => setActivePage('news')} className="btn-primary">شاهد جميع الأخبار</button>
                </div>
              </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-accent-purple overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 border-[40px] border-white rounded-full" />
                <div className="absolute bottom-10 left-10 w-96 h-96 border-[60px] border-white rounded-full" />
              </div>
              <div className="container-custom relative z-10 text-center text-white max-w-2xl">
                <h2 className="text-4xl font-bold font-tajawal mb-6">ابقَ على اطلاع دائم</h2>
                <p className="text-white/80 mb-10 text-lg">اشترك في نشرتنا البريدية لتصلك آخر أخبار الفعاليات والنشاطات الثقافية مباشرة إلى بريدك الإلكتروني.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="بريدك الإلكتروني" 
                    className="flex-1 bg-white/20 border border-white/30 px-6 py-4 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30"
                  />
                  <button className="bg-white text-accent-purple px-10 py-4 rounded-xl font-bold hover:bg-white/90 transition-all">اشترك الآن</button>
                </div>
              </div>
            </section>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <SectionTitle title="عن النادي الثقافي العربي" subtitle="من نحن" centered />
                <p className="text-lg text-primary/70 leading-relaxed">
                  النادي الثقافي العربي في الشارقة هو مؤسسة ثقافية أهلية، تأسس في عام 1981، ومنذ انطلاقته وهو يمثل منارة للإبداع ومركزاً للتواصل الثقافي العربي في إمارة الشارقة الباسمة.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <div className="glass-card p-10 text-center hover:shadow-xl transition-shadow border-t-4 border-accent-purple">
                  <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center text-accent-purple mx-auto mb-6">
                    <BookOpen size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
                  <p className="text-primary/60">الأصالة، الابتكار، التواصل الثقافي، والتميز في الأداء الثقافي.</p>
                </div>
                <div className="glass-card p-10 text-center hover:shadow-xl transition-shadow border-t-4 border-accent-blue">
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue mx-auto mb-6">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
                  <p className="text-primary/60">خلق منصة حيوية للحوار الثقافي ودعم الحراك الأدبي والفني في الشارقة.</p>
                </div>
                <div className="glass-card p-10 text-center hover:shadow-xl transition-shadow border-t-4 border-accent-purple">
                  <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center text-accent-purple mx-auto mb-6">
                    <Award size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">أهدافنا</h3>
                  <p className="text-primary/60">تنظيم الفعاليات، دعم المواهب، والحفاظ على الهوية الثقافية العربية.</p>
                </div>
              </div>

              <div className="bg-primary text-white p-12 rounded-[3rem] overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-purple/20 skew-x-12 translate-x-1/2" />
                 <div className="relative z-10">
                   <h2 className="text-3xl font-bold font-tajawal mb-8 text-accent-blue">الهيكل التنظيمي</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="text-center">
                         <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 border border-white/20 overflow-hidden">
                           <ImageWithFallback src={`https://i.pravatar.cc/150?u=${i}`} alt="Member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                         </div>
                         <h4 className="font-bold">عضو مجلس الإدارة</h4>
                         <p className="text-white/40 text-sm">منصب إداري</p>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        );

      case 'history':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24 bg-secondary/20">
            <div className="container-custom">
              <SectionTitle title="رحلة النادي عبر الزمن" subtitle="تاريخنا" centered />
              <div className="max-w-4xl mx-auto">
                <Timeline />
              </div>
            </div>
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24">
            <div className="container-custom">
              <SectionTitle title="توثيق بصري للحراك الثقافي" subtitle="معرض الصور" centered />
              <div className="flex justify-center gap-4 mb-12">
                {['الكل', 'فعاليات', 'مباني', 'ورش عمل', 'أمسيات'].map((cat) => (
                  <button key={cat} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === 'الكل' ? 'bg-accent-purple text-white' : 'bg-white text-primary/60 hover:bg-secondary'}`}>
                    {cat}
                  </button>
                ))}
              </div>
              <MasonryGallery />
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <SectionTitle title="نرحب بتواصلكم واستفساراتكم" subtitle="اتصل بنا" />
                  <p className="text-primary/70 mb-10 leading-relaxed">
                    نحن دائماً هنا للاستماع إليكم. سواء كنت ترغب في الانضمام كعضو، أو لديك استفسار عن فعالياتنا، أو تود طرح اقتراح ثقافي، لا تتردد في مراسلتنا.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">الموقع</h4>
                        <p className="text-primary/60">الشارقة، منطقة الثقافة، بجانب دائرة الثقافة والإعلام.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">الهاتف</h4>
                        <p dir="ltr" className="text-primary/60">+971 6 555 1234</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">البريد الإلكتروني</h4>
                        <p className="text-primary/60">info@sharjahculturalclub.ae</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">ساعات العمل</h4>
                        <p className="text-primary/60">السبت - الخميس: 9:00 صباحاً - 9:00 مساءً</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-10">
                  <h3 className="text-2xl font-bold mb-8">أرسل لنا رسالة</h3>
                  <ContactForm />
                </div>
              </div>
              
              <div className="mt-20 h-96 bg-secondary rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/10" />
                <p className="relative z-10 font-bold text-primary/40 text-xl italic">[ خريطة جوجل التفاعلية - تدرج هنا ]</p>
              </div>
            </div>
          </motion.div>
        );

      case 'events':
      case 'news':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24">
             <div className="container-custom">
               <SectionTitle title={activePage === 'events' ? "الفعاليات والنشاطات" : "أخبار النادي والمستجدات"} subtitle={activePage === 'events' ? "الأجندة" : "المركز الإعلامي"} centered />
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {activePage === 'events' ? (
                   [...events, ...events].map((e, idx) => <EventCard key={idx} {...e} />)
                 ) : (
                   news.map((n, idx) => (
                     <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 hover:shadow-lg transition-all group cursor-pointer" onClick={() => handleArticleClick(n)}>
                        <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                           <ImageWithFallback src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <span className="text-xs text-accent-purple font-bold mb-2 block">{n.date}</span>
                        <h3 className="text-xl font-bold mb-3 font-tajawal group-hover:text-accent-purple transition-colors">{n.title}</h3>
                        <p className="text-sm text-primary/60 mb-4 line-clamp-3 leading-relaxed">{n.excerpt}</p>
                        <button className="text-accent-purple font-bold text-sm flex items-center space-x-reverse space-x-1">
                          <span>اقرأ المزيد</span>
                          <ChevronRight size={14} />
                        </button>
                     </div>
                   ))
                 )}
               </div>
             </div>
          </motion.div>
        );

      case 'news-detail':
        if (!selectedArticle) return null;
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24">
            <div className="container-custom">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-reverse space-x-2 text-sm text-primary/40 mb-10 font-tajawal">
                <button onClick={() => setActivePage('home')} className="hover:text-accent-purple transition-colors">الرئيسية</button>
                <ChevronRight size={14} />
                <button onClick={() => setActivePage('news')} className="hover:text-accent-purple transition-colors">أخبار النادي</button>
                <ChevronRight size={14} />
                <span className="text-primary/70 truncate max-w-[200px]">{selectedArticle.title}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Main Content */}
                <article className="lg:col-span-8">
                  <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-bold">
                        {selectedArticle.category}
                      </span>
                      <div className="flex items-center text-primary/50 text-sm">
                        <Calendar size={16} className="ml-1.5" />
                        <span>{selectedArticle.date}</span>
                      </div>
                      <div className="flex items-center text-primary/50 text-sm">
                        <User size={16} className="ml-1.5" />
                        <span>بواسطة: {selectedArticle.author}</span>
                      </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-tajawal text-primary leading-tight mb-10">
                      {selectedArticle.title}
                    </h1>
                  </div>

                  <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
                    <ImageWithFallback src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="prose prose-xl max-w-none text-primary/80 leading-loose space-y-8 font-tajawal text-right">
                    {selectedArticle.content.split('\n\n').map((para: string, i: number) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Tags & Share */}
                  <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center text-primary/40 ml-2">
                        <Tag size={18} className="ml-1" />
                        <span className="text-sm">الكلمات المفتاحية:</span>
                      </div>
                      {selectedArticle.tags.map((tag: string) => (
                        <span key={tag} className="px-4 py-1 bg-secondary text-primary/60 text-sm rounded-lg hover:bg-accent-purple hover:text-white transition-all cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-reverse space-x-4">
                      <span className="text-sm font-bold text-primary/40">مشاركة الخبر:</span>
                      <button className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Comments Section Placeholder */}
                  <div className="mt-16 bg-secondary/30 p-10 rounded-[2rem] border border-primary/5">
                    <h3 className="text-2xl font-bold mb-6 flex items-center space-x-reverse space-x-3">
                      <MessageSquare size={24} className="text-accent-purple" />
                      <span>التعليقات (0)</span>
                    </h3>
                    <p className="text-primary/40 mb-8 italic">لا توجد تعليقات بعد. كن أول من يشاركنا رأيه!</p>
                    <div className="space-y-4">
                      <textarea 
                        placeholder="اكتب تعليقك هنا..." 
                        className="w-full bg-white border border-primary/10 p-4 rounded-xl h-32 focus:outline-none focus:border-accent-purple"
                      ></textarea>
                      <button className="btn-primary">إرسال التعليق</button>
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                  {/* Recent News Widget */}
                  <div className="glass-card p-8">
                    <h3 className="text-xl font-bold mb-6 border-r-4 border-accent-purple pr-4">أخبار ذات صلة</h3>
                    <div className="space-y-6">
                      {news.filter(n => n.id !== selectedArticle.id).map((n) => (
                        <div key={n.id} className="flex gap-4 group cursor-pointer" onClick={() => handleArticleClick(n)}>
                          <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-primary/5">
                            <ImageWithFallback src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-[10px] text-accent-purple font-bold uppercase tracking-wider mb-1">{n.date}</span>
                            <h4 className="text-sm font-bold line-clamp-2 leading-snug group-hover:text-accent-purple transition-colors font-tajawal">{n.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Widget */}
                  <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple opacity-20 -mr-8 -mt-8 rounded-full blur-2xl" />
                    <h3 className="text-xl font-bold mb-4 relative z-10">النشرة الثقافية</h3>
                    <p className="text-white/60 text-sm mb-6 relative z-10 leading-relaxed">اشترك لتصلك أهم مستجدات النادي والفعاليات الثقافية في الشارقة.</p>
                    <div className="space-y-3 relative z-10">
                      <input 
                        type="email" 
                        placeholder="بريدك الإلكتروني" 
                        className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-white placeholder:text-white/40 focus:outline-none"
                      />
                      <button className="w-full bg-accent-purple text-white py-3 rounded-xl font-bold hover:bg-white hover:text-accent-purple transition-all">اشترك الآن</button>
                    </div>
                  </div>

                  {/* Static Call to Action */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1759047589470-a1e877b717aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg" alt="Culture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                    <div className="absolute bottom-8 right-8 left-8 text-white">
                      <h4 className="text-xl font-bold mb-2">كن جزءاً من مسيرتنا</h4>
                      <p className="text-white/70 text-sm mb-4">انضم إلى عضوية النادي واستفد من كافة المزايا الثقافية.</p>
                      <button onClick={() => setActivePage('contact')} className="flex items-center space-x-reverse space-x-2 text-accent-blue font-bold group">
                        <span>انضم إلينا</span>
                        <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        );

      case 'culture':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <SectionTitle title="الشارقة: عاصمة الثقافة العربية والإسلامية" subtitle="ثقافة الشارقة" />
                <div className="prose prose-lg max-w-none text-primary/80 leading-loose space-y-8 font-tajawal">
                  <div className="relative h-96 rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1759047589470-a1e877b717aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg" alt="Sharjah Culture" className="w-full h-full object-cover" />
                  </div>
                  <p>
                    تعتبر إمارة الشارقة منارة ثقافية رائدة في المنطقة العربية، حيث أولى صاحب السمو الشيخ الدكتور سلطان بن محمد القاسمي، عضو المجلس الأعلى حاكم الشارقة، اهتماماً استثنائياً بالثقافة والفكر والفن كركائز أساسية لبناء الإنسان والمجتمع.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                    <div className="bg-accent-purple/5 p-10 rounded-[2rem] border-r-4 border-accent-purple">
                      <h4 className="text-xl font-bold mb-4 text-accent-purple">الهوية الثقافية</h4>
                      <p className="text-base">تتميز الشارقة بتوازنها الفريد بين الأصالة والمعاصرة، حيث تجد الصروح الثقافية الحديثة جنباً إلى جنب مع المناطق التاريخية المرممة.</p>
                    </div>
                    <div className="bg-accent-blue/5 p-10 rounded-[2rem] border-r-4 border-accent-blue">
                      <h4 className="text-xl font-bold mb-4 text-accent-blue">المبادرات العالمية</h4>
                      <p className="text-base">من معرض الكتاب إلى بينالي الفنون، تطلق الشارقة مبادرات تتجاوز الحدود الجغرافية لتصل إلى عمق الوجدان الإنساني العالمي.</p>
                    </div>
                  </div>
                  <p>
                    ويأتي النادي الثقافي العربي ليكون جزءاً من هذه المنظومة المتكاملة، مساهماً في تحقيق رؤية الإمارة بأن تكون الكلمة والقلم هما وسيلة الارتقاء بالحضارة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'terms':
      case 'privacy':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-40 pb-24">
            <div className="container-custom max-w-4xl">
              <h1 className="text-4xl font-black mb-10 font-tajawal text-primary border-r-8 border-accent-purple pr-6 py-2">
                {activePage === 'terms' ? 'شروط وأحكام الاستخدام' : 'سياسة الخصوصية'}
              </h1>
              <div className="glass-card p-10 space-y-8 text-primary/80 font-tajawal leading-loose">
                <p className="text-xl font-bold text-accent-purple">أهلاً بكم في النادي الثقافي العربي بالشارقة.</p>
                
                <section>
                  <h3 className="text-2xl font-bold mb-4 flex items-center space-x-reverse space-x-3 text-primary">
                    <CheckCircle className="text-accent-blue" size={24} />
                    <span>تمهيد واستخدام الموقع</span>
                  </h3>
                  <p>باستخدامك لهذا الموقع الإلكتروني، فإنك توافق على الالتزام بالشروط والأحكام التالية. يهدف الموقع إلى توفير معلومات حول أنشطة النادي الثقافي العربي وفعالياته في إمارة الشارقة.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4 flex items-center space-x-reverse space-x-3 text-primary">
                    <CheckCircle className="text-accent-blue" size={24} />
                    <span>حقوق الملكية الفكرية</span>
                  </h3>
                  <p>جميع المحتويات المتوفرة على هذا الموقع، بما في ذلك النصوص، الصور، الشعارات، والتصاميم، هي ملك للنادي الثقافي العربي ومحمية بموجب قوانين حماية الملكية الفكرية المعمول بها في دولة الإمارات العربية المتحدة.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4 flex items-center space-x-reverse space-x-3 text-primary">
                    <CheckCircle className="text-accent-blue" size={24} />
                    <span>خصوصية البيانات</span>
                  </h3>
                  <p>نحن نلتزم بحماية خصوصيتك. أي بيانات يتم جمعها من خلال النماذج المتوفرة في الموقع تستخدم فقط لأغراض التواصل الرسمية ولا يتم مشاركتها مع أي أطراف خارجية دون موافقتك الصريحة.</p>
                </section>

                <section className="bg-secondary/30 p-8 rounded-2xl border-dashed border-2 border-primary/10">
                  <h4 className="font-bold mb-2 text-primary">تحديث الشروط</h4>
                  <p className="text-sm">يحتفظ النادي الثقافي العربي بالحق في تعديل هذه الشروط في أي وقت. ننصح بمراجعة هذه الصفحة بشكل دوري. تاريخ آخر تحديث: 13 فبراير 2026.</p>
                </section>
              </div>
            </div>
          </motion.div>
        );

      default:
        return <div className="pt-40 text-center">الصفحة غير موجودة</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-accent-purple selection:text-white">
      <SEO 
        title="النادي الثقافي العربي في الشارقة | منارة الثقافة العربية" 
        description="نادي ثقافي رائد في الشارقة يعزز الفكر والأدب والفن العربي من خلال فعاليات وورش عمل وأنشطة ثقافية متنوعة."
        schema={OrganizationSchema}
      />
      <Toaster position="top-center" richColors />
      
      <Header activePage={activePage} setPage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      
      <Footer setPage={setActivePage} />
      
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 w-14 h-14 bg-accent-purple text-white rounded-2xl flex items-center justify-center shadow-2xl hover:bg-primary transition-all z-40 group"
      >
        <ChevronRight className="rotate-90 group-hover:-translate-y-1 transition-transform" size={28} />
      </button>
    </div>
  );
};

export default App;
