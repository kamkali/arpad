import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const liquidatedCompanies = [
    'Przedsiębiorstwo Produkcyjno-Handlowe "ORION" Spółka z o. o. w upadłości w Tarnowskich Górach',
    'Firma "FALA" Sp. z o. o. Delikatesowe Przetwory z Ryb w upadłości w Chrzanowie',
    'UNIVEX S.A. w upadłości w Krakowie (również akta UNIVEX Sp. z o. o. i UNIVEX Co)',
    "Zakłady Mięsne 'Krakus' S.A. w likwidacji w Krakowie",
    "Huta 'Katowice' w Dąbrowie Górniczej - część dokumentacji",
    "Spółdzielnia Mleczarska 'Mlekovita' w likwidacji, oddział w Bolesławiu",
    "Przedsiębiorstwo Budownictwa Przemysłowego 'Budostal-5' w upadłości w Krakowie",
    "Małopolska Fabryka Mebli Sp. z o.o. w upadłości w Kalwarii Zebrzydowskiej",
    "Zakłady Chemiczne 'Alwernia' S.A. - część dokumentacji z lat 1960-1990",
    "Kopalnia Węgla Kamiennego 'Siersza' w Trzebini w likwidacji",
  ];

const services = [
    "Organizacja i zakładanie archiwów zakładowych.",
    "Opracowywanie normatywów kancelaryjno-archiwalnych.",
    "Bieżąca obsługa archiwów.",
    "Szkolenia dla pracowników.",
    "Wdrażanie systemów elektronicznych.",
    "Opracowanie archiwalne zasobów aktowych.",
    "Przygotowywanie materiałów do przekazania do archiwów państwowych.",
    "Przekazywanie akt do archiwów depozytowych.",
    "Przechowywanie akt (w tym dokumentacji pracowniczej).",
    "Brakowanie i niszczenie dokumentacji.",
    "Inne usługi związane z działalnością archiwów.",
    "Pogotowie Archiwistyczne."
]

export default function OfertaPage() {
  return (
    <div className="bg-white">
        <div className="container py-12 px-4 md:px-6">
            <header className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground font-headline">
                Oferta
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                Kompleksowe usługi archiwizacyjne dopasowane do Twoich potrzeb.
                </p>
            </header>

            <article className="prose prose-lg max-w-5xl mx-auto prose-h2:text-primary prose-h2:font-headline prose-h3:text-primary prose-h3:font-headline prose-h2:text-3xl prose-h2:mb-6 prose-p:leading-relaxed">
                <section>
                    <h2 className="text-center">Zakres usług</h2>
                    <ul className="list-disc pl-5 mt-6 space-y-2 text-base columns-1 md:columns-2 lg:columns-3 gap-x-8">
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-16">
                    <h2 className="text-center">Wycena usługi</h2>
                    <p className="mt-4 text-center">
                        Informacja handlowa dotycząca usług archiwizacji i przechowywania dokumentacji. Podane ceny są cenami netto.
                    </p>
                    <div className="overflow-x-auto mt-6 rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Usługa / Kategoria Dokumentacji</TableHead>
                                    <TableHead>Jednostka Miary</TableHead>
                                    <TableHead>Cena Jednostkowa (PLN)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell colSpan={3} className="font-bold bg-primary/10 text-primary">Dokumentacja Aktowa</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B10–B5–B3-B2” (finansowo-księgowa, itp.) - opracowanie</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 49,00 do 99,00</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B10–B5–B3-B2” - weryfikacja i brakowanie</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 25,00 do 40,00</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B10–B5–B3-B2” - weryfikacja, brakowanie i zniszczenie</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 28,00 do 45,00</TableCell></TableRow>
                                <TableRow><TableCell colSpan={3} className="font-bold bg-primary/10 text-primary">Dokumentacja Pracownicza</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B50-B10-B5” (płacowa - listy płac)</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 90,00 do 135,00</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B50-B10-B5” (płacowa - karty wynagrodzeń)</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 150,00 do 220,00</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B50-B10-B5” (płacowa - założenie teczki)</TableCell><TableCell>za 1 teczkę</TableCell><TableCell>od 3,60 do 5,30</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „BE50-B50” (osobowa)</TableCell><TableCell>za 1 teczkę osobową</TableCell><TableCell>od 2,50 do 7,50</TableCell></TableRow>
                                <TableRow><TableCell colSpan={3} className="font-bold bg-primary/10 text-primary">Dokumentacja Specjalistyczna</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „B25” (założycielska, prawna - w podmiotach niepaństwowych)</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 180,00 do 270,00</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „A” (materiały archiwalne do arch. państwowego)</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 500,00 do 750,00</TableCell></TableRow>
                                <TableRow><TableCell>Kat. „BE5-B5” (inwestycje i remonty)</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 120,00 do 160,00</TableCell></TableRow>
                                <TableRow><TableCell colSpan={3} className="font-bold bg-primary/10 text-primary">Dokumentacja Techniczna</TableCell></TableRow>
                                <TableRow><TableCell>Inwestycyjna Kat. „A–B25”</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 260,00 do 340,00</TableCell></TableRow>
                                <TableRow><TableCell>Inwestycyjna Kat. „BE5-B5”</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 170,00 do 240,00</TableCell></TableRow>
                                <TableRow><TableCell>Konstrukcyjna/Technologiczna Kat. „B”</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 140,00 do 190,00</TableCell></TableRow>
                                <TableRow><TableCell>Geologiczna/Górnicza</TableCell><TableCell>za 1 mb</TableCell><TableCell>od 200,00 do 260,00</TableCell></TableRow>
                                <TableRow><TableCell colSpan={3} className="font-bold bg-primary/10 text-primary">Prace Dodatkowe</TableCell></TableRow>
                                <TableRow><TableCell>Prace na godziny (przenoszenie, nadzór, itp.)</TableCell><TableCell>za 1 godzinę roboczą</TableCell><TableCell>od 24,00 do 29,00</TableCell></TableRow>
                                <TableRow><TableCell>Odtwarzanie dokumentów osobowych</TableCell><TableCell>za 1 teczkę</TableCell><TableCell>od 5,50 do 8,50</TableCell></TableRow>
                                <TableRow><TableCell>Odtwarzanie dokumentów płacowych</TableCell><TableCell>za 1 rok / zaśw.</TableCell><TableCell>od 4,00 do 6,50</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-center">Przechowalnictwo</h2>
                    <p className="mt-4 text-center">
                        Oferujemy usługi przechowywania dokumentacji zlikwidowanych firm. Poniżej cennik oraz wykaz firm, których dokumentacja jest przechowywana w naszym archiwum.
                    </p>
                    <div className="overflow-x-auto mt-6 rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Kategoria Dokumentacji</TableHead>
                                    <TableHead>Okres Przechowywania</TableHead>
                                    <TableHead>Model Cenowy</TableHead>
                                    <TableHead>Przykładowy Koszt Całkowity</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Pracownicza osobowa kat. „B50”</TableCell><TableCell>do 50 lat</TableCell><TableCell>0,23 zł za 1 teczkę x ilość lat</TableCell><TableCell>do 11,50 zł za 1 teczkę</TableCell></TableRow>
                                <TableRow><TableCell>Pracownicza płacowa kat. „B50”</TableCell><TableCell>do 50 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell>do 1650,00 zł za 1 mb</TableCell></TableRow>
                                <TableRow><TableCell>Akta kat. „B25”</TableCell><TableCell>do 25 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell>do 825,00 zł za 1 mb</TableCell></TableRow>
                                <TableRow><TableCell>Akta kat. „B10”</TableCell><TableCell>do 10 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell>do 330,00 zł za 1 mb</TableCell></TableRow>
                                <TableRow><TableCell>Akta kat. „B5”</TableCell><TableCell>do 5 lat</TableCell><TableCell>33,00 zł za 1 mb x ilość lat</TableCell><TableCell>do 165,00 zł za 1 mb</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mt-12 text-center">Wykaz firm</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-base columns-1 md:columns-2 gap-x-8">
                        {liquidatedCompanies.map((company, index) => (
                        <li key={index}>{company}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </div>
    </div>
  );
}
