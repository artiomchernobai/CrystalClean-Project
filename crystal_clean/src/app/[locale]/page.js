'use client'
import { notFound } from 'next/navigation';
import GreetingMessage from "@/components/GreetingMessage";
import { useParams } from 'next/navigation';

export default function Home() {
  const params = useParams();
  const locale = params.locale;

  const validLocales = ['en', 'ro', 'ru'];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  return (
    <div>
      <GreetingMessage />
    </div>
  );
}
