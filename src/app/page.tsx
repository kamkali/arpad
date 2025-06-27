import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Archive, ShieldCheck, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import OnScrollAnimator from '@/components/OnScrollAnimator';
import AnimatedCounter from '@/components/AnimatedCounter';
import ContactDetails from '@/components/layout/ContactDetails';
import CallToAction from "@/components/layout/CallToAction";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Archiwizacja | ARPAD",
}

export default function Home() {

  const services = [
    {
      icon: <Archive className="h-10 w-10 text-accent" />,
      title: 'Archiwizacja i Porządkowanie',
      description: 'Odzyskaj pełną kontrolę nad dokumentacją. Nasz zespół profesjonalnie zorganizuje, sklasyfikuje i zaewidencjonuje Twoje akta, zapewniając zgodność z przepisami i błyskawiczny dostęp do informacji.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: 'Bezpieczne Przechowywanie',
      description: 'Gwarantujemy bezpieczne przechowywanie dokumentacji pracowniczej i firmowej przez wymagany prawem okres. Nasze magazyny spełniają najwyższe normy bezpieczeństwa.',
    },
    {
      icon: <Trash2 className="h-10 w-10 text-accent" />,
      title: 'Niszczenie i Zgodność z RODO',
      description: 'Zapewniamy poufne i certyfikowane niszczenie dokumentów. Oferujemy także pełne wsparcie w zakresie zgodności z RODO, chroniąc Twoją firmę przed ryzykiem.',
    },
  ];

  const accordionItems = [
    {
      value: 'item-1',
      trigger: 'Pracujesz bezpośrednio z nami. Oszczędzasz do 50%.',
      content: 'Nie korzystamy z usług podwykonawców. Wszystkie prace realizujemy we własnym zakresie, co daje Ci pełną kontrolę nad procesem i eliminuje koszty pośrednictwa, które mogą podnosić cenę usługi nawet o 50%.',
    },
    {
      value: 'item-2',
      trigger: 'Najwyższa jakość materiałów. Standardy Archiwów Państwowych.',
      content: 'Korzystamy wyłącznie z certyfikowanych materiałów bezkwasowych, które są zalecane przez Archiwa Państwowe. Zapewnia to trwałość i bezpieczeństwo Twojej dokumentacji na dziesięciolecia.',
    },
    {
      value: 'item-3',
      trigger: 'Niezależność technologiczna. Niższe koszty dla Ciebie.',
      content: 'Dysponujemy własnym, nowoczesnym sprzętem i oprogramowaniem. Nie ponosimy kosztów leasingu czy wypożyczeń, co bezpośrednio przekłada się na niższe ceny dla naszych klientów.',
    },
    {
      value: 'item-4',
      trigger: 'Zoptymalizowana struktura. Płacisz za efekty, nie za administrację.',
      content: 'Nasza zoptymalizowana struktura organizacyjna eliminuje zbędne koszty administracyjne. Płacisz wyłącznie za realnie wykonaną pracę i konkretne efekty, a nie za rozbudowane zaplecze biurowe.',
    },
  ];
  
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 1993;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <OnScrollAnimator>
            <div className="max-w-3xl">
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Nowoczesna Archiwizacja,{" "}
                <span className="text-accent">Dekady Zaufania.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
                Łączymy ponad 25 lat doświadczenia z innowacyjnym podejściem do
                zarządzania dokumentacją. Zapewniamy bezpieczeństwo, porządek i
                spokój ducha.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/oferta">
                    Poznaj nasze usługi <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </OnScrollAnimator>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <OnScrollAnimator delay={0}>
              <div className="p-4">
                <h3 className="font-headline text-5xl md:text-6xl font-bold text-accent">
                  <AnimatedCounter to={experienceYears} />
                </h3>
                <p className="mt-2 text-lg font-medium text-foreground/80">
                  Lat na rynku
                </p>
              </div>
            </OnScrollAnimator>
            <OnScrollAnimator delay={0.2}>
              <div className="p-4">
                <h3 className="font-headline text-5xl md:text-6xl font-bold text-accent">
                  <AnimatedCounter to={500} suffix="+" />
                </h3>
                <p className="mt-2 text-lg font-medium text-foreground/80">
                  Zadowolonych klientów
                </p>
              </div>
            </OnScrollAnimator>
            <OnScrollAnimator delay={0.4}>
              <div className="p-4">
                <h3 className="font-headline text-5xl md:text-6xl font-bold text-accent">
                  <AnimatedCounter to={100} suffix="%" />
                </h3>
                <p className="mt-2 text-lg font-medium text-foreground/80">
                  Zgodności z RODO i prawem
                </p>
              </div>
            </OnScrollAnimator>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <OnScrollAnimator className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              Kompleksowe rozwiązania dla Twojego archiwum
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Od porządkowania i bezpiecznego przechowywania, po niszczenie
              dokumentów - zapewniamy pełne wsparcie na każdym etapie cyklu
              życia dokumentacji.
            </p>
          </OnScrollAnimator>
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {services.map((service, index) => (
              <OnScrollAnimator key={index} delay={index * 0.2}>
                <Card className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out bg-card">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 rounded-full p-4">
                      {service.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold font-headline text-primary">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mt-2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </OnScrollAnimator>
            ))}
          </div>
          <div className="mt-16 text-center">
            <OnScrollAnimator>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/oferta">
                  Zobacz pełną ofertę <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </OnScrollAnimator>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <OnScrollAnimator>
            <div className="max-w-xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
                Przewaga, którą doceniają nasi klienci
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Nasza transparentność i kompleksowe podejście to fundamenty, na
                których budujemy długotrwałe relacje z klientami. Zapewniamy
                wszystko, czego potrzebujesz do profesjonalnej archiwizacji.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/o-firmie">Dowiedz się więcej o nas</Link>
              </Button>
            </div>
          </OnScrollAnimator>
          <OnScrollAnimator delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-lg font-medium text-left hover:text-accent">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </OnScrollAnimator>
        </div>
      </section>

      {/* Contact Section */}
      <CallToAction
        title="Twoje Archiwum w Pewnych Rękach. Zaufanie Budowane od 1993 Roku."
        description="Od ponad ćwierć wieku pomagamy firmom takim jak Twoja odzyskać kontrolę nad archiwum. Skorzystaj z naszej wiedzy i nowoczesnych rozwiązań. Porozmawiajmy o bezpieczeństwie Twoich danych – poproś o darmową wycenę."
      />
    </div>
  );
}
