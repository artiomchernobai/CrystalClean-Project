import GreetingMessage from "@/components/GreetingMessage";

// app/[locale]/page.js
export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <GreetingMessage />
  );
}

// Generate static params for SSG
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ro' }, 
    { locale: 'ru' }
  ];
}