import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OrderForm from "@/components/OrderForm";
import ServiceBar from "@/components/ServiceBar";

export default function AfterConstructionCleaning() {
  return (
    <>
      <Header />
      <ServiceBar />
      <OrderForm />
      <ContactSection />
      <Footer />
    </>
  );
}