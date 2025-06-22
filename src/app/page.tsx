import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Handshake, Lock, Shield } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Profesjonalne zarządzanie',
      description: 'Zapewniamy profesjonalne zarządzanie dokumentacją zgodnie z najwyższymi standardami.',
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: 'Zmniejszenie zatrudnienia',
      description: 'Optymalizacja procesów pozwala na redukcję personelu dedykowanego do obsługi archiwum.',
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: 'Zwiększenie bezpieczeństwa',
      description: 'Gwarantujemy pełne bezpieczeństwo przechowywanych dokumentów i danych.',
    },
    {
      icon: <AreaChart className="h-10 w-10 text-primary" />,
      title: 'Zmniejszenie kosztów',
      description: 'Nasze usługi to realne oszczędności dla Twojej firmy.',
    },
  ];

  const accordionItems = [
    {
      value: 'item-1',
      trigger: 'Brak pośrednictwa i podwykonawców!',
      content: 'Wszystkie usługi realizujemy własnymi siłami, co gwarantuje pełną kontrolę nad procesem i najwyższą jakość.',
    },
    {
      value: 'item-2',
      trigger: 'Materiały archiwizacyjne tj. pudła, teczki, klipsy...',
      content: 'Zapewniamy wszystkie niezbędne materiały archiwizacyjne, spełniające rygorystyczne normy trwałości i bezpieczeństwa.',
    },
    {
      value: 'item-3',
      trigger: 'Własne narzędzia pracy',
      content: 'Dysponujemy nowoczesnym sprzętem i oprogramowaniem do zarządzania dokumentacją, co usprawnia naszą pracę.',
    },
    {
      value: 'item-4',
      trigger: 'Struktura organizacyjna',
      content: 'Nasza elastyczna struktura pozwala na szybkie dostosowanie się do indywidualnych potrzeb każdego klienta.',
    },
    {
      value: 'item-5',
      trigger: 'Duże doświadczenie w branży archiwistycznej',
      content: 'Wieloletnia obecność na rynku i setki zrealizowanych projektów to gwarancja naszego profesjonalizmu.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 bg-primary/10 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
            Usługi archiwistyczne
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            Świadczymy usługi archiwistyczne zgodne z obowiązującymi normami. Gwarantujemy profesjonalną obsługę popartą wieloletnim doświadczeniem.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">O NAS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Poznaj historię naszej firmy, nasze wartości i zespół ekspertów, który stoi za sukcesem ARPAD.
                </p>
                <Button asChild variant="outline">
                  <Link href="/o-firmie">więcej</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">OFERTA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Zapoznaj się z pełnym zakresem naszych prac archiwizacyjnych, od porządkowania po cyfryzację.
                </p>
                <Button asChild variant="outline">
                  <Link href="/oferta-2">więcej</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">KONTAKT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Skontaktuj się z nami, aby uzyskać indywidualną wycenę i dopasować ofertę do swoich potrzeb.
                </p>
                <Button asChild variant="outline">
                  <a href="#kontakt">więcej</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary font-headline">
            Twoje korzyści
          </h2>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="mt-4 text-xl font-bold text-primary font-headline">{benefit.title}</h3>
                <p className="mt-2 text-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary font-headline">
            Dlaczego warto skorzystać z Naszej oferty
          </h2>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger>{item.trigger}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="kontakt" className="w-full py-12 md:py-24 bg-primary/10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-headline">KONTAKT</h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Masz pytania? Chcesz nawiązać współpracę? Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl grid md:grid-cols-2 gap-12 mt-8">
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-bold text-primary">Dane kontaktowe</h3>
              <p><strong>Adres:</strong> Krzykawa 7, 32-329 Bolesław, małopolskie, Polska</p>
              <p><strong>Telefon:</strong> <a href="tel:+48326424780" className="hover:underline">+48 32 6424780</a>, <a href="tel:+48501439752" className="hover:underline">+48 501 439 752</a></p>
              <p><strong>Email:</strong> <a href="mailto:arpad@arpad.pl" className="hover:underline text-accent-foreground/80">arpad@arpad.pl</a></p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
