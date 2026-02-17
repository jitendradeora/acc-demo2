import React from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={`flex items-center mb-2 ${centered ? 'justify-center' : ''}`}>
          <div className="w-8 h-1 bg-accent-purple rounded-full ml-3" />
          <span className="text-accent-purple font-bold tracking-wider uppercase text-sm">
            {subtitle || "النادي الثقافي العربي"}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-tajawal text-primary leading-tight">
          {title}
        </h2>
      </motion.div>
    </div>
  );
};
