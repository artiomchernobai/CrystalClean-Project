import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceBar from '@/components/ServiceBar';
import OrderForm from '@/components/OrderForm';
import ContactSection from '@/components/ContactSection';
import { Box } from "@mui/material"

export default function FacadeCleaning() {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        backgroundImage: "radial-gradient( rgba(50,89,140,0.3), 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <ServiceBar />
      <OrderForm />
      <ContactSection />
      <Footer />
    </Box>
  );
}