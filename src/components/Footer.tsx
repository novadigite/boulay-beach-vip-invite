import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Location */}
            <Card className="border-0 shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Localisation</h3>
                <p className="text-sm text-muted-foreground">
                  Boulay Beach Resort<br />
                  Île Boulay<br />
                  06 BP 2598 ABIDJAN 06<br />
                  Côte d'Ivoire
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-0 shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>07 07 97 73 73</p>
                  <p>01 50 00 50 00</p>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-0 shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all">
                  reservation-bbr@<br />boulaybeachresort.com
                </p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-0 shadow-subtle">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Lun-Ven: 10h-20h</p>
                  <p>Sam-Dim: 11h-20h</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Section */}
          <div className="text-center border-t border-border pt-12">
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                BBr - Boulay Beach Resort
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Votre destination de luxe en Côte d'Ivoire pour des expériences inoubliables 
                entre plage, gastronomie et hospitalité africaine authentique.
              </p>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-sunset rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-2">
                Prêt à vivre l'expérience BBr ?
              </h3>
              <p className="opacity-90 mb-6">
                Rejoignez-nous pour un moment d'exception qui restera gravé dans vos souvenirs.
              </p>
              
              <button 
                onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Réserver maintenant
              </button>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 Boulay Beach Resort. Tous droits réservés. | Île Boulay, Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;