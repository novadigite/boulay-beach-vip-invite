import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import ReservationForm from "@/components/ReservationForm";
import WhyJoin from "@/components/WhyJoin";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-body">
      <Hero />
      <EventInfo />
      <WhyJoin />
      <ReservationForm />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
