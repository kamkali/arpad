import OnScrollAnimator from "@/components/OnScrollAnimator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ambulance, ArchiveRestore, Building, Database, FileCog, FileStack, FolderLock, Landmark, PlusCircle, Trash2, Users, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";

const services = [
    { icon: <Building />, title: "Organizacja archiwów", description: "Organizację, zakładanie archiwów zakładowych i zakładowych składnic akt." },
    { icon: <FileCog />, title: "Opracowywanie normatywów", description: "Opracowywanie normatywów kancelaryjno-archiwalnych, w tym jednolitych rzeczowych wykazów akt." },
    { icon: <Wrench />, title: "Bieżąca obsługa archiwów", description: "Bieżącą obsługę archiwów zakładowych i składnic akt." },
    { icon: <Users />, title: "Szkolenia dla pracowników", description: "Szkolenia dla pracowników odpowiedzialnych za archiwa zakładowe i składnice." },
    { icon: <Database />, title: "Elektroniczna ewidencja", description: "Wdrażanie elektronicznych systemów ewidencji zasobu archiwów i składnic." },
    { icon: <FileStack />, title: "Opracowanie zasobów", description: "Opracowanie archiwalne zasobów aktowych (systematyzacja strukturalna, klasyfikacja rzeczowa. kwalifikacja archiwalna, sporządzanie ewidencji w formie baz danych)." },
    { icon: <Landmark />, title: "Akta dla archiwów państwowych", description: "Przygotowywanie materiałów archiwalnych (akta kategorii „A”) do przekazania do archiwów państwowych." },
    { icon: <ArchiveRestore />, title: "Przekazywanie do depozytu", description: "Przygotowywanie do przekazania i przekazywanie akt do przechowywania we wskazanych archiwach depozytowych." },
    { icon: <FolderLock />, title: "Przechowywanie akt", description: "Przechowywanie akt (w tym dokumentacji pracowniczej)." },
    { icon: <Trash2 />, title: "Brakowanie i niszczenie", description: "Brakowanie dokumentacji niearchiwalnej oraz niszczenie akt, których okres przechowywania upłynął." },
    { icon: <Ambulance />, title: "Pogotowie Archiwistyczne", description: "Nagła pomoc w kryzysowych sytuacjach, gdy liczy się czas, precyzja i natychmiastowe działanie." },
    { icon: <PlusCircle />, title: "Inne usługi archiwistyczne", description: "Inne usługi związane z działalnością archiwów." },
];

export default function OfertaPage() {
  return (
    <div className="bg-background">
      <header className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <OnScrollAnimator>
            <div className="container px-4 md:px-6">
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
                Nasza Oferta
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                Nasza firma oferuje usługi obejmujące pełny zakres prac archiwistycznych. Naszą ofertę kierujemy zarówno do podmiotów istniejących, jak i tych w trakcie postępowania upadłościowego lub likwidacji.
                </p>
            </div>
        </OnScrollAnimator>
      </header>

      <div className="container py-16 md:py-24 px-4 md:px-6">
        <OnScrollAnimator>
            <section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">Zakres Usług</h2>
                     <p className="mt-4 text-lg text-foreground/70">
                        Świadczymy pełen wachlarz usług, od tworzenia archiwów po bezpieczne niszczenie dokumentacji. W szczególności:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((service, index) => (
                        <OnScrollAnimator key={index} delay={index * 0.05}>
                           <Card className="h-full flex flex-col text-center border-border/70 hover:shadow-lg transition-shadow">
                                <CardHeader className="items-center">
                                    <div className="bg-accent/10 rounded-full p-3 text-accent">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="font-headline text-lg pt-2">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    {service.description && (
                                        <p className="text-sm text-foreground/70">{service.description}</p>
                                    )}
                                </CardContent>
                            </Card>
                        </OnScrollAnimator>
                    ))}
                </div>
            </section>
        </OnScrollAnimator>
        
        <OnScrollAnimator>
            <section className="mt-20 md:mt-28">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">Wycena Usługi</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                         Szczegółową ofertę, indywidualną dla każdego podmiotu z podaniem cen usług przedstawiamy po zapoznaniu się z przedmiotem i zakresem zamówienia. Koszt usługi oblicza się na podstawie cen jednostkowych, ustalanych po dogłębnym zapoznaniu się z przedmiotem zadania oraz po wykonaniu obmiaru zbioru dokumentacji przeznaczonej do opracowania archiwalnego.
                    </p>
                </div>
                <Card className="overflow-x-auto mt-12">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold w-2/3">Usługa / Kategoria Dokumentacji</TableHead>
                                <TableHead className="font-semibold text-right">Cena Jednostkowa (PLN netto)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell colSpan={2} className="font-bold bg-primary/5 text-primary">1. Opracowanie archiwalne dokumentacji aktowej</TableCell></TableRow>

                            <TableRow><TableCell className="pl-8 font-medium">Akta kategorii „B10 – B5 – B3 - B2”</TableCell><TableCell className="text-right"></TableCell></TableRow>
                            <TableRow><TableCell className="pl-12">Dokumentacja finansowo-księgowa i obrotu gospodarczego</TableCell><TableCell className="text-right"></TableCell></TableRow>
                            <TableRow><TableCell className="pl-16">Opracowanie akt niezarchiwizowanych</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-16">Weryfikacja i brakowanie akt zarchiwizowanych</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-16">Weryfikacja i brakowanie z wywozem i zniszczeniem</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            
                            <TableRow><TableCell className="pl-12">Dokumentacja działalności podstawowej urzędów i podmiotów gospodarczych</TableCell><TableCell className="text-right"></TableCell></TableRow>
                            <TableRow><TableCell className="pl-16">Opracowanie akt niezarchiwizowanych</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-16">Weryfikacja i brakowanie akt zarchiwizowanych</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-16">Weryfikacja i brakowanie z wywozem i zniszczeniem</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>

                            <TableRow><TableCell className="pl-8 font-medium">Dokumentacja pracownicza kategorii „B50– B10 – B5 – B2”</TableCell><TableCell className="text-right"></TableCell></TableRow>
                             <TableRow><TableCell className="pl-12">Kategorii „B50-B10-B5” (dokumentacja płacowa)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                             <TableRow><TableCell className="pl-12">Zbiorcze karty wynagrodzeń i zasiłkowe (ułożenie)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                             <TableRow><TableCell className="pl-12">Zbiorcze karty wynagrodzeń (założenie teczki płacowej)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 teczkę</TableCell></TableRow>
                             <TableRow><TableCell className="pl-12">Kategorii „BE50 - B50” (dokumentacja osobowa)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 teczkę</TableCell></TableRow>
                             <TableRow><TableCell className="pl-12">Kategorii „B50-B25-B10-B5” (kadrowo-administracyjna)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>

                            <TableRow><TableCell className="pl-8 font-medium">Akta kategorii „B25”</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Akta kategorii „A” (wraz z przygotowaniem do archiwum państwowego)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Akta kategorii wyższej niż "B10" oraz "BE" w organach administracji</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Akta kategorii „BE5 - B5” (inwestycje i remonty)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Dokumentacja realizacji robót budowlanych</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            
                            <TableRow><TableCell colSpan={2} className="font-bold bg-primary/5 text-primary">2. Opracowanie archiwalne dokumentacji technicznej</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Inwestycyjna (kategorii „A – B25”)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Inwestycyjna (kategorii „BE5-B5”)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Konstrukcyjna i technologiczna (kategorii „A-B25”)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8 font-medium">Konstrukcyjna i technologiczna (kategorii „B”)</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 mb</TableCell></TableRow>

                             <TableRow><TableCell colSpan={2} className="font-bold bg-primary/5 text-primary">3. Inne prace dodatkowe i opracowania</TableCell></TableRow>
                             <TableRow><TableCell className="pl-8 font-medium">Prace dodatkowe na godziny</TableCell><TableCell className="text-right">Cena do uzgodnienia za 1 godz. roboczą</TableCell></TableRow>
                             <TableRow><TableCell className="pl-8 font-medium">Opracowanie projektów normatywów kancelaryjno–archiwalnych</TableCell><TableCell className="text-right">Cena do uzgodnienia za projekt/komplet</TableCell></TableRow>
                             <TableRow><TableCell className="pl-8 font-medium">Opracowanie innych rodzajów dokumentacji (geodezyjna, foto, itp.)</TableCell><TableCell className="text-right">Cena umowna</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <div className="mt-6 text-center text-sm text-foreground/60 space-y-2">
                    <p>Powyższe ceny mają charakter umowny, w przypadku dużych ilości akt lub stałej współpracy stosuje się zniżki i upusty. Ceny jednostkowe zależne są od stanu fizycznego akt, przyjętego sposobu ich opracowania, a także innych czynników wpływających na stopień pracochłonności.</p>
                     <p>Ceny uwzględniają koszt materiałów archiwizacyjnych dla akt kategorii „B”. Koszt materiałów dla akt kategorii „A” nie jest wliczony.</p>
                    <p>Do podanych cen należy doliczyć podatek VAT (23%).</p>
                </div>
            </section>
        </OnScrollAnimator>

        <OnScrollAnimator>
            <section className="mt-20 md:mt-28">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">Szczegółowy Zakres Prac</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Dowiedz się więcej o kluczowych aspektach naszych usług. Kliknij, aby rozwinąć i poznać szczegóły.
                    </p>
                </div>
                <Card className="mt-12">
                    <CardContent className="p-4 md:p-6">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg">Oferta dla Firm w Likwidacji i Upadłości</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Spółka Zakład Obsługi Archiwalnej ARPAD Sp. z o.o. od 1993 roku (początkowo jako firma jednoosobowa) realizuje kompleksowe usługi archiwizacyjne. Zrealizowaliśmy ponad 430 umów, w tym ponad 50 na przechowywanie dokumentacji zlikwidowanych podmiotów.</p>
                                    <strong>Nasza oferta dla firm w stanie upadłości lub likwidacji obejmuje:</strong>
                                    <ol>
                                        <li>Archiwizację akt jednostki.</li>
                                        <li>Prowadzenie archiwum w siedzibie klienta do czasu ukończenia postępowania.</li>
                                        <li>Przygotowanie zespołu aktowego do przekazania do archiwum depozytowego.</li>
                                        <li>Przekazanie zespołu aktowego do właściwego archiwum (w tym państwowego).</li>
                                        <li>Długoterminowe przechowywanie dokumentacji w naszym archiwum depozytowym.</li>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg">Proces Wyceny i Rozliczeń</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Wstępną wycenę wartości zlecenia dokonuje się przed rozpoczęciem prac na podstawie komisyjnego obmiaru akt, wykonywanego przez przedstawicieli obu Stron. Istnieje także możliwość przyjęcia ryczałtowej formy rozliczenia ustalonej z góry.</p>
                                    <p>Po wykonaniu usługi (częściowo lub w całości) obie Strony komisyjnie sporządzają i podpisują Protokoły Przejściowe Zaawansowania Prac oraz Zdawczo-Odbiorczy Końcowy. Na ich podstawie wystawiane są faktury (częściowe i końcowa). Należność za usługę może być zwiększona o kwotę wynikającą z tytułu prac dodatkowych.</p>
                                     <strong>Podstawą obmiaru ilości dokumentacji jest jednostka miary:</strong>
                                     <ul>
                                        <li><strong>1 mb (metr bieżący):</strong> Ilość akt mieszcząca się na 1 metrze półki.</li>
                                        <li><strong>1 m³ (metr sześcienny):</strong> Przeliczany na 10-12 mb akt.</li>
                                        <li><strong>1 j. a. (jednostka aktowa):</strong> Np. teczka osobowa, mapa, plan, rysunek techniczny.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg">Gwarancja Jakości i Współpraca</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Wszystkie usługi wykonujemy zgodnie z obowiązującymi przepisami i wymogami prawnymi dotyczącymi archiwizacji. Prace realizowane są przez naszych pracowników, posiadających wymagane uprawnienia i długoletnie doświadczenie zawodowe.</p>
                                    <p>Współpracujemy z zaufanymi firmami świadczącymi usługi w zakresie wyposażenia archiwów, niszczenia dokumentacji oraz tworzenia oprogramowania do zarządzania dokumentacją.</p>
                                    <p><strong>Zapraszamy serdecznie do korzystania z naszych usług.</strong> Na życzenie przedstawiamy listę naszych klientów wraz z referencjami.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </section>
        </OnScrollAnimator>

        <OnScrollAnimator>
            <section id="przechowalnictwo" className="mt-20 md:mt-28">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">Przechowalnictwo Dokumentacji</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Świadczymy usługi w zakresie bezpiecznego, długoterminowego przechowywania zasobów aktowych zlikwidowanych podmiotów. Gwarantujemy pełne bezpieczeństwo i poufność, bieżącą obsługę zasobu (sporządzanie kopii, udostępnianie uprawnionym organom) przy zachowaniu przepisów o tajemnicy służbowej i ochronie danych osobowych.
                    </p>
                </div>
                <Card className="overflow-x-auto mt-12">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold">Kategoria Dokumentacji</TableHead>
                                <TableHead className="font-semibold">Okres Przechowywania</TableHead>
                                <TableHead className="font-semibold">Cena Roczna Netto</TableHead>
                                <TableHead className="font-semibold text-right">Koszt Całkowity Netto</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Pracownicza osobowa kat. „B50”</TableCell><TableCell>do 50 lat</TableCell><TableCell>0,23 zł za 1 teczkę</TableCell><TableCell className="text-right">do 11,50 zł za 1 teczkę</TableCell></TableRow>
                            <TableRow><TableCell>Pracownicza płacowa kat. „B50”</TableCell><TableCell>do 50 lat</TableCell><TableCell>33,00 zł za 1 mb</TableCell><TableCell className="text-right">do 1650,00 zł za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell>Akta kat. „B25”</TableCell><TableCell>do 25 lat</TableCell><TableCell>33,00 zł za 1 mb</TableCell><TableCell className="text-right">do 825,00 zł za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell>Akta kat. „B10”</TableCell><TableCell>do 10 lat</TableCell><TableCell>33,00 zł za 1 mb</TableCell><TableCell className="text-right">do 330,00 zł za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell>Akta kat. „B5”</TableCell><TableCell>do 5 lat</TableCell><TableCell>33,00 zł za 1 mb</TableCell><TableCell className="text-right">do 165,00 zł za 1 mb</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Card>
                 <div className="mt-4 text-center text-sm text-foreground/60">
                    <p>Podane ceny mają charakter orientacyjny. Do cen należy doliczyć podatek VAT (23%).</p>
                </div>
            </section>
        </OnScrollAnimator>

         <section id="kontakt" className="mt-20 md:mt-28">
            <OnScrollAnimator>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">Porozmawiajmy o Twoich Potrzebach</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                    Każda firma ma inną specyfikę. Skontaktuj się z nami, aby omówić swoje potrzeby i otrzymać niezobowiązującą, indywidualną wycenę.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <ContactForm />
                </div>
            </OnScrollAnimator>
        </section>
      </div>
    </div>
  );
}
