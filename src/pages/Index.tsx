import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import ReservationForm from "@/components/ReservationForm";
import WhyJoin from "@/components/WhyJoin";
import TrustSection from "@/components/TrustSection";
import FAQ from "@/components/FAQ";
import ChatAssistant from "@/components/ChatAssistant";
import StickyTimer from "@/components/StickyTimer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-body">
      <Hero />
      <EventInfo />
      <WhyJoin />
      <ReservationForm />
      <TrustSection />
      <FAQ />
      <ChatAssistant />
      <Footer />
      <StickyTimer />
    </main>
  );
};

export default Index;
