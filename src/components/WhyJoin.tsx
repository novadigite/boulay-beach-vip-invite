import { Card, CardContent } from "@/components/ui/card";
import { Palmtree, Utensils, Music, Users, Sparkles } from "lucide-react";

const WhyJoin = () => {
  const benefits = [
    {
      icon: Palmtree,
      title: "Expérience VIP au bord de la plage",
      description: "Accès exclusif à notre zone premium avec transats privés et service personnalisé face à l'océan.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Utensils,
      title: "Ambiance festive et gastronomique",
      description: "Menu dégustation créé par notre chef étoilé, mettant en valeur les saveurs locales et internationales.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Music,
      title: "Cocktails & musique au coucher du soleil",
      description: "DJ sets exclusifs et cocktails signature préparés par nos mixologues tandis que le soleil se couche sur l'océan.",
      gradient: "from-accent to-gold"
    },
    {
      icon: Users,
      title: "Rencontre et networking exclusif",
      description: "Connectez-vous avec une communauté select d'entrepreneurs, artistes et personnalités dans un cadre unique.",
      gradient: "from-gold to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">Expérience Premium</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pourquoi participer ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez ce qui rend cet événement si spécial et pourquoi nos invités reviennent année après année
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-subtle hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Une expérience qui marquera votre été 2024
                </h3>
                <p className="text-lg opacity-95 mb-8 leading-relaxed">
                  Joignez-vous à nous pour une soirée qui allie le luxe de la Côte d'Ivoire, 
                  l'authenticité de l'hospitalité africaine et le raffinement d'un service 5 étoiles.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="font-display text-2xl font-bold">100+</div>
                    <div className="text-sm opacity-90">Invités VIP attendus</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="font-display text-2xl font-bold">5★</div>
                    <div className="text-sm opacity-90">Service premium</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="font-display text-2xl font-bold">6h</div>
                    <div className="text-sm opacity-90">D'expérience exclusive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;