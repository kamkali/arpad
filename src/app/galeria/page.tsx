import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OnScrollAnimator from '@/components/OnScrollAnimator';
import ContactDetails from '@/components/layout/ContactDetails';

export default function GaleriaPage() {
  return (
    <div className="bg-background">
      <header className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <OnScrollAnimator>
            <div className="container px-4 md:px-6">
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
                    Galeria Naszych Realizacji
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                    Zobacz namacalne efekty naszej pracy. Porządek, bezpieczeństwo i profesjonalizm w każdym detalu.
                </p>
            </div>
        </OnScrollAnimator>
      </header>

      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="space-y-16 md:space-y-24">
          <OnScrollAnimator>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary">
                Transformacja Archiwum
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-destructive/80">Przed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Nieuporządkowane archiwum"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-video"
                      data-ai-hint="messy paper archive"
                    />
                     <p className="text-sm text-muted-foreground mt-4">Stosy nieuporządkowanych dokumentów, chaos i ryzyko utraty danych.</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-accent">Po</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Uporządkowane archiwum"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-video"
                      data-ai-hint="organized paper archive"
                    />
                     <p className="text-sm text-muted-foreground mt-4">Perfekcyjny porządek, jednolity system i pełne bezpieczeństwo.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </OnScrollAnimator>
          
          <OnScrollAnimator>
             <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-destructive/80">Przed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Zniszczone pudła z dokumentami"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-video"
                      data-ai-hint="messy paper archive"
                    />
                     <p className="text-sm text-muted-foreground mt-4">Zniszczone pudła, pozaginane papiery - stan wymagający natychmiastowej interwencji.</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-accent">Po</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Dokumenty w nowych teczkach"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-video"
                      data-ai-hint="organized paper archive"
                    />
                     <p className="text-sm text-muted-foreground mt-4">Dokumenty w nowych, opisanych teczkach, gotowe do szybkiego odnalezienia.</p>
                  </CardContent>
                </Card>
              </div>
          </OnScrollAnimator>

          <OnScrollAnimator>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary">
                Jakość Dokumentacji Ewidencyjnej
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-destructive/80">Przykład złego spisu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Niepoprawny spis zdawczo-odbiorczy"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-video"
                      data-ai-hint="handwritten messy document"
                    />
                     <p className="text-sm text-muted-foreground mt-4">Chaotyczny, nieczytelny dokument, który generuje problemy i ryzyko prawne.</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-accent">Poprawny spis wykonany przez Arpad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Poprawny spis zdawczo-odbiorczy"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full aspect-video"
                      data-ai-hint="spreadsheet document"
                    />
                    <p className="text-sm text-muted-foreground mt-4">Przejrzysty, komputerowy wydruk zgodny z normami archiwalnymi.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </OnScrollAnimator>
        </div>
      </div>

      <section id="kontakt" className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
            <OnScrollAnimator>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                        Zainspirowany? Czas na Twoją Transformację
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Podobają Ci się efekty naszej pracy? Skontaktuj się z nami, a pomożemy Ci osiągnąć podobny porządek i bezpieczeństwo w Twojej firmie. Zacznijmy od niezobowiązującej rozmowy.
                    </p>
                </div>
            </OnScrollAnimator>
            <ContactDetails />
        </div>
      </section>
    </div>
  );
}
