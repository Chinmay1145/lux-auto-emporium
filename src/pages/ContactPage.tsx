
import { Mail, Phone, MapPin, Clock, Send, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subtitle: 'Mon-Fri from 8am to 6pm',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@supercarluxury.in',
      subtitle: 'Online support 24/7',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Luxury Avenue, Mumbai',
      subtitle: 'Maharashtra 400001, India',
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Sat: 9AM-8PM',
      subtitle: 'Sunday: 10AM-6PM',
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-luxury-gold/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-luxury-gold animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-medium luxury-text-gradient">Get In Touch</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Contact <span className="luxury-text-gradient relative">
              Us
              <div className="absolute -top-4 -right-4">
                <Star className="w-8 h-8 text-luxury-gold animate-pulse" />
              </div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with our expert team for personalized assistance with your supercar needs. 
            We're here to make your automotive dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-luxury-gold" />
              </div>
              Get in Touch
            </h2>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${info.color} backdrop-blur-sm border border-border/50 p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl animate-fade-in`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <info.icon className="w-7 h-7 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-luxury-gold transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-semibold mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* Enhanced Map placeholder */}
            <div className="relative w-full h-80 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center overflow-hidden animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <MapPin className="w-8 h-8 text-luxury-gold" />
                </div>
                <p className="text-lg font-semibold mb-2">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Visit our luxury showroom in Mumbai</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-luxury-gold/60 rounded-full animate-ping" />
              <div className="absolute bottom-6 right-8 w-2 h-2 bg-luxury-gold/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Form background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-transparent to-luxury-gold/5" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-luxury-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Send className="w-8 h-8 text-luxury-gold animate-pulse" />
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-luxury-gold transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-luxury-gold transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-luxury-gold transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-luxury-gold transition-colors">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="purchase">Purchase Inquiry</option>
                      <option value="service">Service Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-luxury-gold transition-colors">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 hover:border-luxury-gold/50 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="group w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-bold py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-luxury-gold/30 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
