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
    { icon: <Building />, title: "Organizacja archiwów", description: "Tworzymy od podstaw struktury archiwów zakładowych, zapewniając fundament dla porządku i bezpieczeństwa." },
    { icon: <FileCog />, title: "Opracowywanie normatywów", description: "Projektujemy jednolite wykazy akt i instrukcje, które standaryzują zarządzanie dokumentacją w Twojej organizacji." },
    { icon: <Wrench />, title: "Bieżąca obsługa archiwów", description: "Zapewniamy regularne wsparcie w prowadzeniu archiwum, gwarantując ciągłość i zgodność z przepisami." },
    { icon: <Users />, title: "Szkolenia dla pracowników", description: "Przekazujemy praktyczną wiedzę Twojemu zespołowi, aby samodzielnie i poprawnie zarządzał dokumentacją." },
    { icon: <Database />, title: "Elektroniczna ewidencja", description: "Wdrażamy nowoczesne systemy cyfrowe, które ułatwiają szybkie wyszukiwanie i zarządzanie aktami." },
    { icon: <FileStack />, title: "Opracowanie zasobów", description: "Systematyzujemy, klasyfikujemy i ewidencjonujemy Twoje zbiory, nadając im logiczną i przejrzystą strukturę." },
    { icon: <Landmark />, title: "Akta dla archiwów państwowych", description: "Profesjonalnie przygotowujemy materiały archiwalne kategorii „A” do bezpiecznego przekazania do archiwów państwowych." },
    { icon: <ArchiveRestore />, title: "Przekazywanie do depozytu", description: "Zajmujemy się kompleksowym przygotowaniem i przekazaniem dokumentacji do naszego lub wskazanego archiwum." },
    { icon: <FolderLock />, title: "Przechowywanie akt", description: "Gwarantujemy bezpieczne przechowywanie dokumentacji (w tym pracowniczej) w naszych profesjonalnych magazynach." },
    { icon: <Trash2 />, title: "Brakowanie i niszczenie", description: "Przeprowadzamy bezpieczny i zgodny z prawem proces niszczenia akt, których okres przechowywania minął." },
    { icon: <Ambulance />, title: "Pogotowie Archiwistyczne", description: "Nagła pomoc w kryzysowych sytuacjach, gdy liczy się czas, precyzja i natychmiastowe działanie." },
    { icon: <PlusCircle />, title: "Inne usługi archiwistyczne", description: "Realizujemy niestandardowe zlecenia i konsultacje, dopasowując nasze usługi do Twoich unikalnych potrzeb." },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {services.map((service, index) => (
                        <OnScrollAnimator key={index} delay={index * 0.1}>
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
                        Szczegółową ofertę, indywidualną dla każdego podmiotu z podaniem cen usług przedstawiamy po zapoznaniu się z przedmiotem i zakresem zamówienia. Podane niżej ceny są orientacyjne i podlegają negocjacji.
                    </p>
                </div>
                <Card className="overflow-x-auto mt-12">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold w-2/3">Usługa / Kategoria Dokumentacji</TableHead>
                                <TableHead className="font-semibold">Jednostka Miary</TableHead>
                                <TableHead className="font-semibold text-right">Cena Jednostkowa (PLN netto)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">1. Opracowanie Archiwalne Dokumentacji Aktowej</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „BE50–B50” (osobowa)</TableCell><TableCell>za 1 teczkę</TableCell><TableCell className="text-right">od 2,50 do 7,50</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „B50” (płacowa - listy płac)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 90,00 do 135,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „B50” (ubezpieczenia społeczne)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 85,00 do 125,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Zbiorcze karty wynagrodzeń (ułożenie)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 150,00 do 220,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Zbiorcze karty wynagrodzeń (założenie teczki)</TableCell><TableCell>za 1 teczkę</TableCell><TableCell className="text-right">od 3,60 do 5,30</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „A” (przygotowanie do arch. państwowego)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 500,00 do 750,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „B25”</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 180,00 do 270,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „B10” (sprawy sądowe, windykacja)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 110,00 do 170,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „B5–B2” (finansowo-księgowa) - opracowanie</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 49,00 do 99,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „B5–B2” (finansowo-księgowa) - weryfikacja i brakowanie</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 25,00 do 40,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Kat. „BE5” (inwestycje własne)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 120,00 do 160,00</TableCell></TableRow>
                            
                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">2. Opracowanie Archiwalne Dokumentacji Technicznej</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Inwestycyjna (projekty, kat. A-B25)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 260,00 do 340,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Inwestycyjna (projekty, kat. BE5-B5)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 170,00 do 240,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Konstrukcyjna, technologiczna (kat. A)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 260,00 do 340,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Konstrukcyjna, technologiczna (kat. B)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 140,00 do 190,00</TableCell></TableRow>

                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">3. Inne Prace</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Dokumentacja geologiczna i górnicza</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 200,00 do 260,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Prace na godziny (nadzór, przenoszenie, itp.)</TableCell><TableCell>za 1 godzinę roboczą</TableCell><TableCell className="text-right">od 24,00 do 29,00</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Odtwarzanie dokumentów osobowych</TableCell><TableCell>za 1 teczkę</TableCell><TableCell className="text-right">od 5,50 do 8,50</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Odtwarzanie dokumentów płacowych</TableCell><TableCell>za 1 rok</TableCell><TableCell className="text-right">od 4,00 do 6,50</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <div className="mt-4 text-center text-sm text-foreground/60 space-y-1">
                    <p>Powyższe ceny są cenami umownymi, netto. W przypadku dużych ilości akt lub stałej współpracy stosujemy zniżki i upusty. Ostateczna cena zależy od stanu fizycznego akt, ich ilości oraz przyjętej metodyki pracy.</p>
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
                                <AccordionTrigger className="text-lg">Szczegółowy Zakres Prac Archiwalnych</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Obejmuje uporządkowanie i zewidencjonowanie zbioru dokumentacji zgromadzonej w archiwum zakładowym/składnicy akt.</p>
                                    <strong>Zakres wykonywanych prac obejmuje między innymi:</strong>
                                    <ul>
                                        <li><strong>Systematyzację dokumentacji</strong> według zespołów aktowych i komórek organizacyjnych.</li>
                                        <li><strong>Klasyfikację rzeczową i kwalifikację archiwalną akt</strong> (podział na kategorie z określeniem okresu przechowywania).</li>
                                        <li><strong>Brakowanie przeterminowanej dokumentacji</strong> łącznie z przygotowaniem formalności i uzyskaniem zgody Archiwum Państwowego.</li>
                                        <li><strong>Archiwizację akt bieżących</strong> - formowanie jednostek, opisywanie, nadawanie sygnatur, umieszczanie w materiałach archiwizacyjnych.</li>
                                        <li><strong>Porządkowanie dokumentacji pracowniczej</strong> (osobowej i płacowej) oraz uzupełnianie brakujących dokumentów.</li>
                                        <li><strong>Sporządzenie ewidencji akt</strong> na nośnikach elektronicznych oraz w formie tradycyjnej (rejestry, skorowidze, inwentarze).</li>
                                        <li><strong>Obsługę archiwum</strong> w okresie postępowania upadłościowego lub likwidacyjnego.</li>
                                        <li><strong>Bezpieczny wywóz i zniszczenie akt</strong> wybrakowanych wraz z potwierdzeniem.</li>
                                    </ul>
                                    <p>W pracach archiwistycznych używamy profesjonalnych narzędzi informatycznych, w tym pakietów biurowych oraz specjalistycznych programów do obsługi archiwum zakładowego.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg">Proces Wyceny i Rozliczeń</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Wycenę wartości usługi sporządzamy po dokonaniu wstępnego obmiaru dokumentacji. Może mieć ona charakter orientacyjny lub ostateczny (ryczałt). Wycena jest zawsze bezpłatna.</p>
                                    <strong>Podstawą obmiaru ilości dokumentacji jest:</strong>
                                     <ul>
                                        <li><strong>Metr bieżący (mb):</strong> Standardowa jednostka miary.</li>
                                        <li><strong>Metr sześcienny (m³):</strong> Przeliczany na 10-12 mb akt.</li>
                                        <li><strong>Jednostka aktowa:</strong> Np. teczka osobowa, rysunek techniczny.</li>
                                        <li><strong>Godzina robocza:</strong> Dla prac dodatkowych, np. przenoszenia akt.</li>
                                    </ul>
                                    <p>Po wykonaniu usługi (lub jej części), sporządzamy protokoły przejściowe oraz końcowy protokół zdawczo-odbiorczy, na podstawie których wystawiamy faktury (częściowe i końcową).</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
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
                    <p>Podane ceny mają charakter orientacyjny i zależą od ilości dokumentacji. Do cen należy doliczyć podatek VAT (23%).</p>
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
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-8">
                        <a href="tel:+48326424780" className="flex items-center gap-4 group">
                            <Phone className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-sm text-muted-foreground">Telefon</p>
                                <p className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">+48 32 642 47 80</p>
                            </div>
                        </a>
                        <a href="mailto:arpad@arpad.pl" className="flex items-center gap-4 group">
                            <Mail className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">arpad@arpad.pl</p>
                            </div>
                        </a>
                        <div>
                            <p className="text-sm font-semibold text-foreground">Zakład Obsługi Archiwalnej ARPAD Sp. z o.o.</p>
                            <p className="text-muted-foreground">Krzykawa 7, 32-329 Bolesław, małopolskie, Polska</p>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </OnScrollAnimator>
        </section>
      </div>
    </div>
  );
}
