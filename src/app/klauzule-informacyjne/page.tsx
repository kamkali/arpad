import OnScrollAnimator from "@/components/OnScrollAnimator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klauzule informacyjne",
};

export default function KlauzuleInformacyjnePage() {
  const klauzule = [
    {
      id: "kontrahenci",
      title: "Dla kontrahentów spółki",
      content: `
        <div class="space-y-4">
          <p>Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Dz. Urz. UE L 119/1 z 04.05.2016 r.), dalej jako „RODO", informujemy, że:</p>
          
          <p><strong>Administratorem Pani/Pana danych osobowych</strong> jest Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. z siedzibą w Krzykawie, gmina Bolesław, powiat olkuski (32-329 Bolesław, Krzykawa 7). Aby skontaktować się z nami, należy wysłać wiadomość na adres poczty elektronicznej: arpad@arpad.pl lub zadzwonić pod numer tel. 501 439 752.</p>
          
          <p>We wszystkich kwestiach dotyczących danych osobowych można kontaktować się z Administratorem pisemnie, za pomocą poczty tradycyjnej na adres siedziby Spółki lub w formie elektronicznej na adres poczty elektronicznej: arpad@arpad.pl</p>
          
          <p><strong>Pani/Pana dane osobowe będą przetwarzane:</strong></p>
          <p><strong>1)</strong> na podstawie art. 6 ust. 1 lit. b RODO, zgodnie z którym to przetwarzanie jest niezbędne do zawarcia umowy lub do podjęcia działań zmierzających do zawarcia umowy, w celach:</p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>składania ofert,</li>
            <li>uczestnictwa w postępowaniach przetargowych i konkursowych,</li>
            <li>zawierania, realizacji i rozliczenia Umowy,</li>
            <li>windykacji ewentualnych należności.</li>
          </ul>
          
          <p><strong>2)</strong> na podstawie art. 6 ust. 1 lit. c RODO, w którym to przetwarzanie jest niezbędne do wypełnienia obowiązku prawnego ciążącym na Administratorze, w celu:</p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>wystawiania faktur,</li>
            <li>prowadzenia ksiąg rachunkowych i dokumentacji podatkowej w zw. z art. 74 ust. 2 ustawy z dnia 29 września 1994 r. o rachunkowości.</li>
          </ul>
          
          <p><strong>3)</strong> na podstawie art. 6 ust. 1 lit. f RODO, co stanowi nasz prawnie uzasadniony interes realizowany przez Administratora, w celu:</p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>marketingu usług własnych,</li>
            <li>dochodzenia roszczeń bądź obrony praw Administratora w przypadku ewentualnych sporów,</li>
            <li>nawiązywania i prowadzenia współpracy biznesowej,</li>
            <li>bieżącego kontaktu z Kontrahentem lub odpowiednio osobami go reprezentującymi.</li>
          </ul>
          
          <p><strong>Odbiorcą Pani/Pana danych osobowych</strong> będą wyłącznie podmioty uprawnione do uzyskania danych osobowych na podstawie odrębnych przepisów prawa, upoważnieni pracownicy, podmioty przetwarzające dane w imieniu Administratora, podmioty uczestniczące w realizacji umowy, banki, firmy ubezpieczeniowe, firmy windykacyjne, Poczta Polska, Kurierzy itp.</p>
          
          <p><strong>Pani/Pana dane osobowe będą przechowywane</strong> przez okres 5 lat liczonych od rozwiązania/wygaśnięcia umowy; dane osobowe przetwarzane w celu dokonywania rozliczeń będą przechowywane przez Administratora przez okres przechowywania dokumentacji księgowej i podatkowej wynikający z przepisów prawa; dane osobowe przetwarzane w celu dochodzenia roszczeń (np. w postępowaniach sądowych) będą przechowywane przez okres przedawnienia roszczeń, wynikający z przepisów kodeksu cywilnego.</p>
          
          <p><strong>Przysługuje Pani/Panu prawo do:</strong></p>
          <ul class="list-decimal pl-6 space-y-1 marker:text-foreground/60">
            <li>dostępu do swoich danych oraz otrzymania ich kopii;</li>
            <li>sprostowania (poprawiania) swoich danych osobowych;</li>
            <li>ograniczenia przetwarzania danych osobowych;</li>
            <li>usunięcia danych osobowych;</li>
            <li>wniesienia skargi do Prezesa UODO (na adres Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00 – 193 Warszawa).</li>
          </ul>
          
          <p><strong>Podanie przez Panią/Pana danych osobowych</strong> jest dobrowolne, jednakże niezbędne do wykonania umowy, bądź podjęcia działań przed zawarciem umowy.</p>
          
          <p>Pani/Pana dane nie będą przetwarzane w sposób zautomatyzowany w tym również w formie profilowania tzn. żadne decyzje wywołujące wobec osoby skutki prawne lub w podobny sposób na nią istotnie wpływające nie będą oparte wyłącznie na automatycznym przetwarzaniu danych osobowych i nie wiążą się z taką automatycznie podejmowaną decyzją.</p>
        </div>
      `
    },
    {
      id: "praca",
      title: "Dla osób ubiegających się o pracę",
      content: `
        <div class="space-y-4">
          <p>Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Dz. Urz. UE L 119/1 z 04.05.2016 r.), dalej jako „RODO", informujemy, że:</p>
          
          <p><strong>Administratorem Pani/Pana danych osobowych</strong> jest Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. z siedzibą w Krzykawie, gmina Bolesław, powiat olkuski, (32-329 Bolesław, Krzykawa 7). Aby skontaktować się z nami, wyślij wiadomość pod e-mail: arpad@arpad.pl lub zadzwoń pod numer tel. 501 439 752.</p>
          
          <p>We wszystkich kwestiach dotyczących danych osobowych można kontaktować się z Administratorem pisemnie, za pomocą poczty tradycyjnej na adres siedziby Spółki lub w formie elektronicznej na adres e-mail: arpad@arpad.pl</p>
          
          <p><strong>Pani/Pana dane osobowe będą przetwarzane na podstawie:</strong></p>
          <p><strong>a)</strong> art. 6 ust. 1 lit. a) RODO, na podstawie którego przetwarzanie jest dokonywane na podstawie zgody, w celu uczestnictwa kandydata w przyszłych rekrutacjach lub przekazania danych przez kandydata w przypadku nieprowadzenia postępowania rekrutacyjnego (rekrutacja nieplanowana) oraz przetwarzania przekazanych przez kandydata danych osobowych wykraczających poza zakres wynikający z art. 221§1 k.p.,</p>
          
          <p><strong>b)</strong> art. 9 ust. 2 lit. a) RODO, w którym przetwarzanie danych osobowych szczególnych kategorii jest dokonywane na podstawie zgody, w celu przetwarzania danych osobowych szczególnych kategorii załączonych przez kandydata w dokumentach rekrutacyjnych,</p>
          
          <p><strong>c)</strong> art.6 ust. 1 lit. c) RODO w którym przetwarzanie jest niezbędne dla wypełnienia obowiązku prawnego ciążącego na Administratorze, w celu przeprowadzenia procesu rekrutacji, wyboru kandydata na stanowisko pracy, podjęcia czynności zmierzających do zawarcia umowy o pracę,</p>
          
          <p><strong>d)</strong> 6 ust. 1 lit. f) RODO, w którym przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora, tj. do celu tworzenia formularzy oceny kandydata, przeprowadzenia testów kompetencyjnych.</p>
          
          <p><strong>Odbiorcami Pana/Pani danych</strong> mogą być, podmioty wykonujące usługi związane z przetwarzaniem danych osobowych na podstawie umowy, a także inne podmioty, którym Administrator jest zobowiązany lub upoważniony udostępnić na podstawie przepisów prawa.</p>
          
          <p><strong>Pani/Pana dane osobowe będą przechowywane</strong> do czasu zakończenia procesu rekrutacji na stanowisko pracy, na którego potrzeby przekazano dane osobowe lub do czasu cofnięcia zgody. W przypadku zgody na przetwarzanie danych osobowych w celu uczestnictwa w przyszłych rekrutacjach, dane osobowe będą przechowywane nie dłużej niż 12 m-cy lub do czasu cofnięcia zgody.</p>
          
          <p><strong>Przysługuje Pani/Panu prawo do:</strong></p>
          <ul class="list-disc pl-6 space-y-1 marker:text-foreground/60 ml-4">
            <li>cofnięcia zgody na przetwarzanie danych osobowych,</li>
            <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
            <li>sprostowania (poprawiania) swoich danych osobowych,</li>
            <li>ograniczenia przetwarzania danych osobowych,</li>
            <li>usunięcia danych osobowych,</li>
            <li>wniesienia sprzeciwu,</li>
            <li>przenoszenia danych osobowych,</li>
            <li>wniesienia skargi do Prezes UODO (na adres Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00 – 193 Warszawa).</li>
          </ul>
          
          <p>Zgoda na przetwarzanie danych osobowych może zostać cofnięta w dowolnym momencie w sytuacji gdy stanowi ona podstawę przetwarzania danych, co nie wpływa jednak na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.</p>
          
          <p><strong>Podanie przez Panią/Pana danych osobowych</strong> w zakresie wynikającym z art. 221¹ Kodeksu pracy jest niezbędne, aby uczestniczyć w postępowaniu rekrutacyjnym. Podanie przez Panią/Pana innych danych jest dobrowolne.</p>
          
          <p>Pani/Pana dane nie będą przetwarzane w sposób zautomatyzowany w tym również w formie profilowania tzn. żadne decyzje wywołujące wobec osoby skutki prawne lub w podobny sposób na nią istotnie wpływające nie będą oparte wyłącznie na automatycznym przetwarzaniu danych osobowych i nie wiążą się z taką automatycznie podejmowaną decyzją.</p>
        </div>
      `
    },
    {
      id: "zatrudnieni",
      title: "Dla osób zatrudnionych w spółce",
      content: `
        <div class="space-y-4">
          <p>Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Dz. Urz. UE L 119/1 z 04.05.2016 r.), dalej jako „RODO", informujemy, że:</p>
          
          <p><strong>Administratorem Pani/Pana danych osobowych</strong> jest Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. z siedzibą w Krzykawie, gmina Bolesław, powiat olkuski (32-329 Bolesław, Krzykawa 7).</p>
          
          <p>We wszystkich kwestiach dotyczących danych osobowych można kontaktować się z Administratorem pisemnie, za pomocą poczty tradycyjnej na adres siedziby Spółki lub w formie elektronicznej na adres e-mail: arpad@arpad.pl</p>
          
          <p><strong>Pani/Pana dane osobowe przetwarzane będą na podstawie:</strong></p>
          <p><strong>a)</strong> art. 6 ust. 1 lit. a) RODO, w którym to przetwarzanie jest dokonywane na podstawie udzielonej zgody, w celach: przekazywania informacji w sprawach związanych z zatrudnieniem, do przesyłania w formie elektronicznej informacji dot. wynagrodzenia oraz innych danych z obszaru spraw kadrowo – płacowych.</p>
          
          <p><strong>b)</strong> art. 6 ust. 1 lit. b) RODO, w którym to przetwarzanie jest niezbędne do zawarcia umowy lub do podjęcia działań zmierzających do zawarcia umowy, w celu:</p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>zawarcia, wykonania i zakończenia umowy o pracę,</li>
            <li>rozliczenia wynagrodzenia za pracę oraz świadczeń przysługujących pracownikowi w związku z zatrudnieniem,</li>
            <li>ustalenia lub dochodzenia roszczeń wynikających z zatrudnienia.</li>
          </ul>
          
          <p><strong>c)</strong> art. 6 ust. 1 lit. c) w zw. z art. 9 ust 2 lit. b) RODO w którym to przetwarzanie jest niezbędne do wypełnienia obowiązku ciążącego na Administratorze oraz wypełnienia obowiązków i wykonywania szczególnych praw przez Administratora w dziedzinie prawa pracy, zabezpieczenia społecznego i ochrony socjalnej, w celu:</p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>prowadzenie rozliczeń pracowników, naliczanie potrąceń, składek ZUS, podatku dochodowego od osób fizycznych,</li>
            <li>zapewnienia bezpieczeństwa pracowników,</li>
            <li>prowadzenie akt osobowych pracownika oraz innych dokumentów, ewidencji, kartotek, rejestrów gromadzonych przez pracodawcę, w celu realizacji obowiązków pracodawcy, w tym prowadzenia postępowań powypadkowych.</li>
          </ul>
          
          <p><strong>Odbiorcami Pani/Pana danych</strong> mogą być, podmioty wykonujące usługi związane z przetwarzaniem danych osobowych na podstawie umowy, a także inne podmioty i organy, którym Spółka jest zobowiązana lub upoważniona udostępnić na podstawie przepisów prawa lub w wykonaniu umowy.</p>
          
          <p><strong>Pani/Pana dane osobowe będą przechowywane</strong> przez ustalony we właściwych przepisach prawa okres przechowywania dokumentacji pracowniczej oraz okres wskazany przez inne przepisy szczególne, m.in. ustawy o rachunkowości, prawa podatkowego, prawa ubezpieczeń społecznych. Dane przekazane na podstawie udzielonej zgody będą przetwarzane do czasu cofnięcia zgody lub ustania celu ich przetwarzania.</p>
          
          <p><strong>Przysługuje Pani/Panu prawo do:</strong></p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>dostępu do swoich danych osobowych oraz do otrzymywania ich kopii,</li>
            <li>sprostowania (poprawiania) swoich danych osobowych,</li>
            <li>usunięcia swoich danych osobowych,</li>
            <li>ograniczenia przetwarzania danych osobowych lub usunięcia danych osobowych, chyba że zachodzi inna podstawa dalszego przechowywania danych,</li>
            <li>wniesienia skargi do Prezesa UODO (na adres Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa),</li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych, gdy przetwarzanie dokonywane jest na podstawie art. art. 6 ust. 1 lit. f) RODO,</li>
            <li>przenoszenia danych osobowych,</li>
            <li>prawo do wycofania zgody.</li>
          </ul>
          
          <p><strong>Podanie danych osobowych</strong> w zakresie wynikającym z przepisów prawa jest dobrowolne, a skutkiem ich niepodania będzie brak możliwości realizacji stosunku pracy. Podanie danych osobowych uzależnionych od zgody pracownika jest dobrowolne, jednakże brak ich podania skutkować będzie niemożliwością korzystania z rozwiązań wymagających uzyskania przez pracodawcę zgody od pracownika.</p>
          
          <p>Pani/Pana dane nie będą przetwarzane w sposób zautomatyzowany w tym również w formie profilowania tzn. żadne decyzje wywołujące wobec osoby skutki prawne lub w podobny sposób na nią istotnie wpływające nie będą oparte wyłącznie na automatycznym przetwarzaniu danych osobowych i nie wiążą się z taką automatycznie podejmowaną decyzją.</p>
        </div>
      `
    },
    {
      id: "dane-osobowe",
      title: "Przetwarzanie danych osobowych",
      content: `
        <div class="space-y-4">
          <div class="text-center mb-6">
            <h4 class="font-bold text-xl uppercase tracking-wide">KLAUZULA INFORMACYJNA</h4>
            <h5 class="font-semibold text-lg mt-2">dotycząca PRZETWARZANIA DANYCH OSOBOWYCH</h5>
            <p class="font-medium mt-2">w ramach działalności w zakresie przechowywania i udostępniania dokumentacji osobowej i płacowej</p>
          </div>
          
          <p>Zakład Obsługi Archiwalnej „ARPAD" Spółka z o.o. z siedzibą w Krzykawie gmina Bolesław prowadzi działalność w zakresie usług archiwistycznych, w tym również w zakresie przechowywania dokumentacji zlikwidowanych podmiotów gospodarczych.</p>
          
          <p>W dniu 21 grudnia 2005 r. Spółka uzyskała wpis do „Rejestru przechowawców akt osobowych i płacowych" prowadzonego przez Wojewodę Małopolskiego (pod numerem 10/05) jako przedsiębiorca prowadzący działalność w zakresie przechowywania dokumentacji osobowej i płacowej pracodawców o czasowym okresie przechowywania.</p>
          
          <p>Zakład Obsługi Archiwalnej „ARPAD" Spółka z o.o. prowadzi działalność w zakresie przechowywania dokumentacji osobowej i płacowej zgodnie Ustawą z dnia 14 lipca 1983 r. o narodowym zasobie archiwalnym i archiwach. Rozdział 4a. Działalność gospodarcza w zakresie przechowywania dokumentacji osobowej i płacowej pracodawców o czasowym okresie przechowywania (Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 13 grudnia 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o narodowym zasobie archiwalnym i archiwach. Dz. U. z 2020 r. poz. 164.)</p>
          
          <p>W trakcie działalności Spółki przetwarzane są dane osobowe w zakresie przechowywania dokumentacji pracowniczej (w tym osobowej i płacowej), wyszukiwania danych, sporządzania kopii, odpisów, wypisów dokumentów, udostępniania i przekazywania danych. Przetwarzanie danych odbywa się wyłącznie na podstawie pisemnego wniosku osoby, której dokumentacja dotyczy, osoby posiadającej prawnie uzasadniony interes w pozyskaniu danych (np. w przypadku konieczności uzyskania renty rodzinnej w związku ze śmiercią osoby, której dotyczą dane), a także na pisemne żądanie upoważnionych organów państwowych.</p>
          
          <p>Od 25 maja 2018 roku obowiązuje Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (określane jako "RODO", "ORODO", "GDPR" lub "Ogólne Rozporządzenie o Ochronie Danych"; Dz. Urz. UE L 119 z 04.05.2016).</p>
          
          <p>W związku z powyższym podajemy poniżej podstawowe informacje dotyczące przetwarzania danych osobowych w związku z wykonywaną działalnością w zakresie przechowywania zbiorów dokumentacji pracowniczej osobowej i płacowej.</p>
          
          <p><strong>Administratorem danych osobowych</strong> jest Zakład Obsługi Archiwalnej „ARPAD" Sp. z o.o. z siedzibą: Krzykawa 7, 32-329 Bolesław. Kontakt z Administratorem: arpad@arpad.pl</p>
          
          <p>Dokumentacja będąca źródłem danych osobowych jest przechowywana w budynku archiwum depozytowego</p>
          
          <p><strong>Dane osobowe będą przetwarzane</strong> w celu rozpoznania wniosku o udostępnienie lub przekazanie źródłowej dokumentacji pracowniczej (osobowej i płacowej) dotyczącej osoby ubiegającej się o uzyskanie informacji znajdujących się aktach wchodzących w skład zespołu aktowego wytworzonego przez zlikwidowany podmiot gospodarczy będący byłym pracodawcą osoby składającej wniosek, stanowiącego wyodrębnioną część zasobu dokumentacji przechowywanego w archiwum depozytowym prowadzonym przez Administratora. Dane są również przetwarzane na pisemne żądanie organów wymiaru sprawiedliwości, organów ścigania, Zakładu Ubezpieczeń Społecznych oraz innych organów emerytalno-rentowych.</p>
          
          <p><strong>Przetwarzane dane osobowe obejmują:</strong></p>
          <p><strong>a)</strong> Dane wynikające ze złożonego wniosku: okres zatrudnienia, charakter pracy, wykonywany zawód, stanowiska zajmowane w okresie zatrudnienia, okresy przebywania na urlopie bezpłatnym, wysokość wynagrodzenia otrzymanego w całym okresie zatrudnienia lub w okresie wskazanym w treści wniosku oraz inne dane dotyczące zakończonego stosunku pracy.</p>
          
          <p><strong>b)</strong> Dane niezbędne do prawidłowego i terminowego załatwienia wniosku: imię, drugie imię, nazwisko, nazwisko rodowe, imię ojca, data i miejsce urodzenia, numer PESEL, aktualny adres zamieszkania (lub adres do korespondencji), dane kontaktowe: numer telefonu, adres e-mail.</p>
          
          <p>Dane osobowe, o których mowa w punkcie 3 b mogą być przekazywane podmiotom przetwarzającym je na nasze zlecenie, np. podmiotom świadczącym usługi pocztowe, przewoźnikom, firmom kurierskim.</p>
          
          <p><strong>Osobom ubiegającym się o uzyskanie informacji przysługują prawa:</strong></p>
          <ul class="list-disc pl-6 space-y-1 ml-4 marker:text-foreground/60">
            <li>do uzyskania wyczerpujących informacji dotyczących: występowania przedmiotowych danych w zbiorach Administratora oraz adresie jego siedziby, celu, zakresu i sposobu przetwarzania danych zawartych w takim zbiorze, stanu od kiedy dane znajdują się w zbiorze i w związku z tym mogą podlegać przetwarzaniu, ewentualnym źródle pozyskania danych, sposobie udostępnienia lub przekazania danych, innych odbiorców, którym dane te są udostępniane,</li>
            <li>prawo dostępu do danych, w tym uzyskania kopii, odpisów, wypisów dokumentów osobowych i płacowych,</li>
            <li>prawo do wglądu w dokumentację dotyczącą danej osoby w siedzibie Administratora,</li>
            <li>prawo żądania sprostowania danych,</li>
            <li>prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych,</li>
            <li>prawo do ograniczenia przetwarzania danych,</li>
            <li>prawo do wycofania zgody na przetwarzanie danych w zakresie w jakim są przetwarzane na tej podstawie; wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem,</li>
            <li>prawo do przenoszenia danych osobowych, tj. do otrzymania od administratora danych osobowych, w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego,</li>
            <li>wniesienia skargi do Prezesa UODO (na adres Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00 – 193 Warszawa).</li>
          </ul>
          
          <p><strong>Dane osobowe będą przetwarzane:</strong></p>
          <p><strong>a)</strong> w sytuacji, gdy osoba, której dane dotyczą, wyraziła zgodę na przetwarzanie tych danych osobowych w jednym lub kilku konkretnych celach, ze szczególnym uwzględnieniem uzyskania informacji dotyczących stosunku pracy oraz wysokości wynagrodzenia,</p>
          
          <p><strong>b)</strong> do ochrony żywotnych interesów osoby, której dane dotyczą, lub innej osoby fizycznej (ze szczególnym uwzględnieniem osób spokrewnionych – małżonkowie, dzieci), a osoba, której dane dotyczą, jest fizycznie lub prawnie niezdolna do wyrażenia zgody (np. z powodu śmierci lub choroby skutkującej brakiem zdolności prawnej do wyrażenia zgody),</p>
          
          <p><strong>c)</strong> do ochrony żywotnych interesów osoby, której dane nie dotyczą, lecz która, ze względu na obowiązujące przepisy emerytalno-rentowe, ubiega się o przekazanie danych dotyczących wynagrodzenia innych osób, zatrudnionych na tym samym stanowisku, w okresie, gdy osoba ubiegająca się o przekazanie tych danych, była oddelegowana do pracy za granicą przez własnego pracodawcę lub przebywała na urlopie bezpłatnym w macierzystym zakładzie pracy związku z oddelegowaniem do pracy za granicą przez innego pracodawcę.</p>
          
          <p>Wyrażenie zgody na przetwarzanie danych osobowych następuje z chwilą złożenia przez osobę, której dane dotyczą, pisemnego wniosku w sprawie udostępnienia lub przekazania dotyczącej jej dokumentacji.</p>
          
          <p>Zgoda osoby, której dotyczą dane, nie jest wymagana w przypadku zaistnienia konieczności przetwarzania jej danych w związku z pisemnym żądaniem organów wymiaru sprawiedliwości, organów ścigania, Zakładu Ubezpieczeń Społecznych oraz innych organów emerytalno-rentowych.</p>
          
          <p><strong>Podanie danych osobowych</strong> jest dobrowolne, jednakże niezbędne do zrealizowania wniosku o udostępnienie lub przekazanie dokumentacji, bądź podjęcia innych działań niezbędnych do realizacji danego wniosku.</p>
          
          <p><strong>Dane osobowe pozyskane od osób</strong> zwracających się o udostępnienie lub przekazanie dokumentacji pracowniczej, w trakcie załatwiania ich wniosków, będą przechowywane przez okres 5 lat liczonych od 1 stycznia roku następnego po roku zakończenia załatwiania danej sprawy.</p>
          
          <p>Dane osobowe pozyskane w trakcie załatwiania wniosków o udostępnienie lub przekazanie dokumentacji pracowniczej nie będą przetwarzane w sposób zautomatyzowany, w tym również w formie profilowania, tzn. żadne decyzje wywołujące wobec osoby skutki prawne lub w podobny sposób na nią istotnie wpływające nie będą oparte wyłącznie na automatycznym przetwarzaniu danych osobowych i nie wiążą się z taką automatycznie podejmowaną decyzją.</p>
        </div>
      `
    }
  ];

  return (
    <main className="bg-background">
      <header className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <OnScrollAnimator>
          <div className="container px-4 md:px-6">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
              Klauzule informacyjne
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
              Informacje dotyczące przetwarzania danych osobowych w Zakładzie Obsługi Archiwalnej ARPAD
            </p>
          </div>
        </OnScrollAnimator>
      </header>

      <div className="container py-16 md:py-24 px-4 md:px-6">
        <OnScrollAnimator>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {klauzule.map((klauzula) => (
                <AccordionItem 
                  key={klauzula.id} 
                  value={klauzula.id}
                  className="border border-border rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-xl font-semibold text-primary font-headline">
                      {klauzula.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div 
                      className="prose prose-sm max-w-none text-foreground/80"
                      dangerouslySetInnerHTML={{ __html: klauzula.content }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </OnScrollAnimator>
      </div>
    </main>
  );
}