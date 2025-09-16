import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ReservationRequest {
  fullName: string;
  email: string;
  phone: string;
  eventId: string;
  ticketClassId?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phone, eventId, ticketClassId }: ReservationRequest = await req.json();
    
    console.log('Creating Eventbrite order for:', { fullName, email, eventId });

    const eventbriteToken = Deno.env.get('EVENTBRITE_API_KEY');
    
    if (!eventbriteToken) {
      throw new Error('Eventbrite API key not configured');
    }

    // Split full name into first and last name
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Create order with Eventbrite API
    const orderData = {
      event_id: eventId,
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      ticket_group_id: ticketClassId || null,
      quantity: 1
    };

    console.log('Sending order to Eventbrite:', orderData);

    const eventbriteResponse = await fetch('https://www.eventbriteapi.com/v3/orders/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${eventbriteToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!eventbriteResponse.ok) {
      const errorText = await eventbriteResponse.text();
      console.error('Eventbrite API error:', errorText);
      throw new Error(`Eventbrite API error: ${eventbriteResponse.status} - ${errorText}`);
    }

    const orderResult = await eventbriteResponse.json();
    console.log('Eventbrite order created successfully:', orderResult);

    return new Response(
      JSON.stringify({
        success: true,
        orderId: orderResult.id,
        message: '🎟️ Merci ! Votre ticket a été généré et envoyé à votre email.',
        orderDetails: orderResult
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error('Error in eventbrite-reservation function:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        message: '⚠️ Une erreur est survenue, merci de réessayer ou de nous contacter.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
};

serve(handler);