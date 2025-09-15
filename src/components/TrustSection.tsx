import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Shield, Clock } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Reviews */}
            <Card className="text-center border-0 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="font-display text-2xl font-bold text-foreground">86%</div>
                  <div className="text-sm font-medium text-primary">Recommandé</div>
                  <div className="text-xs text-muted-foreground">224 avis clients</div>
                </div>
              </CardContent>
            </Card>

            {/* Premium Badge */}
            <Card className="text-center border-0 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="font-display text-lg font-bold text-foreground">Premium</div>
                  <div className="text-sm font-medium text-secondary">Événement</div>
                  <div className="text-xs text-muted-foreground">Places limitées</div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="text-center border-0 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="font-display text-lg font-bold text-foreground">100%</div>
                  <div className="text-sm font-medium text-primary">Sécurisé</div>
                  <div className="text-xs text-muted-foreground">Paiement protégé</div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="text-center border-0 shadow-subtle hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="font-display text-lg font-bold text-foreground">Instant</div>
                  <div className="text-sm font-medium text-secondary">Confirmation</div>
                  <div className="text-xs text-muted-foreground">Par email</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="bg-gradient-to-r from-card to-muted/30 border-0 shadow-premium">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="font-display text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "Une expérience absolument magique ! Le cadre est à couper le souffle, 
                  l'équipe est aux petits soins et l'ambiance est parfaite. 
                  Je recommande vivement à tous ceux qui cherchent une expérience premium en Côte d'Ivoire."
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MK</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Marie Kouassi</div>
                    <div className="text-sm text-muted-foreground">Invitée VIP • Août 2024</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Platforms */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border shadow-subtle">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Facebook</div>
                <div className="text-xs text-muted-foreground">4.8/5 ⭐</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border shadow-subtle">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <div className="font-semibold text-sm">TripAdvisor</div>
                <div className="text-xs text-muted-foreground">4.9/5 ⭐</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border shadow-subtle">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Google</div>
                <div className="text-xs text-muted-foreground">4.7/5 ⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;