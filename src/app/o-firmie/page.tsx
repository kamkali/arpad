import ContactForm from "@/components/ContactForm";

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

export default function OFirmiePage() {
  return (
    <div className="bg-white">
      <div className="container py-12 px-4 md:px-6">
        <header className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground font-headline">
            O firmie
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Poznaj naszą historię, misję i wartości, które kierują naszą codzienną pracą.
            </p>
        </header>

        <article className="prose prose-lg max-w-4xl mx-auto prose-h2:text-primary prose-h2:font-headline prose-h3:text-primary prose-h3:font-headline prose-h2:text-3xl prose-h2:mb-6 prose-p:leading-relaxed">
            <section>
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

            <section className="mt-16">
                <h2 className="text-center">Wykaz zlikwidowanych firm, których dokumentacja osobowa i płacowa jest przechowywana w naszym archiwum depozytowym</h2>
                <ul className="list-disc pl-5 mt-6 space-y-2 text-base columns-1 md:columns-2 gap-x-8">
                    {liquidatedCompanies.map((company, index) => (
                    <li key={index}>{company}</li>
                    ))}
                </ul>
            </section>

            <section className="mt-16">
                <h2 className="text-center">Wycena usługi / Informacja handlowa</h2>
                <p className="mt-4 text-center">
                Szczegółowa wycena usługi jest sporządzana indywidualnie dla każdego klienta po przeprowadzeniu wizji lokalnej i zapoznaniu się ze specyfiką dokumentacji. Ceny są uzależnione od ilości, rodzaju i stanu zachowania akt. Stosujemy elastyczne modele rozliczeń, w tym wycenę za metr bieżący (mb), jednostkę archiwalną (j.a.) lub stawkę godzinową.
                </p>
            </section>

            <section id="rodo" className="mt-16 p-8 bg-primary/10 rounded-lg">
            <h2 className="text-center">RODO</h2>
            <p className="mt-4">
                W Zakładzie Obsługi Archiwalnej ARPAD Sp. z o.o. kwestie przestrzegania przepisów RODO, z racji charakteru wykonywanych usług, są objęte szczególnym priorytetem. W związku z powyższym w Spółce powołano Inspektora Ochrony Danych oraz wdrożono Politykę Ochrony Danych Osobowych. Przetwarzamy dane osobowe zgodnie z obowiązującymi przepisami, z zachowaniem pełnej przejrzystości, rzetelności i bezpieczeństwa. Wszystkie dane przechowywane są na szyfrowanych nośnikach, a dostęp do nich jest ściśle kontrolowany. W przypadku naruszenia ochrony danych, niezwłocznie informujemy o tym fakcie Zleceniodawcę. Zastrzegamy sobie prawo do ujawnienia informacji właściwym organom na podstawie obowiązujących przepisów prawa. Okres przetwarzania danych jest uzależniony od rodzaju zawartej umowy, a po jego upływie dane są trwale i nieodwracalnie usuwane.
            </p>
            </section>
        </article>
      </div>

       <section className="mt-16 bg-muted/50 py-20">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl text-foreground font-headline">Napisz do nas</h2>
                <div className="mx-auto w-full max-w-4xl grid md:grid-cols-2 gap-12 mt-8 items-start">
                    <div className="text-left space-y-4 my-auto">
                        <h3 className="text-2xl font-bold text-foreground">Dane kontaktowe</h3>
                        <p><strong>Adres:</strong> Krzykawa 7, 32-329 Bolesław, małopolskie, Polska</p>
                        <p><strong>Telefon:</strong> <a href="tel:+48326424780" className="hover:underline text-primary">+48 32 6424780</a>, <a href="tel:+48501439752" className="hover:underline text-primary">+48 501 439 752</a></p>
                        <p><strong>Email:</strong> <a href="mailto:arpad@arpad.pl" className="hover:underline text-primary">arpad@arpad.pl</a></p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    </div>
  );
}
