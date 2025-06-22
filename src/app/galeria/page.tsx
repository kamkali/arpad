import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GaleriaPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
          Galeria
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Zobacz efekty naszej pracy. Porządek w dokumentach to nasza specjalność.
        </p>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-primary font-headline">
            Transformacja Archiwum
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardHeader>
                <CardTitle>Przed archiwizacją</CardTitle>
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
                 <p className="text-sm text-muted-foreground mt-2">Stosy nieuporządkowanych dokumentów, chaos i ryzyko utraty danych.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Po archiwizacji</CardTitle>
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
                 <p className="text-sm text-muted-foreground mt-2">Perfekcyjny porządek, jednolity system i pełne bezpieczeństwo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardHeader>
                <CardTitle>Przed archiwizacją</CardTitle>
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
                 <p className="text-sm text-muted-foreground mt-2">Zniszczone pudła, pozaginane papiery - stan wymagający natychmiastowej interwencji.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Po archiwizacji</CardTitle>
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
                 <p className="text-sm text-muted-foreground mt-2">Dokumenty w nowych, opisanych teczkach, gotowe do szybkiego odnalezienia.</p>
              </CardContent>
            </Card>
          </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-primary font-headline">
            Jakość Dokumentacji Ewidencyjnej
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardHeader>
                <CardTitle>Przykład złego spisu</CardTitle>
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
                 <p className="text-sm text-muted-foreground mt-2">Chaotyczny, nieczytelny dokument, który generuje problemy i ryzyko prawne.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Poprawny spis zdawczo odbiorczy wykonany przez Nas</CardTitle>
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
                <p className="text-sm text-muted-foreground mt-2">Przejrzysty, komputerowy wydruk zgodny z normami archiwalnymi.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
