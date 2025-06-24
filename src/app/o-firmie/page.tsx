import OnScrollAnimator from '@/components/OnScrollAnimator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Milestone } from 'lucide-react';
import ContactDetails from '@/components/layout/ContactDetails';

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

const timelineEvents = [
    { year: 1993, event: 'Założenie firmy Zakład Usług Archiwistycznych – mgr Robert Chojowski, początek budowania fundamentów marki i zdobywania doświadczenia.' },
    { year: 2005, event: 'Transformacja w Spółkę z o.o. i powstanie Zakładu Obsługi Archiwalnej ARPAD, kontynuacja misji w nowej formie prawnej.' },
    { year: 2010, event: 'Rozszerzenie oferty o kompleksowe usługi RODO i wdrożenie pierwszych cyfrowych systemów zarządzania dokumentacją.' },
    { year: 2018, event: 'Osiągnięcie progu 25 lat nieprzerwanej działalności na rynku, ugruntowanie pozycji jako lidera w branży archiwistycznej.' },
    { year: 2023, event: 'Uruchomienie nowego, bezpiecznego archiwum depozytowego i wdrożenie zaawansowanych protokołów bezpieczeństwa danych.' },
]

export default function OFirmiePage() {
  return (
    <div className="bg-background">
      <header className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <OnScrollAnimator>
            <div className="container px-4 md:px-6">
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
                    Historia zbudowana na zaufaniu
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                    Dowiedz się, jak przez ponad ćwierć wieku doskonaliliśmy nasze usługi, stając się synonimem bezpieczeństwa i profesjonalizmu w archiwizacji.
                </p>
            </div>
        </OnScrollAnimator>
      </header>

      <div className="container py-16 md:py-24 px-4 md:px-6">
        <article className="prose prose-lg max-w-4xl mx-auto prose-h2:font-headline prose-h2:text-primary prose-h3:font-headline prose-h3:text-primary prose-h2:text-3xl prose-h2:mb-6 prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline">
            <OnScrollAnimator>
                <section>
                    <h2>Nasza Misja i Klienci</h2>
                    <p>
                        Spółka Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. od wielu lat z powodzeniem działa na rynku usług archiwistycznych. Została ona utworzona w 2005 r. na bazie istniejącej od 1993 r. firmy działającej pod nazwą: Zakład Usług Archiwistycznych – mgr Robert Chojowski kontynuując jej działalność w zakresie archiwizacji i przechowywania zasobów aktowych.
                    </p>
                    <p>
                        Naszymi klientami są spółki prawa handlowego, organy administracji państwowej i państwowe jednostki organizacyjne, w tym przedsiębiorstwa państwowe, organy administracji samorządu terytorialnego i samorządowe jednostki organizacyjne, spółdzielnie, stowarzyszenia oraz inne niepaństwowe jednostki organizacyjne (dalej zwane – organizacje).
                    </p>
                    <p>
                        Usługi archiwistyczne wykonujemy zgodnie z obowiązującymi aktami normatywnymi dotyczącymi archiwów zakładowych, składnic akt, okresów przechowywania dokumentacji oraz metodyki archiwalnej, w oparciu o normatywy kancelaryjno-archiwalne oraz inne procedury dotyczące zarządzania dokumentacją wdrożone do stosowania w danej organizacji.
                    </p>
                </section>
            </OnScrollAnimator>
            
            <OnScrollAnimator>
                <section className="mt-16">
                    <h2 className="text-center">Kamienie Milowe Arpad</h2>
                    <div className="relative mt-12 pl-6 border-l-2 border-accent/30">
                        {timelineEvents.map((item, index) => (
                            <div key={index} className="mb-10 ml-8 relative">
                                <div className="absolute -left-[44px] top-1.5 flex items-center justify-center bg-accent h-8 w-8 rounded-full ring-8 ring-background">
                                    <Milestone className="h-4 w-4 text-accent-foreground" />
                                </div>
                                <h3 className="text-xl font-headline font-semibold text-primary">{item.year}</h3>
                                <p className="mt-1 text-base text-foreground/80">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </OnScrollAnimator>

            <OnScrollAnimator>
                <section className="mt-16">
                    <h2 className="text-center">Wycena usługi / Informacja handlowa</h2>
                    <p className="mt-4 text-center">
                    Szczegółowa wycena usługi jest sporządzana indywidualnie dla każdego klienta po przeprowadzeniu wizji lokalnej i zapoznaniu się ze specyfiką dokumentacji. Ceny są uzależnione od ilości, rodzaju i stanu zachowania akt. Stosujemy elastyczne modele rozliczeń, w tym wycenę za metr bieżący (mb), jednostkę archiwalną (j.a.) lub stawkę godzinową.
                    </p>
                </section>
            </OnScrollAnimator>

            <OnScrollAnimator>
                <section id="rodo" className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
                    <h2 className="text-center mt-0">Bezpieczeństwo Danych (RODO)</h2>
                    <p className="mt-6">
                        W Zakładzie Obsługi Archiwalnej ARPAD Sp. z o.o. kwestie przestrzegania przepisów RODO, z racji charakteru wykonywanych usług, są objęte szczególnym priorytetem.
                    </p>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>W Spółce powołano Inspektora Ochrony Danych oraz wdrożono Politykę Ochrony Danych Osobowych.</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Przetwarzamy dane osobowe zgodnie z obowiązującymi przepisami, z zachowaniem pełnej przejrzystości, rzetelności i bezpieczeństwa.</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Wszystkie dane przechowywane są na szyfrowanych nośnikach, a dostęp do nich jest ściśle kontrolowany.</span></li>
                        <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Okres przetwarzania danych jest uzależniony od rodzaju zawartej umowy, a po jego upływie dane są trwale i nieodwracalnie usuwane.</span></li>
                    </ul>
                </section>
            </OnScrollAnimator>

            <OnScrollAnimator>
                <section className="mt-20">
                    <h2 className="text-center">Przechowywana dokumentacja zlikwidowanych firm</h2>
                    <p className="mt-4 text-center">
                        Poniżej znajduje się lista wybranych zlikwidowanych podmiotów, których dokumentacja osobowa i płacowa jest przechowywana w naszym archiwum depozytowym.
                    </p>
                    <Card className="mt-8 bg-card shadow-none border">
                        <CardContent className="p-6">
                             <ul className="list-none p-0 mt-0 space-y-2 text-base columns-1 md:columns-2 gap-x-8 text-foreground/80">
                                {liquidatedCompanies.map((company, index) => (
                                <li key={index} className="p-0 before:content-none flex items-center"><CheckCircle2 className="h-4 w-4 text-accent/70 mr-2 shrink-0" /><span>{company}</span></li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </section>
            </OnScrollAnimator>
        </article>
      </div>

      <section id="kontakt" className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
            <OnScrollAnimator>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                        Zaufaj naszemu doświadczeniu
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Nasza długa historia i setki zadowolonych klientów to najlepsza gwarancja jakości. Skontaktuj się, aby omówić, jak możemy wesprzeć Twoją firmę i otrzymać indywidualną, niezobowiązującą wycenę.
                    </p>
                </div>
            </OnScrollAnimator>
            <ContactDetails />
        </div>
      </section>
    </div>
  );
}
