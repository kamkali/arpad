import OnScrollAnimator from "@/components/OnScrollAnimator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ambulance, ArchiveRestore, Building, Database, FileCog, FileStack, FolderLock, Landmark, PlusCircle, Trash2, Users, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
    { icon: <Building />, title: "Organizacja i zakładanie archiwów", description: "Tworzymy od podstaw struktury archiwów, zapewniając fundament dla porządku i bezpieczeństwa Twoich dokumentów." },
    { icon: <FileCog />, title: "Opracowywanie normatywów", description: "Projektujemy jednolite wykazy akt i instrukcje, które standaryzują zarządzanie dokumentacją w Twojej organizacji." },
    { icon: <Wrench />, title: "Bieżąca obsługa archiwów", description: "Zapewniamy regularne wsparcie w prowadzeniu archiwum, gwarantując ciągłość i zgodność z przepisami." },
    { icon: <Users />, title: "Szkolenia dla pracowników", description: "Przekazujemy praktyczną wiedzę Twojemu zespołowi, aby samodzielnie i poprawnie zarządzał dokumentacją." },
    { icon: <Database />, title: "Elektroniczna ewidencja zasobu", description: "Wdrażamy nowoczesne systemy cyfrowe, które ułatwiają szybkie wyszukiwanie i zarządzanie aktami." },
    { icon: <FileStack />, title: "Opracowanie zasobów aktowych", description: "Systematyzujemy, klasyfikujemy i ewidencjonujemy Twoje zbiory, nadając im logiczną i przejrzystą strukturę." },
    { icon: <Landmark />, title: "Akta dla archiwów państwowych", description: "Profesjonalnie przygotowujemy materiały archiwalne kategorii „A” do bezpiecznego przekazania archiwom państwowym." },
    { icon: <ArchiveRestore />, title: "Przekazywanie akt do depozytu", description: "Zajmujemy się kompleksowym przygotowaniem i przekazaniem dokumentacji do naszego lub wskazanego archiwum depozytowego." },
    { icon: <FolderLock />, title: "Przechowywanie akt", description: "Gwarantujemy bezpieczne przechowywanie dokumentacji (w tym pracowniczej) w naszych magazynach archiwalnych." },
    { icon: <Trash2 />, title: "Brakowanie i niszczenie dokumentacji", description: "Przeprowadzamy bezpieczny i zgodny z prawem proces niszczenia akt, których okres przechowywania minął." },
    { icon: <Ambulance />, title: "Pogotowie Archiwistyczne", description: "Nagła pomoc w kryzysowych sytuacjach, gdy liczy się czas, precyzja i natychmiastowe działanie." },
    { icon: <PlusCircle />, title: "Inne usługi archiwistyczne", description: "Realizujemy niestandardowe zlecenia i konsultacje, dopasowując nasze usługi do Twoich unikalnych potrzeb." },
];

const liquidatedCompanies = [
    'Przedsiębiorstwo Produkcyjno-Handlowe "ORION" Spółka z o. o. w upadłości w Tarnowskich Górach',
    'Firma "FALA" Sp. z o. o. Delikatesowe Przetwory z Ryb w upadłości w Chrzanowie',
    'UNIVEX S.A. w upadłości w Krakowie (również akta UNIVEX Sp. z o. o. i UNIVEX Co)',
    "Zakłady Mięsne 'Krakus' S.A. w likwidacji w Krakowie",
    "Huta 'Katowice' w Dąbrowie Górniczej - część dokumentacji",
    "Spółdzielnia Mleczarska 'Mlekovita' w likwidacji, oddział w Bolesławiu",
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
                        Świadczymy pełen wachlarz usług, od tworzenia archiwów po bezpieczne niszczenie dokumentacji.
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
                        Szczegółową, indywidualną ofertę z podaniem cen usług przedstawiamy po zapoznaniu się z przedmiotem i zakresem zamówienia. Podane niżej ceny są orientacyjne i podlegają negocjacji.
                    </p>
                </div>
                <Card className="overflow-x-auto mt-12">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold">Usługa / Kategoria Dokumentacji</TableHead>
                                <TableHead className="font-semibold">Jednostka Miary</TableHead>
                                <TableHead className="font-semibold text-right">Cena Jednostkowa (PLN)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">Dokumentacja Aktowa</TableCell></TableRow>
                            <TableRow><TableCell>Kat. „B10–B5–B3-B2” (finansowo-księgowa, itp.) - opracowanie</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 49,00 do 99,00</TableCell></TableRow>
                            <TableRow><TableCell>Kat. „B10–B5–B3-B2” - weryfikacja i brakowanie</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 25,00 do 40,00</TableCell></TableRow>
                            
                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">Dokumentacja Pracownicza</TableCell></TableRow>
                            <TableRow><TableCell>Kat. „B50-B10-B5” (płacowa - listy płac)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 90,00 do 135,00</TableCell></TableRow>
                            <TableRow><TableCell>Kat. „BE50-B50” (osobowa)</TableCell><TableCell>za 1 teczkę osobową</TableCell><TableCell className="text-right">od 2,50 do 7,50</TableCell></TableRow>
                            
                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">Dokumentacja Specjalistyczna i Techniczna</TableCell></TableRow>
                            <TableRow><TableCell>Kat. „A” (materiały archiwalne do arch. państwowego)</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 500,00 do 750,00</TableCell></TableRow>
                            <TableRow><TableCell>Inwestycyjna / Konstrukcyjna / Geologiczna</TableCell><TableCell>za 1 mb</TableCell><TableCell className="text-right">od 140,00 do 340,00</TableCell></TableRow>

                            <TableRow><TableCell colSpan={3} className="font-bold bg-primary/5 text-primary">Prace Dodatkowe</TableCell></TableRow>
                            <TableRow><TableCell>Prace na godziny (przenoszenie, nadzór, itp.)</TableCell><TableCell>za 1 godzinę roboczą</TableCell><TableCell className="text-right">od 24,00 do 29,00</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Card>
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
                                <AccordionTrigger className="text-lg">Opracowanie Archiwalne Zasobu Aktowego</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Obejmuje uporządkowanie i zewidencjonowanie zbioru dokumentacji zgromadzonej w archiwum zakładowym/składnicy akt wraz z przygotowaniem dokumentacji powstającej w poszczególnych komórkach organizacyjnych do przekazania.</p>
                                    <strong>Zakres wykonywanych prac obejmuje:</strong>
                                    <ul>
                                        <li><strong>Systematyzację dokumentacji</strong> według zespołów aktowych i komórek organizacyjnych.</li>
                                        <li><strong>Klasyfikację rzeczową akt,</strong> tj. przyporządkowanie jednostek do właściwej grupy tematyczno-rzeczowej.</li>
                                        <li><strong>Kwalifikację archiwalną akt</strong> (podział na kategorie z określeniem okresu przechowywania).</li>
                                        <li><strong>Brakowanie przeterminowanej dokumentacji</strong> łącznie z przygotowaniem dokumentacji brakowania akt (spisy, protokoły, wnioski do Archiwum Państwowego).</li>
                                        <li><strong>Weryfikację kwalifikacji archiwalnej</strong> oraz uzupełnienie opisu zarchiwizowanych wcześniej jednostek.</li>
                                        <li><strong>Archiwizację akt bieżących</strong> - formowanie nowych jednostek, opisywanie, nadawanie sygnatur.</li>
                                        <li><strong>Sporządzenie ewidencji akt</strong> na nośnikach elektronicznych oraz w formie tradycyjnej (rejestry, skorowidze, inwentarze).</li>
                                        <li><strong>Wywóz i zniszczenie akt</strong> wybrakowanych wraz z potwierdzeniem ich fizycznego zniszczenia.</li>
                                    </ul>
                                    <p>W pracach archiwistycznych używamy profesjonalnych narzędzi informatycznych, w tym pakietów biurowych oraz specjalistycznych programów do obsługi archiwum zakładowego.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg">Projekty Normatywów i Instruktaż</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <strong>Opracowujemy projekty normatywów kancelaryjno-archiwalnych:</strong>
                                    <ul>
                                        <li>Instrukcji o organizacji i zakresie działania archiwum zakładowego/składnicy akt.</li>
                                        <li>Instrukcji kancelaryjnej.</li>
                                        <li>Jednolitego rzeczowego wykazu akt.</li>
                                        <li>Skróconej instrukcji kancelaryjno-archiwalnej.</li>
                                    </ul>
                                    <p>Dodatkowo, oferujemy <strong>profesjonalny instruktaż</strong> dla pracownika wyznaczonego przez kierownictwo organizacji do prowadzenia archiwum zakładowego lub składnicy akt.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg">Bieżąca Obsługa Archiwalna</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Zapewniamy kompleksową, bieżącą obsługę funkcjonującego archiwum zakładowego lub składnicy akt.</p>
                                    <strong>Zakres usługi obejmuje:</strong>
                                    <ul>
                                        <li>Nadzór nad prawidłowością i terminowością przekazywania akt z komórek organizacyjnych.</li>
                                        <li>Prowadzenie ewidencji akt oraz dokumentacji pracy archiwum.</li>
                                        <li>Systematyczne wydzielanie dokumentacji niearchiwalnej, której okres przechowywania upłynął.</li>
                                        <li>Wyszukiwanie, udostępnianie i wypożyczanie akt dla wewnętrznych potrzeb organizacji.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg">Współpraca i Gwarancja Jakości</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none">
                                    <p>Współpracujemy z zaufanymi firmami świadczącymi usługi w zakresie wyposażenia archiwów, niszczenia dokumentacji oraz tworzenia oprogramowania do zarządzania dokumentacją.</p>
                                    <p>Uprzejmie informujemy, że wszystkie usługi wykonujemy zgodnie z obowiązującymi przepisami i wymogami prawnymi dotyczącymi archiwizacji i przechowywania dokumentacji.</p>
                                    <p><strong>Zapraszamy serdecznie do korzystania z naszych usług.</strong> Na życzenie przedstawiamy listę naszych klientów wraz z referencjami. W przypadku zainteresowania, nasz przedstawiciel przyjedzie do Państwa w celu zapoznania się z zakresem prac i oszacowania kosztów usługi.</p>
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
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">Przechowalnictwo</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Oferujemy usługi długoterminowego i bezpiecznego przechowywania dokumentacji zlikwidowanych firm.
                    </p>
                </div>
                <Card className="overflow-x-auto mt-12">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold">Kategoria Dokumentacji</TableHead>
                                <TableHead className="font-semibold">Okres Przechowywania</TableHead>
                                <TableHead className="font-semibold">Model Cenowy</TableHead>
                                <TableHead className="font-semibold text-right">Przykładowy Koszt Całkowity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Pracownicza osobowa kat. „B50”</TableCell><TableCell>do 50 lat</TableCell><TableCell>0,23 zł za 1 teczkę x ilość lat</TableCell><TableCell className="text-right">do 11,50 zł za 1 teczkę</TableCell></TableRow>
                            <TableRow><TableCell>Pracownicza płacowa kat. „B50”</TableCell><TableCell>do 50 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell className="text-right">do 1650,00 zł za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell>Akta kat. „B25”</TableCell><TableCell>do 25 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell className="text-right">do 825,00 zł za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell>Akta kat. „B10”</TableCell><TableCell>do 10 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell className="text-right">do 330,00 zł za 1 mb</TableCell></TableRow>
                            <TableRow><TableCell>Akta kat. „B5”</TableCell><TableCell>do 5 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell className="text-right">do 165,00 zł za 1 mb</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <div className="mt-8 text-center text-sm text-foreground/60">
                    <p>W naszym archiwum depozytowym przechowujemy dokumentację wielu zlikwidowanych firm, w tym: <br className="hidden md:block" /> {liquidatedCompanies.join(', ')} i wiele innych.</p>
                </div>
            </section>
        </OnScrollAnimator>
      </div>
    </div>
  );
}
