import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Medal, ShieldCheck, TrendingDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import OnScrollAnimator from '@/components/OnScrollAnimator';
import AnimatedCounter from '@/components/AnimatedCounter';
import ContactDetails from '@/components/layout/ContactDetails';

export default function Home() {

  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: 'Bezpieczeństwo i RODO',
      description: 'Gwarantujemy pełną poufność i zgodność z RODO na każdym etapie archiwizacji.',
    },
    {
      icon: <TrendingDown className="h-10 w-10 text-accent" />,
      title: 'Oszczędność kosztów',
      description: 'Działamy bez pośredników, co przekłada się na optymalne koszty i pełną kontrolę nad procesem.',
    },
    {
      icon: <Medal className="h-10 w-10 text-accent" />,
      title: 'Doświadczenie i Ekspertyza',
      description: 'Wykorzystujemy sprawdzone metody i własne narzędzia, zapewniając najwyższą jakość usług.',
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
      trigger: 'Duże doświadczenie w branży archiwistycznej',
      content: 'Wieloletnia obecność na rynku i setki zrealizowanych projektów to gwarancja naszego profesjonalizmu.',
    },
  ];
  
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 1993;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <Image
            src="https://placehold.co/1920x1080.png"
            alt="Abstrakcyjne tło archiwum"
            fill={true}
            style={{objectFit: 'cover'}}
            quality={80}
            priority
            data-ai-hint="blueprint abstract"
            />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <OnScrollAnimator>
            <div className="max-w-3xl">
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Nowoczesna Archiwizacja, <span className="text-accent">Dekady Zaufania.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
                Łączymy ponad 25 lat doświadczenia z innowacyjnym podejściem do zarządzania dokumentacją. Zapewniamy bezpieczeństwo, porządek i spokój ducha.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/oferta">Poznaj naszą ofertę <ArrowRight className="ml-2" /></Link>
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
                <p className="mt-2 text-lg font-medium text-foreground/80">lat na rynku</p>
              </div>
            </OnScrollAnimator>
            <OnScrollAnimator delay={0.2}>
              <div className="p-4">
                <h3 className="font-headline text-5xl md:text-6xl font-bold text-accent">
                  <AnimatedCounter to={500} suffix="+" />
                </h3>
                <p className="mt-2 text-lg font-medium text-foreground/80">zadowolonych klientów</p>
              </div>
            </OnScrollAnimator>
            <OnScrollAnimator delay={0.4}>
             <div className="p-4">
                <h3 className="font-headline text-5xl md:text-6xl font-bold text-accent">
                  <AnimatedCounter to={100} suffix="%" />
                </h3>
                <p className="mt-2 text-lg font-medium text-foreground/80">gwarancji bezpieczeństwa</p>
              </div>
            </OnScrollAnimator>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <OnScrollAnimator className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Twoje Korzyści ze Współpracy z Arpad</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Nasze usługi to nie tylko porządkowanie dokumentów. To realne wsparcie dla Twojego biznesu.
            </p>
          </OnScrollAnimator>
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {benefits.map((benefit, index) => (
              <OnScrollAnimator key={index} delay={index * 0.2}>
                <Card className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out bg-card">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 rounded-full p-4">
                      {benefit.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold font-headline text-primary">{benefit.title}</h3>
                    <p className="text-foreground/70 mt-2">{benefit.description}</p>
                  </CardContent>
                </Card>
              </OnScrollAnimator>
            ))}
          </div>
          <div className="mt-16 text-center">
            <OnScrollAnimator>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/oferta">Zobacz pełną ofertę <ArrowRight className="ml-2" /></Link>
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
                        Dlaczego warto nam zaufać?
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Nasza transparentność i kompleksowe podejście to fundamenty, na których budujemy długotrwałe relacje z klientami. Zapewniamy wszystko, czego potrzebujesz do profesjonalnej archiwizacji.
                    </p>
                    <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/o-firmie">Dowiedz się więcej o nas</Link>
                    </Button>
                </div>
            </OnScrollAnimator>
          <OnScrollAnimator delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item) => (
                <AccordionItem value={item.value} key={item.value}>
                  <AccordionTrigger className="text-lg font-medium text-left hover:text-accent">{item.trigger}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </OnScrollAnimator>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="w-full py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
              <OnScrollAnimator>
                  <div className="text-center max-w-3xl mx-auto mb-12">
                      <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                      Twoje Archiwum w Rękach Profesjonalistów
                      </h2>
                      <p className="mt-4 text-lg text-foreground/70">
                      Zaufaj ponad 25-letniemu doświadczeniu i dołącz do grona naszych partnerów. Skontaktuj się z nami, aby omówić, jak możemy wesprzeć Twój biznes i otrzymać niezobowiązującą wycenę. Jesteśmy gotowi, by wprowadzić porządek i bezpieczeństwo w Twojej dokumentacji.
                      </p>
                  </div>
              </OnScrollAnimator>
              <ContactDetails />
          </div>
      </section>
    </div>
  );
}
