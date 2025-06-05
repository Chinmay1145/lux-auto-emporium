
import CheckoutForm from '@/components/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Floating particles background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
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

        <div className="relative z-10">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
