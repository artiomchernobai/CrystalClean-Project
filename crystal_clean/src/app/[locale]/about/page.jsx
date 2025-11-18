'use client'
import GreetingMessage from "@/components/GreetingMessage";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function DefPage() {
  const { locale } = useParams();
  console.log('Home locale param:', locale);
  const validLocales = ['en', 'ro', 'ru'];
  const t = useTranslations('Placeholder');

  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        backgroundImage: "radial-gradient( rgba(50,89,140,0.3), 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        backgroundAttachment:'fixed'
      }}
    >
      <Header />
      <h1>about page</h1>
      <Footer />
    </Box>
  );
}
