import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, MessageCircle, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Bonjour ! Je suis votre assistant BBr. Posez-moi vos questions sur l'événement, les réservations, ou le resort. Comment puis-je vous aider ?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const knowledgeBase = {
    "réservation": "Pour réserver, remplissez le formulaire sur cette page. Confirmation instantanée par email. Acompte de 50% requis.",
    "prix": "Les tarifs varient selon la formule choisie. Contactez-nous au 07 07 97 73 73 pour les détails tarifaires.",
    "transport": "Navettes privées depuis Abidjan (45min) + service bateau-navette vers l'île (15min) inclus.",
    "annulation": "Annulation gratuite jusqu'à 48h avant l'événement. Possibilité de transfert de place.",
    "horaires": "Événement de 18h à 2h du matin. Accueil dès 17h30.",
    "dress code": "Tenue chic décontractée. Confortable pour la plage + élégant pour la soirée.",
    "météo": "Événement maintenu par tous temps. Espaces couverts disponibles.",
    "âge": "Événement 18+ uniquement. Pièce d'identité requise.",
    "paiement": "Cartes bancaires, virements, mobile money (Orange/MTN Money) acceptés.",
    "contact": "📞 07 07 97 73 73 / 01 50 00 50 00 | ✉️ reservation-bbr@boulaybeachresort.com"
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    if (message.includes("merci") || message.includes("thanks")) {
      return "De rien ! N'hésitez pas si vous avez d'autres questions sur l'événement BBr. 😊";
    }
    
    if (message.includes("bonjour") || message.includes("salut")) {
      return "Bonjour ! Je suis là pour répondre à toutes vos questions sur l'événement exclusif BBr. Que souhaitez-vous savoir ?";
    }
    
    return "Je comprends votre question, mais je n'ai pas cette information précise. Pour des détails spécifiques, contactez notre équipe au 07 07 97 73 73 ou reservation-bbr@boulaybeachresort.com. Ils vous répondront sous 2h !";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 1,
      text: generateResponse(inputMessage),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Assistant BBr 🤖
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Posez vos questions, nous vous répondons en direct
            </p>
          </div>

          {/* Chat Interface */}
          <div className="bg-card border border-border rounded-xl shadow-premium overflow-hidden max-w-2xl mx-auto">
            {/* Chat Header */}
            <div className="bg-gradient-sunset p-4 text-white">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Assistant BBr</h3>
                  <p className="text-sm opacity-90">En ligne • Réponse instantanée</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="h-96 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString('fr-FR', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    {message.isUser && (
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre question ici..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                💡 Essayez : "comment réserver", "transport", "prix", "annulation"...
              </p>
            </div>
          </div>

          {/* Knowledge Base Preview */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Réservation", "Transport", "Prix", "Contact"].map((topic, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(topic.toLowerCase())}
                className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAssistant;