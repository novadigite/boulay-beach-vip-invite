import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-life-is-here.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date to 30 days from now for demo
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <strong className="font-medium">Places limitées – réservez vite !</strong>
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <p className="text-white/90 font-medium mb-4 text-lg">⏰ Temps restant pour réserver :</p>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">{timeLeft.days}</div>
                <div className="text-sm text-white/80">Jours</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">{timeLeft.hours}</div>
                <div className="text-sm text-white/80">Heures</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">{timeLeft.minutes}</div>
                <div className="text-sm text-white/80">Minutes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">{timeLeft.seconds}</div>
                <div className="text-sm text-white/80">Secondes</div>
              </div>
            </div>
          </div>
          
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