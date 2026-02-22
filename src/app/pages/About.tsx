import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Eye, Shield, Users, Award, Book } from 'lucide-react';

const values = [
  { title: 'الأصالة', description: 'التمسك بالجذور الثقافية واللغوية العربية.', icon: Shield },
  { title: 'الإبداع', description: 'دعم الأفكار الخلاقة والمبادرات المبتكرة.', icon: Award },
  { title: 'الحوار', description: 'تعزيز قيم التسامح والتعايش الثقافي.', icon: Users },
  { title: 'المعرفة', description: 'نشر العلم والأدب كركيزة لبناء المجتمع.', icon: Book },
];

 const boardMembers = [
  { name: 'Name will be here', role: 'Role will be here', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
  { name: 'Name will be here', role: 'Role will be here', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400' },
  { name: 'Name will be here', role: 'Role will be here', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
  { name: 'Name will be here', role: 'Role will be here', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400' },
];

export const About = () => {
  return (
    <div className="pt-25 pb-25">
      <SEO title="نبذة عنا" description="تعرف على رسالة ورؤية وأهداف النادي الثقافي العربي في الشارقة." />
      
      {/* Hero Banner */}
      <div className="py-10 mb-10 relative overflow-hidden text-center">
        <div className="container max-w-2xl mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4 text-black">من نحن</h1>
          <p className="text-x2 max-w-2xl mx-auto leading-relaxed text-black">
            النادي الثقافي العربي في الشارقة هو بيت المبدعين ومنارة الفكر، تأسس ليكون جسراً يربط بين عراقة الماضي وإبداع المستقبل.
          </p>
        </div>        
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-border"
          >
            <div className="w-16 h-16 bg-club-purple/10 rounded-2xl flex items-center justify-center text-club-purple mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary">رسالتنا</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              تتمثل رسالتنا في خلق بيئة محفزة للإبداع والابتكار الثقافي، من خلال تنظيم فعاليات وبرامج نوعية تعزز حضور اللغة العربية والأدب والفكر العربي في المجتمع، وتساهم في بناء جيل مثقف وواعٍ بهويته.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-border"
          >
            <div className="w-16 h-16 bg-club-blue/10 rounded-2xl flex items-center justify-center text-club-blue mb-8">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary">رؤيتنا</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              نتطلع إلى أن نكون المؤسسة الثقافية الرائدة عربياً وعالمياً في تعزيز الحوار الثقافي الإنساني، وأن تظل الشارقة وجهة لكل مثقف وباحث عن المعرفة والإبداع الأصيل.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          {/* <SectionTitle title="قيمنا الجوهرية" centered /> */}
          <div className="text-center mb-12">  
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-center">قيمنا الجوهرية 
              <span className="absolute -bottom-2 right-0 w-16 h-1 bg-club-purple rounded-full"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-secondary/20 p-8 rounded-2xl text-center flex flex-col items-center"
              >
                <div className="text-club-purple mb-6"><value.icon size={40} strokeWidth={1.5} /></div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

        
        </section>

        {/* Board Members */}
        <section className="mb-24">
           
          <div className="text-center mb-12">  
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-center"> مجلس الإدارة   
              <span className="absolute -bottom-2 right-0 w-16 h-1 bg-club-purple rounded-full"></span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">نخبة من القامات الثقافية والأدبية التي تقود مسيرة النادي.</p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {boardMembers.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="absolute inset-0 bg-club-purple rounded-full rotate-6 transition-transform group-hover:rotate-12"></div>
                  <ImageWithFallback 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-club-purple font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
