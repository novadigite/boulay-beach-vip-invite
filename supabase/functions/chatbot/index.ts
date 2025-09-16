import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const knowledgeBase = `
BOULAY BEACH RESORT - ÉVÉNEMENT EXCLUSIF
================================

## INFORMATIONS GÉNÉRALES
- Nom: Boulay Beach Resort - Événement Exclusif BBr
- Lieu: Île Boulay, Côte d'Ivoire
- Adresse: 06 BP 2598 ABIDJAN 06, Côte d'Ivoire
- Téléphones: 07 07 97 73 73 / 01 50 00 50 00
- Email: reservation-bbr@boulaybeachresort.com

## HORAIRES & ACCÈS
- Événement de 18h à 2h du matin
- Accueil dès 17h30
- Navettes privées depuis Abidjan (45min de trajet)
- Service bateau-navette vers l'île (15min)
- Transport inclus dans la réservation

## RÉSERVATION & PRIX
- Réservation obligatoire via formulaire sur le site
- Confirmation instantanée par email
- Acompte de 50% requis à la réservation
- Moyens de paiement: Cartes bancaires, virements, mobile money (Orange/MTN Money)
- Places limitées - événement exclusif

## ANNULATION & REMBOURSEMENT
- Annulation gratuite jusqu'à 48h avant l'événement
- Remboursement intégral si annulé dans les délais
- Possibilité de transfert de place à une autre personne
- Au-delà de 48h: aucun remboursement mais transfert possible

## SERVICES INCLUS
- Expérience VIP au bord de la plage
- Musique live & cocktails signature
- Gastronomie locale & internationale
- Ambiance premium avec networking
- Espaces couverts en cas de mauvais temps
- Vue sur l'océan garantie

## DRESS CODE & RECOMMANDATIONS
- Tenue chic décontractée recommandée
- Vêtements confortables pour la plage
- Tenue plus élégante pour la soirée
- Éviter les talons hauts dans le sable
- Événement 18+ uniquement (pièce d'identité requise)

## PROCESSUS EVENTBRITE
- Après réservation sur le site, vous recevrez un email de confirmation
- Le ticket électronique sera envoyé par email
- Présentez votre ticket (mobile ou imprimé) à l'entrée
- QR code pour validation rapide à l'accueil

## MÉTÉO & SÉCURITÉ
- Événement maintenu par tous temps
- Espaces couverts élégants disponibles
- Vue sur l'océan préservée même sous couverture
- Équipe de sécurité sur place
- Protocoles sanitaires respectés
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Tu es l'assistant du Boulay Beach Resort. Tu es chaleureux, professionnel et serviable. Tu réponds UNIQUEMENT aux questions concernant l'événement BBr et le resort. Utilise les informations suivantes pour répondre:

${knowledgeBase}

INSTRUCTIONS:
- Réponds en français uniquement
- Sois concis mais informatif (maximum 3-4 phrases)
- Si on te demande de réserver, redirige vers le formulaire sur la page
- Pour les questions sur Eventbrite, explique le processus de ticket électronique
- Utilise des emojis appropriés (🌴 🏖️ ✨ 📞 ✉️) mais avec parcimonie
- Si tu ne connais pas l'information, redirige vers les contacts directs
- Reste toujours dans le contexte du resort et de l'événement`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API Error:', error);
      throw new Error(`OpenAI API Error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0].message.content;

    console.log('Chatbot response generated successfully');

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: 'Désolé, je rencontre un problème technique. Contactez-nous au 07 07 97 73 73 pour une assistance immédiate.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});