import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment réserver ma place ?",
      answer: "Il vous suffit de remplir le formulaire de réservation sur cette page avec vos informations complètes. Vous recevrez une confirmation instantanée par email avec tous les détails de votre réservation."
    },
    {
      question: "Quelles sont les conditions d'annulation ?",
      answer: "Les annulations sont possibles jusqu'à 48h avant l'événement avec remboursement intégral. Au-delà, aucun remboursement ne sera effectué, mais vous pouvez transférer votre place à une autre personne."
    },
    {
      question: "Est-ce accessible depuis Abidjan facilement ?",
      answer: "Oui ! Nous organisons des navettes privées depuis Abidjan. Le trajet prend environ 45 minutes. Les détails de transport vous seront communiqués lors de la confirmation de votre réservation."
    },
    {
      question: "Quel est le dress code ?",
      answer: "Tenue chic décontractée recommandée. Pensez à apporter des vêtements confortables pour la plage et une tenue plus élégante pour la soirée. Évitez les talons hauts dans le sable !"
    },
    {
      question: "Y a-t-il un service bateau-navette pour l'île ?",
      answer: "Absolument ! Notre service de navette maritime est inclus dans votre réservation. Les départs se font toutes les 30 minutes depuis le port principal. Temps de trajet : 15 minutes."
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), les virements bancaires et les paiements mobile money (Orange Money, MTN Money). Un acompte de 50% est requis à la réservation."
    },
    {
      question: "L'événement a-t-il lieu en cas de mauvais temps ?",
      answer: "L'événement est maintenu quelles que soient les conditions météo. Nous disposons d'espaces couverts élégants en cas de pluie, tout en conservant la vue sur l'océan."
    },
    {
      question: "Y a-t-il des restrictions d'âge ?",
      answer: "Cet événement est réservé aux adultes (18+). Une pièce d'identité pourra être demandée à l'entrée. L'ambiance sera sophistiquée et adaptée à une clientèle mature."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Toutes les réponses à vos questions sur cet événement exclusif
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-subtle"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-sunset rounded-xl">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Une autre question ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre équipe vous répond sous 2h pendant les heures d'ouverture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0707977373" 
                className="inline-flex items-center justify-center bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                📞 07 07 97 73 73
              </a>
              <a 
                href="mailto:reservation-bbr@boulaybeachresort.com" 
                className="inline-flex items-center justify-center bg-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                ✉️ Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;