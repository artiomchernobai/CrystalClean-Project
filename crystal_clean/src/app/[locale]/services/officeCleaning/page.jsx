import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceBar from '@/components/ServiceBar';
import ContactSection from '@/components/ContactSection';
import OrderForm from '@/components/OrderForm';

export default function OfficeCleaning() {
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