import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventInfo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Event date - Set to 30 days from now for demo
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 30);
  eventDate.setHours(18, 0, 0, 0); // 6 PM

  useEffect(() => {
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

  const formatEventDate = () => {
    return eventDate.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Détails de l'événement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Préparez-vous pour une soirée inoubliable au cœur de la Côte d'Ivoire
            </p>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Date</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {formatEventDate()}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    18h00 - 23h30
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Lieu</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    Île Boulay, Côte d'Ivoire
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Accès</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    Sur réservation uniquement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Countdown Timer */}
          <Card className="bg-gradient-sunset text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  Plus que quelques places disponibles !
                </h3>
                <p className="text-lg opacity-90">
                  L'événement commence dans :
                </p>
              </div>
              
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                    <div className="text-3xl md:text-4xl font-bold font-display">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium opacity-90">Jours</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                    <div className="text-3xl md:text-4xl font-bold font-display">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium opacity-90">Heures</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                    <div className="text-3xl md:text-4xl font-bold font-display">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium opacity-90">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                    <div className="text-3xl md:text-4xl font-bold font-display">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium opacity-90">Secondes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;