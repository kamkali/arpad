import OnScrollAnimator from "@/components/OnScrollAnimator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive, Briefcase, Building, FileCog, FileStack, FolderLock, Scale, Search, ShieldCheck, Sprout, Train, Wrench } from "lucide-react";

const services = [
    { icon: <Building />, title: "Organizacja archiwów zakładowych", description: "Tworzymy struktury archiwów od podstaw, zapewniając porządek i logikę." },
    { icon: <FileCog />, title: "Opracowanie normatywów", description: "Przygotowujemy instrukcje kancelaryjne i archiwalne zgodne z przepisami." },
    { icon: <Wrench />, title: "Bieżąca obsługa archiwów", description: "Zapewniamy stały nadzór i zarządzanie bieżącą dokumentacją." },
    { icon: <Briefcase />, title: "Szkolenia dla pracowników", description: "Podnosimy kompetencje Twojego zespołu w zakresie zarządzania dokumentami." },
    { icon: <FileStack />, title: "Opracowanie zasobów aktowych", description: "Porządkujemy, klasyfikujemy i ewidencjonujemy zgromadzone dokumenty." },
    { icon: <FolderLock />, title: "Przechowywanie akt", description: "Bezpiecznie przechowujemy dokumentację, w tym akta osobowe i płacowe." },
    { icon: <Scale />, title: "Brakowanie i niszczenie", description: "Realizujemy proces niszczenia dokumentacji zgodnie z protokołem i przepisami." },
    { icon: <ShieldCheck />, title: "Pogotowie Archiwistyczne", description: "Szybko interweniujemy w nagłych przypadkach, chroniąc Twoje dokumenty." },
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
                Kompleksowe usługi archiwizacyjne dopasowane do indywidualnych potrzeb Twojej firmy. Sprawdź, jak możemy Ci pomóc.
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
                                    <p className="text-sm text-foreground/70">{service.description}</p>
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
                        Informacja handlowa dotycząca usług archiwizacji i przechowywania dokumentacji. Podane ceny są cenami netto i podlegają indywidualnej negocjacji.
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
