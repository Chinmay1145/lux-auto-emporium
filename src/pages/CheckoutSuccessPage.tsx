
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Download, Mail, Phone } from 'lucide-react';

const CheckoutSuccessPage = () => {
  useEffect(() => {
    // Clear cart after successful checkout
    localStorage.removeItem('supercar-cart');
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success animation */}
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/30 flex items-center justify-center animate-pulse-glow">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>

          {/* Success message */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="luxury-text-gradient">Order Confirmed!</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for choosing Supercar Luxury. Your inquiry has been successfully submitted 
              and our premium automotive specialists will contact you within 24 hours to discuss 
              your dream supercar selection.
            </p>
          </div>

          {/* Order details */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-8 text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold mb-6 luxury-text-gradient">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-luxury-gold font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Immediate Confirmation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You'll receive a detailed confirmation email with your inquiry reference number 
                    and our expert consultant's direct contact information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-luxury-gold font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Personal Consultation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our certified automotive specialist will call you within 24 hours to understand 
                    your preferences, budget, and timeline for your supercar purchase.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-luxury-gold font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Curated Selection</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Based on your requirements, we'll present a carefully curated selection of 
                    available supercars with detailed specifications, history, and pricing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-luxury-gold font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Exclusive Viewing</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Schedule a private viewing at our luxury showroom or arrange for the vehicle 
                    to be brought to your preferred location for inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact information */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold mb-4">Need Immediate Assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">premium@supercarluxury.com</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  Continue Browsing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Catalog
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reference ID: <span className="font-mono text-luxury-gold">#SCL{Math.random().toString(36).substr(2, 9).toUpperCase()}</span><br />
              This confirmation page will remain accessible for 30 days for your records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
