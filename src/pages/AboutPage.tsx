
import { Award, Shield, Users, Globe, Clock, Trophy, Star, Heart, Zap, Crown } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { 
      icon: Trophy, 
      label: 'Years of Excellence', 
      value: '15+',
      description: 'Delivering exceptional luxury automotive experiences since 2009'
    },
    { 
      icon: Users, 
      label: 'Happy Customers', 
      value: '2000+',
      description: 'Satisfied clients who found their dream supercars through our expertise'
    },
    { 
      icon: Globe, 
      label: 'Global Partnerships', 
      value: '50+',
      description: 'Exclusive relationships with premium manufacturers worldwide'
    },
    { 
      icon: Award, 
      label: 'Awards Won', 
      value: '25+',
      description: 'Industry recognition for outstanding service and customer satisfaction'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Authenticity',
      description: 'Every vehicle in our collection undergoes rigorous 127-point inspection by certified technicians. We provide complete vehicle history, documentation, and authenticity certificates to ensure absolute transparency.',
      features: ['Certified vehicle history', 'Original documentation', 'Third-party inspections', 'Authenticity guarantee']
    },
    {
      icon: Award,
      title: 'Premium Quality Standards',
      description: 'We maintain the highest industry standards with partnerships exclusively with authorized dealers and certified pre-owned programs. Only vehicles meeting our strict quality criteria make it to our showroom.',
      features: ['Factory-certified technicians', 'OEM parts guarantee', 'Quality assurance program', 'Performance testing']
    },
    {
      icon: Clock,
      title: 'White-Glove Service',
      description: 'Our dedicated concierge team provides 24/7 support throughout your journey. From initial consultation to post-delivery care, we ensure every detail exceeds your expectations.',
      features: ['Personal consultant assigned', 'VIP showroom access', 'Home delivery service', 'Lifetime support']
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'Established with a vision to bring world-class supercars to Indian enthusiasts'
    },
    {
      year: '2012',
      title: 'First International Partnership',
      description: 'Secured exclusive dealership with Ferrari, marking our entry into ultra-luxury segment'
    },
    {
      year: '2015',
      title: 'Luxury Showroom Launch',
      description: 'Opened our flagship 15,000 sq ft showroom in Mumbai with climate-controlled environment'
    },
    {
      year: '2018',
      title: 'Digital Innovation',
      description: 'Launched India\'s first virtual supercar viewing platform with 360° immersive experience'
    },
    {
      year: '2021',
      title: 'Sustainability Initiative',
      description: 'Introduced eco-friendly delivery options and carbon-neutral showroom operations'
    },
    {
      year: '2024',
      title: 'AI-Powered Matching',
      description: 'Implemented advanced AI technology to match customers with their perfect supercar'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Enhanced hero section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-luxury-gold animate-pulse" />
            <span className="text-sm font-medium luxury-text-gradient">India's Most Trusted Supercar Destination</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="luxury-text-gradient">Supercar Luxury</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been the bridge between automotive dreams and reality, 
            connecting discerning enthusiasts with the world's most exclusive supercars. 
            Our commitment to excellence, authenticity, and personalized service has made us 
            India's premier destination for luxury automotive experiences.
          </p>
        </div>

        {/* Enhanced stats with descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-all duration-300 border border-luxury-gold/20">
                <stat.icon className="w-10 h-10 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-luxury-gold mb-2">{stat.value}</div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Company milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey of Excellence</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-luxury-gold via-luxury-gold/50 to-luxury-gold"></div>
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative flex items-center mb-12 animate-fade-in ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-luxury-gold/30 transition-all duration-300">
                    <div className="text-2xl font-bold text-luxury-gold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxury-gold rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-luxury-gold" />
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Founded in 2009</strong> by automotive enthusiast Rajesh Kumar, 
                Supercar Luxury began with a simple yet ambitious vision: to democratize access to the world's most 
                extraordinary supercars for Indian collectors and enthusiasts.
              </p>
              <p>
                What started as a passion project in a modest garage has evolved into <strong className="text-foreground">
                India's premier luxury automotive marketplace</strong>, featuring exclusive partnerships with legendary 
                manufacturers like Ferrari, Lamborghini, McLaren, Bugatti, and Koenigsegg.
              </p>
              <p>
                Our team of <strong className="text-foreground">certified automotive experts</strong>, with over 150 years 
                of combined experience, ensures that every vehicle meets our exacting standards of quality, authenticity, 
                and performance. We've facilitated over 2,000 successful supercar acquisitions, building lasting relationships 
                with clients across India and internationally.
              </p>
              <p>
                Today, we operate from our state-of-the-art <strong className="text-foreground">15,000 sq ft climate-controlled 
                showroom</strong> in Mumbai, featuring the latest in automotive display technology and VIP consultation suites.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury supercar showroom interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">State-of-the-Art Showroom</h3>
                <p className="text-sm opacity-90">Climate-controlled environment with premium lighting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced values with detailed features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-luxury-gold" />
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-luxury-gold/30 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">{value.description}</p>
                <div className="space-y-2">
                  {value.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center bg-gradient-to-r from-luxury-gold/5 via-luxury-gold/10 to-luxury-gold/5 rounded-2xl p-12 animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-luxury opacity-50"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-luxury-gold animate-pulse" />
              <span className="text-sm font-medium text-luxury-gold">Ready to Begin Your Journey?</span>
              <Zap className="w-6 h-6 text-luxury-gold animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Experience Automotive Excellence</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of meticulously curated supercars. Our certified experts 
              are ready to help you find the perfect vehicle that matches your lifestyle, preferences, and dreams. 
              Schedule a private consultation today and step into the world of luxury automotive excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-luxury-gold/25">
                Schedule Private Viewing
              </button>
              <button className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Download Digital Catalog
              </button>
            </div>
            
            {/* Additional trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-luxury-gold" />
                <span>Certified Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-luxury-gold" />
                <span>Award Winning Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-luxury-gold" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-luxury-gold" />
                <span>Customer Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
