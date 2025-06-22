import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FileStack, Mail, UsersRound } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Home() {

  const infoCards = [
    {
      href: '/o-firmie',
      icon: <UsersRound className="h-10 w-10 text-primary" />,
      title: 'O NAS',
      description: 'Naszymi klientami są spółki prawa handlowego, organy administracji państwowej i państwowe jednostki organizacyjne, spółdzielnie, stowarzyszenia...',
    },
    {
      href: '/oferta-2',
      icon: <FileStack className="h-10 w-10 text-primary" />,
      title: 'OFERTA',
      description: 'W pracach archiwistycznych używane są narzędzia informatyczne dostępne w ramach pakietów biurowych Microsoft Office.',
    },
    {
      href: '/#kontakt',
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: 'KONTAKT',
      description: 'Zapraszamy serdecznie do korzystania z naszych usług. Na życzenie przedstawiamy listę naszych kontrahentów oraz referencje.',
    }
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
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] text-white">
        <Image
          src="https://placehold.co/1920x700.png"
          alt="Archiwum z segregatorami"
          fill={true}
          style={{objectFit: 'cover'}}
          quality={100}
          className="brightness-75"
          data-ai-hint="red binders office"
        />
        <div className="relative z-10 flex flex-col items-start justify-center h-full container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
            Usługi<br />Archiwistyczne
          </h1>
          <p className="mt-4 max-w-lg text-lg md:text-xl">
            Wykonujemy usługi archiwistyczne zgodnie z obowiązującymi aktami normatywnymi z zakresu działalności archiwów oraz metodyki archiwalnej.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
            <Link href="/oferta-2">więcej</Link>
          </Button>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="w-full py-12 md:py-20 -mt-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {infoCards.map((card, index) => (
              <Link href={card.href} key={index} className="group">
                <Card className="h-full text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 rounded-full p-4 group-hover:bg-primary transition-colors">
                      {React.cloneElement(card.icon, { className: 'h-10 w-10 text-primary group-hover:text-white transition-colors' })}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold font-headline text-foreground">{card.title}</h3>
                    <p className="text-foreground/70 mt-2 text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-foreground font-headline">
            Dlaczego warto skorzystać z Naszej oferty
          </h2>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-lg hover:text-primary">{item.trigger}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground font-headline">KONTAKT</h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Masz pytania? Chcesz nawiązać współpracę? Skontaktuj się z nami, korzystając z poniższych danych.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md mt-8">
            <div className="text-left space-y-4 p-8 rounded-lg bg-card shadow-lg">
                <h3 className="text-2xl font-bold text-foreground text-center">Dane kontaktowe</h3>
                <p><strong>Adres:</strong> Krzykawa 7, 32-329 Bolesław, małopolskie, Polska</p>
                <p><strong>Telefon:</strong> <a href="tel:+48326424780" className="hover:underline text-primary">+48 32 6424780</a>, <a href="tel:+48501439752" className="hover:underline text-primary">+48 501 439 752</a></p>
                <p><strong>Email:</strong> <a href="mailto:arpad@arpad.pl" className="hover:underline text-primary">arpad@arpad.pl</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
