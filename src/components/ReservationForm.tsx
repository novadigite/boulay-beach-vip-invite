import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Shield, Ticket } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    try {
      console.log('Submitting reservation:', formData);

      const { data, error } = await supabase.functions.invoke('eventbrite-reservation', {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          eventId: '1704653978939', // Replace with your actual event ID
          ticketClassId: 2957319883 // Optional ticket class ID
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Reservation response:', data);

      if (data?.success) {
        toast({
          title: "🎟️ Réservation confirmée !",
          description: data.message || "Votre ticket a été généré et envoyé à votre email.",
        });
        
        // Reset form
        setFormData({ fullName: '', email: '', phone: '' });
      } else {
        throw new Error(data?.message || "Erreur lors de la réservation");
      }
    } catch (error: any) {
      console.error('Reservation error:', error);
      toast({
        title: "Erreur",
        description: error.message || "⚠️ Une erreur est survenue, merci de réessayer ou de nous contacter.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName && formData.email && formData.phone;

  return (
    <section id="reservation" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Réservation VIP</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Réservez votre place
            </h2>
            <p className="text-lg text-muted-foreground">
              Sécurisez votre accès à cette expérience exclusive
            </p>
          </div>

          {/* Reservation Form */}
          <Card className="shadow-premium border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-display text-foreground">
                Formulaire de réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-foreground font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Votre nom complet"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-border focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Adresse email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-border focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Numéro de téléphone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+225 XX XX XX XX XX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full py-6 text-lg font-semibold bg-gradient-sunset border-0 shadow-glow hover:shadow-premium transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Génération du ticket...
                    </>
                  ) : (
                    <>
                      <Ticket className="w-5 h-5 mr-2" />
                      Confirmer ma réservation
                    </>
                  )}
                </Button>
              </form>

              {/* Security Notice */}
              <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 mt-6">
                <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">🔒 Confirmation instantanée – vos données sont sécurisées</strong><br />
                    Aucune donnée ne sera partagée avec des tiers. Paiement 100% sécurisé.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;