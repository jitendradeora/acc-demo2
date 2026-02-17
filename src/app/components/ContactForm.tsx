import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success('تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريباً.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2 text-primary/70">الاسم الكامل</label>
          <input
            {...register('name', { required: 'الاسم مطلوب' })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all`}
            placeholder="أدخل اسمك"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold mb-2 text-primary/70">البريد الإلكتروني</label>
          <input
            {...register('email', { 
              required: 'البريد مطلوب', 
              pattern: { value: /^\S+@\S+$/i, message: 'البريد غير صحيح' } 
            })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all`}
            placeholder="example@mail.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold mb-2 text-primary/70">الموضوع</label>
        <input
          {...register('subject', { required: 'الموضوع مطلوب' })}
          className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all`}
          placeholder="كيف يمكننا مساعدتك؟"
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-bold mb-2 text-primary/70">الرسالة</label>
        <textarea
          {...register('message', { required: 'الرسالة مطلوبة' })}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all resize-none`}
          placeholder="اكتب رسالتك هنا..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-accent-purple text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-reverse space-x-3 hover:bg-accent-purple/90 transition-all"
      >
        <span>إرسال الرسالة</span>
        <Send size={18} />
      </button>
    </form>
  );
};
