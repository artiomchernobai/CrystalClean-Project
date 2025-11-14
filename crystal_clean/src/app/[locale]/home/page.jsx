'use client'
import GreetingMessage from "@/components/GreetingMessage";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import PresentingImage from "@/components/PresentingImage";
import MainServices from "@/components/MainServices";
import SecondMainSection from "@/components/SecondMainSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function DefPage() {
    const { locale } = useParams();
    console.log('Home locale param:', locale);
    const validLocales = ['en', 'ro', 'ru'];
    const t = useTranslations('Placeholder');

    return (
        <div>
            <Header />
            <PresentingImage />
            <MainServices />
            <SecondMainSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
