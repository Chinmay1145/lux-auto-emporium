
import { Award, Shield, Users, Globe, Clock, Trophy } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Trophy, label: 'Years of Excellence', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '2000+' },
    { icon: Globe, label: 'Global Partnerships', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Authenticity',
      description: 'Every vehicle in our collection is thoroughly verified and authenticated by our expert team.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We maintain the highest standards and only offer supercars that meet our strict quality criteria.'
    },
    {
      icon: Clock,
      title: 'Professional Service',
      description: '24/7 support and white-glove service from initial inquiry to final delivery and beyond.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="luxury-text-gradient">Supercar Luxury</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            India's most trusted destination for luxury supercars, connecting automotive enthusiasts 
            with the world's most exclusive and prestigious vehicles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-luxury-gold" />
              </div>
              <div className="text-3xl font-bold text-luxury-gold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2009, Supercar Luxury began with a simple vision: to bring the world's most 
                extraordinary supercars to discerning Indian collectors and enthusiasts.
              </p>
              <p>
                What started as a passion project has evolved into India's premier luxury automotive 
                marketplace, featuring exclusive partnerships with legendary manufacturers like Ferrari, 
                Lamborghini, McLaren, and Bugatti.
              </p>
              <p>
                Our team of automotive experts, with over 100 years of combined experience, ensures 
                that every vehicle meets our exacting standards of quality, authenticity, and performance.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <img 
              src="/api/placeholder/600/400" 
              alt="Luxury showroom"
              className="w-full h-80 object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center bg-gradient-to-r from-luxury-gold/5 via-luxury-gold/10 to-luxury-gold/5 rounded-2xl p-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our exclusive collection of supercars and let our experts help you find the perfect vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Browse Collection
            </button>
            <button className="border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
