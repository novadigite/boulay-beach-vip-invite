import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-life-is-here.jpg";

const Hero = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            Événement exclusif au<br />
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              Boulay Beach Resort
            </span>
            <span className="ml-4">🌴✨</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto opacity-95">
            Une expérience unique entre luxe, plage et détente.<br />
            <strong className="font-medium">Places limitées, réservez dès maintenant !</strong>
          </p>
          
          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              onClick={scrollToReservation}
              size="lg"
              className="px-12 py-6 text-lg font-semibold shadow-glow hover:shadow-premium transform hover:scale-105 transition-all duration-300 bg-gradient-sunset border-0"
            >
              Je réserve ma place VIP
            </Button>
          </div>
          
          {/* Badge */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-medium">Événement Premium – Places limitées</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;