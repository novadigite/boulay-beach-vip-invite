import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const StickyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-sunset text-white p-3 shadow-premium z-50 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Timer */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>⏰ Temps restant :</span>
            <div className="flex gap-1">
              <span className="bg-white/20 px-2 py-1 rounded text-xs">{timeLeft.days}j</span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">{timeLeft.hours}h</span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">{timeLeft.minutes}m</span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">{timeLeft.seconds}s</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToReservation}
            variant="secondary"
            size="sm"
            className="bg-white text-primary hover:bg-white/90 font-semibold whitespace-nowrap"
          >
            Je réserve ma place !
          </Button>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyTimer;