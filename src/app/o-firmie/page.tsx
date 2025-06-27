import OnScrollAnimator from '@/components/OnScrollAnimator';
import { Card, CardContent } from '@/components/ui/card';
import { Archive, ArrowRight, Briefcase, Building, CheckCircle2, ShieldCheck } from 'lucide-react';
import CallToAction from '@/components/layout/CallToAction';
import { Metadata } from "next";
import CtaButton from '@/components/ui/CtaButton';

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

const milestones = [
  {
    year: "1993",
    icon: <Archive />,
    description: "Założenie firmy Zakład Usług Archiwistycznych – mgr Robert Chojowski, początek budowania fundamentów marki i zdobywania doświadczenia.",
  },
  {
    year: "2005",
    icon: <Briefcase />,
    description: "Transformacja w Spółkę z o.o. i powstanie Zakładu Obsługi Archiwalnej ARPAD, kontynuacja misji w nowej formie prawnej.",
  },
  {
    year: "2016",
    icon: <ShieldCheck />,
    description: "Wdrożenie wewnętrznych procedur RODO, co pozwoliło na kompleksowe dostosowanie usług do nowych standardów ochrony danych osobowych.",
  },
  {
    year: "2018",
    icon: <CheckCircle2 />,
    description: "Osiągnięcie progu 25 lat nieprzerwanej działalności na rynku, ugruntowanie pozycji lidera w branży archiwistycznej.",
  },
  {
    year: new Date().getFullYear().toString(),
    icon: <CheckCircle2 />,
    description: "Ciągłe doskonalenie procedur i inwestycje w technologie, aby niezmiennie gwarantować najwyższy poziom bezpieczeństwa i jakości naszych usług.",
  },
];

export const metadata: Metadata = {
  title: "O firmie",
};

export default function OFirmiePage() {
  const h2ClassName = "font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary text-center";

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
        <div className="prose prose-lg max-w-4xl mx-auto prose-h2:font-headline prose-h2:text-primary prose-h3:font-headline prose-h3:text-primary prose-h2:text-3xl prose-h2:mb-6 prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline">
            <OnScrollAnimator>
                <section>
                    <h2 className={h2ClassName}>Nasza Misja i Klienci</h2>
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
            
            <section className="mt-16 not-prose">
                <OnScrollAnimator>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className={h2ClassName}>Kamienie Milowe Arpad</h2>
                        <p className="mt-4 text-lg text-foreground/70">
                           Nasza droga to ponad 30 lat ciągłego rozwoju, innowacji i budowania pozycji eksperta w dziedzinie archiwistyki.
                        </p>
                    </div>
                </OnScrollAnimator>
                <div className="relative mt-12 max-w-3xl mx-auto">
                     <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true" />
                     {milestones.map((milestone, index) => (
                        <OnScrollAnimator key={index} className="mt-12">
                            <div className="relative flex items-center group">
                                <div className="w-1/2 pr-8 text-right relative z-10">
                                    { index % 2 === 0 
                                        ? <p className="text-foreground/80">{milestone.description}</p>
                                        : <p className="font-bold text-2xl text-accent font-headline transition-transform group-hover:scale-[1.02]">{milestone.year}</p>
                                    }
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background group-hover:bg-accent transition-colors">
                                     {milestone.icon}
                                </div>
                                <div className="w-1/2 pl-8 text-left relative z-10">
                                    { index % 2 === 0
                                        ? <p className="font-bold text-2xl text-accent font-headline transition-transform group-hover:scale-[1.02]">{milestone.year}</p>
                                        : <p className="text-foreground/80">{milestone.description}</p>
                                    }
                                </div>
                            </div>
                        </OnScrollAnimator>
                     ))}
                </div>
            </section>

            <OnScrollAnimator>
                <section className="mt-16">
                    <h2 className={h2ClassName}>Wycena usługi / Informacja handlowa</h2>
                    <p className="mt-4 text-center">
                    Szczegółowa wycena usługi jest sporządzana indywidualnie dla każdego klienta po przeprowadzeniu wizji lokalnej i zapoznaniu się ze specyfiką dokumentacji. Ceny są uzależnione od ilości, rodzaju i stanu zachowania akt. Stosujemy elastyczne modele rozliczeń, w tym wycenę za metr bieżący (mb), jednostkę archiwalną (j.a.) lub stawkę godzinową.
                    </p>
                    <div className="mt-8 text-center">
                        <CtaButton href="/oferta" showArrow={true}>
                            Zobacz pełną ofertę
                        </CtaButton>
                    </div>
                </section>
            </OnScrollAnimator>

            <OnScrollAnimator>
                <section id="rodo" className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
                    <h2 className={`${h2ClassName} mt-0`}>Bezpieczeństwo Danych (RODO)</h2>
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
                    <h2 className={h2ClassName}>Przechowywana dokumentacja zlikwidowanych firm</h2>
                    <p className="mt-4 text-center">
                        Poniżej znajduje się lista wybranych zlikwidowanych podmiotów, których dokumentacja osobowa i płacowa jest przechowywana w naszym archiwum depozytowym.
                    </p>
                    <div className="mt-8 not-prose">
                        <Card className="bg-muted/30 border-border/50">
                            <CardContent className="p-6 md:p-8">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {liquidatedCompanies.map((company, index) => (
                                    <li key={index} className="flex items-start text-sm">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 mr-3 shrink-0" />
                                        <span className="text-foreground/80">{company}</span>
                                    </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <p className="mt-8 text-center max-w-2xl mx-auto">
                        Aby uzyskać dostęp do dokumentacji, pobierz i wypełnij poniższy wniosek, a następnie skontaktuj się z nami w celu umówienia wizyty.
                    </p>
                    <div className="mt-6 text-center">
                        <CtaButton
                            href="/Wniosek-o-wydanie-dokumentow.docx"
                            download={true}
                            colorVariant="accent"
                        >
                            Pobierz wniosek o wydanie dokumentacji
                        </CtaButton>
                    </div>
                </section>
            </OnScrollAnimator>
        </div>
      </div>

      <CallToAction
        title="Zaufaj naszemu doświadczeniu"
        description="Nasza długa historia i setki zadowolonych klientów to najlepsza gwarancja jakości. Skontaktuj się, aby omówić, jak możemy wesprzeć Twoją firmę i otrzymać indywidualną, niezobowiązującą wycenę."
      />
    </div>
  );
}
