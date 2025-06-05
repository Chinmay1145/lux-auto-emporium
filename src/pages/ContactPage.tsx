
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    interestedBrands: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email',
      interestedBrands: []
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="luxury-text-gradient">Get in Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience the ultimate in automotive luxury? Our expert consultants 
            are here to help you find your perfect supercar. Contact us today for personalized 
            service and exclusive access to the world's most coveted vehicles.
          </p>
        </div>

        {/* Floating particles background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-luxury-gold/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-luxury-gold" />
                  </div>
                  Visit Our Showroom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">Mumbai Flagship Showroom</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Level 42, World Trade Centre<br />
                    Cuffe Parade, Mumbai 400005<br />
                    Maharashtra, India
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">Delhi NCR Showroom</p>
                  <p className="text-muted-foreground leading-relaxed">
                    DLF Cyber City, Tower A<br />
                    Sector 25, Gurugram 122002<br />
                    Haryana, India
                  </p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>Private viewing available by appointment</strong><br />
                    Experience our collection in an exclusive, personalized setting
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-luxury-gold" />
                  </div>
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">Premium Sales Hotline</p>
                  <p className="text-xl font-mono text-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">24/7 for existing clients</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">International Clients</p>
                  <p className="text-xl font-mono text-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">US & Canada toll-free</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">WhatsApp Support</p>
                  <p className="text-xl font-mono text-foreground">+91 98765 43211</p>
                  <p className="text-sm text-muted-foreground">Instant responses during business hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-luxury-gold" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">General Inquiries</p>
                  <p className="text-lg text-foreground">info@supercarluxury.com</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">Premium Sales</p>
                  <p className="text-lg text-foreground">premium@supercarluxury.com</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-luxury-gold">After-Sales Support</p>
                  <p className="text-lg text-foreground">support@supercarluxury.com</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Average response time: <strong>2-4 hours</strong> during business days
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-luxury-gold" />
                  </div>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-luxury-gold">Showroom</p>
                    <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                    <p className="text-foreground">10:00 AM - 8:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday</p>
                    <p className="text-foreground">11:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-luxury-gold">Customer Support</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday</p>
                    <p className="text-foreground">9:00 AM - 9:00 PM</p>
                    <p className="text-sm text-muted-foreground">Weekend</p>
                    <p className="text-foreground">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>Emergency Support:</strong> 24/7 for existing clients<br />
                    <strong>Private Appointments:</strong> Available outside regular hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl luxury-text-gradient">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your dream supercar and we'll make it a reality
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-luxury-gold/50 hover:border-luxury-gold/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-luxury-gold/50 hover:border-luxury-gold/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-luxury-gold/50 hover:border-luxury-gold/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Vehicle inquiry, test drive, or consultation"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-luxury-gold/50 hover:border-luxury-gold/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements, preferred brands, budget range, or any specific questions you have..."
                      required
                      className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-luxury-gold/50 hover:border-luxury-gold/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
