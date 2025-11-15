import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceBar from '@/components/ServiceBar';
import OrderForm from '@/components/OrderForm';
import ContactSection from '@/components/ContactSection';

export default function WindowCleaning() {
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