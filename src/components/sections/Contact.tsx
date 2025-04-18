import React, { useState } from 'react';
import { Phone, Mail, ExternalLink, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

// Form schema validation with yup
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
}).required();

type FormData = yup.InferType<typeof schema>;

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      // Replace these with your own EmailJS service, template and user IDs
      const emailjsServiceId = 'service_l0v3y2e';
      const emailjsTemplateId = 'template_me1yhnd';
      const emailjsUserId = 'BxopExeZ01ZmoQtf7';
      
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: data.name,
          reply_to: data.email,
          subject: 'Contact Form Submission', // Default subject since we removed the field
          message: data.message
        },
        emailjsUserId
      );
      
      setFormStatus({
        message: t('contact.form.successMessage'),
        type: 'success'
      });
      reset(); // Clear the form
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus({
        message: t('contact.form.errorMessage'),
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('contact.subtitle')}</span>
            <h2 className="text-3xl font-bold mb-8 mt-2">{t('contact.title')}</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1">{t('contact.phone')}</div>
                  <div className="text-gray-300">+62 ...</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1">{t('contact.email')}</div>
                  <div className="text-gray-300">jayacakrapertiwi@yahoo.com</div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">{t('contact.form.title') || 'Send Us a Message'}</h3>
              
              {/* Status Message */}
              {formStatus && (
                <div className={`p-4 rounded mb-6 ${formStatus.type === 'success' ? 'bg-green-700' : 'bg-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full p-3 bg-primary-light border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-accent focus:border-accent text-white`}
                    placeholder={t('contact.form.namePlaceholder') || 'Your name'}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full p-3 bg-primary-light border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-accent focus:border-accent text-white`}
                    placeholder={t('contact.form.emailPlaceholder') || 'your.email@example.com'}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full p-3 bg-primary-light border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-accent focus:border-accent text-white`}
                    placeholder={t('contact.form.messagePlaceholder') || 'Your message'}
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      {t('contact.form.sending') || 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      {t('contact.form.send') || 'Send Message'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Location */}
          <div>
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('location.subtitle')}</span>
            <h2 className="text-3xl font-bold mb-8 mt-2">{t('location.title')}</h2>
            
            <div className="mb-6">
              <p className="text-lg mb-1">{t('location.office')}</p>
              <p className="text-gray-300">Ruko, Jl. Jalur Sutera Timur Blok 3B No.25</p>
              <p className="text-gray-300">Kel. Kunciran, Kec. Pinang, Kota Tangerang, Banten</p>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9214427546897!2d106.89!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJTIDEwNsKwNTMnMjQuMCJF!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
            
            <button className="mt-6 bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition flex items-center justify-center">
              <ExternalLink size={18} className="mr-2" />
              <a href="https://maps.app.goo.gl/9x9YWSo5H8cNo1py7">{t('buttons.getDirections')}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;