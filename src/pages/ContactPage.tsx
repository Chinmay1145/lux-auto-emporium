
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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
    // Handle form submission here
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
      subtitle: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@supercarluxury.in',
      subtitle: 'Online support 24/7'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Luxury Avenue, Mumbai',
      subtitle: 'Maharashtra 400001, India'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Sat: 9AM-8PM',
      subtitle: 'Sunday: 10AM-6PM'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="luxury-text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our expert team for personalized assistance with your supercar needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-foreground">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Visit our luxury showroom</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:border-luxury-gold transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:border-luxury-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:border-luxury-gold transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:border-luxury-gold transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="service">Service Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
