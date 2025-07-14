import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Faqih Chairul Anam',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return (
          <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
            <CheckCircle size={20} />
            Message sent successfully! I'll get back to you soon.
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
            <AlertCircle size={20} />
            Failed to send message. Please try again or contact me directly.
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {getStatusMessage()}
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className={`w-full bg-gray-700/50 border rounded-xl px-4 py-3 focus:outline-none transition-all duration-300 ${
              errors.name 
                ? 'border-red-400 focus:border-red-400' 
                : 'border-gray-600 focus:border-blue-400 hover:border-purple-400'
            }`}
            disabled={status === 'loading'}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            className={`w-full bg-gray-700/50 border rounded-xl px-4 py-3 focus:outline-none transition-all duration-300 ${
              errors.email 
                ? 'border-red-400 focus:border-red-400' 
                : 'border-gray-600 focus:border-blue-400 hover:border-purple-400'
            }`}
            disabled={status === 'loading'}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject *"
          className={`w-full bg-gray-700/50 border rounded-xl px-4 py-3 focus:outline-none transition-all duration-300 ${
            errors.subject 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-blue-400 hover:border-purple-400'
          }`}
          disabled={status === 'loading'}
        />
        {errors.subject && (
          <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message *"
          rows={5}
          className={`w-full bg-gray-700/50 border rounded-xl px-4 py-3 focus:outline-none transition-all duration-300 resize-none ${
            errors.message 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-blue-400 hover:border-purple-400'
          }`}
          disabled={status === 'loading'}
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 btn-animated hover-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'loading' ? (
          <>
            <Loader size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;