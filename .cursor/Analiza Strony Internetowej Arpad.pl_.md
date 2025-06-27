

# **Dokumentacja Techniczna i Merytoryczna Strony Internetowej Arpad.pl**

Niniejszy dokument stanowi kompleksową analizę i specyfikację techniczną strony internetowej dostępnej pod adresem https://www.arpad.pl/. Celem raportu jest stworzenie precyzyjnego planu (blueprint), który posłuży jako podstawa do odtworzenia w pełni funkcjonalnej i wizualnie analogicznej witryny. Analiza obejmuje architekturę informacji, strukturę podstron, zawartość tekstową oraz elementy graficzne.

## **Mapa Strony**

Poniższy diagram w składni Mermaid przedstawia hierarchiczną strukturę witryny, mapując relacje pomiędzy stroną główną, kluczowymi podstronami, zasobami oraz linkami zewnętrznymi. Ukazuje on, w jaki sposób użytkownik nawiguje po serwisie, uwzględniając zarówno główne menu, jak i linki w stopce oraz elementy interaktywne.

Fragment kodu

graph TD  
    A \--\> B\[O firmie /o-firmie/\]  
    A \--\> C\[Oferta /oferta-2/\]  
    A \--\> D\[Galeria /galeria/\]  
    A \--\> E{Kontakt \#kontakt}

    subgraph "Zasoby i Polityki (Stopka)"  
        F  
        G{Przechowalnictwo (Pop-up)}  
        H\[Pobierz wniosek (.doc) /wp-content/uploads/2023/01/Wniosek-o-wydanie-dokumentow.doc\]  
    end

    A \--\> F  
    A \--\> G  
    A \--\> H

    subgraph "Linki Zewnętrzne (Stopka)"  
        I\[Archiwa Państwowe\]  
        J\[Archiwa Państwowe \- dok. pracownicza\]  
        K  
        L  
    end

    A \--\> I  
    A \--\> J  
    A \--\> K  
    A \--\> L

    B \--\> M{Formularz Kontaktowy}  
    C \--\> N((Współdzielona treść z 'O firmie'))  
    B \--\> N

    style A fill:\#f9f,stroke:\#333,stroke-width:2px  
    style E fill:\#bbf,stroke:\#333,stroke-width:2px  
    style G fill:\#bbf,stroke:\#333,stroke-width:2px  
    style H fill:\#ccf,stroke:\#333,stroke-width:2px  
    style N fill:\#lightgrey,stroke:\#333,stroke-width:2px,stroke-dasharray: 5 5

## **Indeks Podstron**

Poniżej znajduje się indeks wszystkich zidentyfikowanych, unikalnych podstron i zasobów wchodzących w skład witryny. Każdy wpis zawiera nazwę oraz zwięzły opis jego podstawowego celu i zawartości.

* **Strona Główna (/)**: Pełni rolę głównego punktu wejścia do serwisu, prezentując syntetyczny przegląd usług, korzyści ze współpracy, kluczowe informacje o firmie oraz bezpośrednie opcje kontaktu.1  
* **O firmie (/o-firmie/)**: Stanowi obszerne kompendium wiedzy o firmie, zawierające jej historię, profil klientów, szczegółowe cenniki usług, pełną treść polityki RODO oraz wykaz firm, których dokumentacja jest przechowywana.2  
* **Oferta (/oferta-2/)**: Prezentuje szczegółowy katalog wszystkich usług archiwizacyjnych świadczonych przez firmę, powielając obszerne informacje o wycenie i listę klientów, które znajdują się również na stronie "O firmie".3  
* **Galeria (/galeria/)**: Wizualnie demonstruje wartość usług firmy poprzez narrację opartą na zdjęciach typu "przed i po" oraz na przykładach prawidłowo i nieprawidłowo sporządzonej dokumentacji ewidencyjnej.4  
* **RODO (/Rodo)**: Formalnie jest to dedykowany adres URL dla polityki prywatności, jednakże w praktyce treść tej polityki jest zaimplementowana jako powtarzalny blok tekstowy na podstronach "O firmie" oraz "Oferta".1  
* **Wniosek o wydanie dokumentów (.doc)**: Jest to zasób do pobrania w formacie Microsoft Word, umożliwiający klientom formalne złożenie wniosku o dostęp do zarchiwizowanych przez firmę dokumentów.1

## **Szczegółowa Analiza Kluczowych Podstron**

Ta sekcja zawiera granularną dekonstrukcję każdej z kluczowych podstron witryny. Opis obejmuje strukturę, treść tekstową, wezwania do działania (CTA) oraz wszystkie istotne elementy graficzne, tworząc kompletny plan dla procesu odtworzenia strony.

### **Strona Główna (/)**

Strona główna została zaprojektowana jako kompleksowa strona docelowa (landing page), która ma za zadanie szybko przedstawić ofertę firmy i skierować użytkownika do najważniejszych informacji oraz punktów konwersji. Jej architektura łączy cechy klasycznej strony wielostronicowej (MPA) z elementami typowymi dla aplikacji jednostronicowych (SPA), co jest kluczowe dla zachowania oryginalnego doświadczenia użytkownika.

#### **Struktura i Treść Tekstowa**

Strona jest podzielona na logiczne sekcje, ułożone wertykalnie.1

* **Sekcja 1: Nagłówek (Header)**  
  * **Układ:** Stały nagłówek na górze strony.  
  * **Elementy:**  
    * Logo ARPAD (link do strony głównej /).  
    * Główne menu nawigacyjne z pozycjami: "O firmie" (link do /o-firmie/), "Oferta" (link do /oferta-2/), "Galeria" (link do /galeria/), "Kontakt" (link kotwiczny do sekcji \#kontakt na tej samej stronie).  
  * **Funkcjonalność:** Link "Kontakt" inicjuje płynne przewijanie strony do sekcji kontaktowej, zamiast przeładowywać stronę. Jest to istotny detal funkcjonalny, który należy odtworzyć.  
* **Sekcja 2: Wprowadzenie (Hero)**  
  * **Nagłówek H2:** "Usługi archiwistyczne"  
  * **Paragraf:** Krótki tekst wprowadzający, informujący o świadczeniu usług archiwistycznych zgodnych z obowiązującymi normami i profesjonalnej obsłudze popartej wieloletnim doświadczeniem.  
* **Sekcja 3: Bloki informacyjne**  
  * **Układ:** Trzy kolumny obok siebie, każda poświęcona jednemu z kluczowych obszarów witryny.  
  * **Blok 1: "O NAS"**  
    * **Nagłówek:** "O NAS"  
    * **Paragraf:** Tekst opisujący firmę i jej doświadczenie.  
    * **CTA:** Przycisk z tekstem "więcej", linkujący do podstrony /o-firmie/.  
  * **Blok 2: "OFERTA"**  
    * **Nagłówek:** "OFERTA"  
    * **Paragraf:** Tekst wymieniający pełny zakres prac archiwistycznych.  
    * **CTA:** Przycisk z tekstem "więcej", linkujący do podstrony /oferta-2/.  
  * **Blok 3: "KONTAKT"**  
    * **Nagłówek:** "KONTAKT"  
    * **Paragraf:** Tekst zachęcający do kontaktu w celu uzyskania indywidualnej wyceny.  
    * **CTA:** Przycisk z tekstem "więcej", linkujący do sekcji \#kontakt na tej samej stronie.  
* **Sekcja 4: Twoje korzyści**  
  * **Nagłówek H2:** "Twoje korzyści"  
  * **Treść:** Lista punktowana wyjaśniająca korzyści płynące ze współpracy, takie jak: profesjonalne zarządzanie dokumentacją, zmniejszenie zatrudnienia, poprawa dostępności akt, zwiększenie bezpieczeństwa i zmniejszenie kosztów.  
* **Sekcja 5: Dlaczego warto skorzystać z Naszej oferty (Akordeon)**  
  * **Układ:** Interaktywny element typu akordeon, gdzie kliknięcie nagłówka rozwija ukrytą treść.  
  * **Elementy:**  
    1. **Nagłówek:** "Brak pośrednictwa i podwykonawców\!"  
    2. **Nagłówek:** "Materiały archiwizacyjne tj. pudła, teczki, klipsy..."  
    3. **Nagłówek:** "Własne narzędzia pracy"  
    4. **Nagłówek:** "Struktura organizacyjna"  
    5. **Nagłówek:** "Duże doświadczenie w branży archiwistycznej"  
  * **Funkcjonalność:** Każdy nagłówek jest klikalny i rozwija paragraf z dodatkowym opisem, co pozwala na skondensowanie dużej ilości informacji w przejrzystej formie.  
* **Sekcja 6: Kontakt**  
  * **Układ:** Główny obszar konwersji na stronie, zlokalizowany pod identyfikatorem \#kontakt.  
  * **Nagłówek H2:** "KONTAKT"  
  * **Dane kontaktowe:**  
    * Adres: Pełny adres firmy.  
    * Telefon: Dwa numery kontaktowe.  
    * Email: Adres e-mail w formie klikalnego linku mailto:.  
  * **Formularz Kontaktowy:**  
    * Pola: Imię, Nazwisko, Email, Wiadomość (textarea).  
    * Przycisk: "Wyślij".  
* **Sekcja 7: Stopka (Footer)**  
  * **Układ:** Dolna sekcja strony, zawierająca informacje prawne, dane firmy i linki pomocnicze.  
  * **Treść:**  
    * Logo ARPAD i pełna nazwa firmy.  
    * Dane rejestrowe: NIP, KRS, REGON.  
    * Informacja o prawach autorskich: "©2023. Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. Wszystkie prawa zastrzeżone".  
    * Linki: "RODO" (do /Rodo), "Przechowalnictwo" (uruchamia okno pop-up), "pobierz wniosek" (link do pliku .doc).  
    * Lista "Przydatne linki" do zewnętrznych stron rządowych i branżowych (Archiwa Państwowe, ZUS).  
    * Szczegółowy tekst dotyczący przestrzegania przepisów RODO.  
  * **Funkcjonalność:** Link "Przechowalnictwo" nie prowadzi do nowej strony, lecz wywołuje modalne okno (pop-up) z dodatkową treścią. Jest to kolejny kluczowy element funkcjonalny do odtworzenia.

#### **Opis Elementów Graficznych**

* **Logo ARPAD:** Stylizowana grafika z nazwą firmy, umieszczona w lewym górnym rogu nagłówka oraz w stopce.  
* **Ikony:** W sekcji "Twoje korzyści" mogą znajdować się proste ikony symbolizujące poszczególne benefity (np. tarcza dla bezpieczeństwa, wykres dla oszczędności). Należy je odtworzyć, aby zachować spójność wizualną.

### **O firmie (/o-firmie/)**

Podstrona "O firmie" wykracza daleko poza standardową prezentację. Funkcjonuje jako centralny dokument informacyjny, agregujący kluczowe dane handlowe, prawne i operacyjne. Jej struktura charakteryzuje się znaczną redundancją treści, co jest fundamentalną cechą architektury całej witryny.

#### **Struktura i Treść Tekstowa**

Strona jest w przeważającej mierze tekstowa, zorganizowana w długie, wertykalne bloki tematyczne.2

* **Sekcja 1: O firmie**  
  * **Nagłówek H2:** "O firmie"  
  * **Paragrafy:**  
    * "Spółka Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. od wielu lat z powodzeniem działa na rynku usług archiwistycznych. Została ona utworzona w 2005 r. na bazie istniejącej od 1993 r. firmy działającej pod nazwą: Zakład Usług Archiwistycznych – mgr Robert Chojowski kontynuując jej działalność w zakresie archiwizacji i przechowywania zasobów aktowych."  
    * "Naszymi klientami są spółki prawa handlowego, organy administracji państwowej i państwowe jednostki organizacyjne, w tym przedsiębiorstwa państwowe, organy administracji samorządu terytorialnego i samorządowe jednostki organizacyjne, spółdzielnie, stowarzyszenia oraz inne niepaństwowe jednostki organizacyjne (dalej zwane – organizacje)."  
    * "Usługi archiwistyczne wykonujemy zgodnie z obowiązującymi aktami normatywnymi dotyczącymi archiwów zakładowych, składnic akt, okresów przechowywania dokumentacji oraz metodyki archiwalnej, w oparciu o normatywy kancelaryjno-archiwalne oraz inne procedury dotyczące zarządzania dokumentacją wdrożone do stosowania w danej organizacji."  
* **Sekcja 2: Wykaz zlikwidowanych firm**  
  * **Nagłówek:** "Wykaz zlikwidowanych firm, których dokumentacja osobowa i płacowa jest przechowywana w naszym archiwum depozytowym"  
  * **Treść:** Bardzo długa, wieloliniowa lista nazw firm. Pełni ona funkcję dowodu społecznego (social proof) oraz jest kluczowym zasobem dla osób poszukujących dokumentacji pracowniczej. Lista ta jest powtórzona w dalszej części strony pod nagłówkiem "Przechowalnictwo". Przykładowe pozycje to: "Przedsiębiorstwo Produkcyjno-Handlowe "ORION" Spółka z o. o. w upadłości w Tarnowskich Górach", "Firma "FALA" Sp. z o. o. Delikatesowe Przetwory z Ryb w upadłości w Chrzanowie", "UNIVEX S.A. w upadłości w Krakowie (również akta UNIVEX Sp. z o. o. i UNIVEX Co)". Pełna lista musi zostać zaimplementowana zgodnie z oryginałem.  
* **Sekcja 3: Wycena usługi i Informacja handlowa**  
  * **Nagłówki:** "wycena usługi", "informacja handlowa dotycząca usług archiwizacji i przechowywania dokumentacji zlikwidowanych firm"  
  * **Treść:** Ta sekcja zawiera niezwykle szczegółowy opis metodologii wyceny usług, definicje jednostek miary (mb, m3, j.a.) oraz przedziały cenowe dla różnych kategorii dokumentacji. Tekst ten jest identyczny z treścią znajdującą się na podstronie "Oferta". Ze względu na jego złożoność, został on ustrukturyzowany w formie tabeli w analizie podstrony "Oferta". Ta sekcja jest powtórzona w całości w dalszej części tej samej strony, co jest przykładem wewnętrznej redundancji.  
* **Sekcja 4: RODO**  
  * **Nagłówek:** "RODO"  
  * **Treść:** Pełny, dosłowny tekst polityki RODO firmy. Obejmuje on informacje o Inspektorze Ochrony Danych, podstawach prawnych przetwarzania danych, środkach bezpieczeństwa (np. szyfrowanie nośników), prawach osób, których dane dotyczą, oraz okresach retencji. Tekst ten jest również powtórzony w dalszej części strony. Brzmi on: "W Zakładzie Obsługi Archiwalnej ARPAD Sp. z o.o. kwestie przestrzegania przepisów RODO, z racji charakteru wykonywanych usług, są objęte szczególnym priorytetem...".  
* **Sekcja 5: Kontakt**  
  * **Nagłówek H2:** "napisz do nas"  
  * **Treść:** Zawiera pełne dane teleadresowe (adres, dwa numery telefonu, e-mail) oraz formularz kontaktowy identyczny jak na stronie głównej.

#### **Opis Elementów Graficznych**

Strona jest niemal w całości pozbawiona elementów graficznych, poza standardowym logo w nagłówku. Ten ascetyczny charakter wizualny podkreśla jej funkcję jako gęstego, merytorycznego dokumentu, a nie marketingowej wizytówki.

#### **Kluczowe Obserwacje Architektoniczne**

Analiza tej podstrony ujawnia fundamentalną cechę całej witryny: systemową duplikację treści. Identyczne bloki informacyjne (cennik, lista firm, polityka RODO) znajdują się nie tylko na tej i na innych podstronach, ale są również powtarzane w obrębie tej samej strony. Wskazuje to na architekturę opartą na kopiowaniu i wklejaniu treści, a nie na zarządzaniu nią z jednego, centralnego źródła. Aby wiernie odtworzyć witrynę, konieczne jest zreplikowanie tej redundancji, tworząc obie strony (/o-firmie/ i /oferta-2/) i wypełniając je tymi samymi, powielonymi blokami treści.

### **Oferta (/oferta-2/)**

Strona "Oferta" pełni funkcję głównego katalogu usług firmy. Jej zawartość w dużej mierze pokrywa się z komercyjnymi i informacyjnymi sekcjami strony "O firmie", co potwierdza problem braku normalizacji danych w architekturze witryny.

#### **Struktura i Treść Tekstowa**

Strona prezentuje listę usług, a następnie powiela szczegółowe informacje o wycenie i przechowywaniu.3

* **Sekcja 1: Lista Usług**  
  * **Nagłówek:** Brak wyraźnego nagłówka, treść zaczyna się od listy.  
  * **Treść:** Wypunktowana lista świadczonych usług, obejmująca m.in.:  
    1. Organizacja i zakładanie archiwów zakładowych.  
    2. Opracowywanie normatywów kancelaryjno-archiwalnych.  
    3. Bieżąca obsługa archiwów.  
    4. Szkolenia dla pracowników.  
    5. Wdrażanie systemów elektronicznych.  
    6. Opracowanie archiwalne zasobów aktowych.  
    7. Przygotowywanie materiałów do przekazania do archiwów państwowych.  
    8. Przekazywanie akt do archiwów depozytowych.  
    9. Przechowywanie akt (w tym dokumentacji pracowniczej).  
    10. Brakowanie i niszczenie dokumentacji.  
    11. Inne usługi związane z działalnością archiwów.  
    12. Pogotowie Archiwistyczne.  
* **Sekcja 2: Wycena usługi**  
  * **Treść:** Ta sekcja zawiera identyczny, szczegółowy opis metodologii wyceny i cennik, który znajduje się na stronie "O firmie". W celu zapewnienia przejrzystości i ułatwienia maszynowego przetwarzania, te dane zostały przedstawione w poniższej tabeli.

**Tabela 1: Cennik Usług Archiwizacyjnych (ceny netto)**

| Usługa / Kategoria Dokumentacji | Jednostka Miary | Cena Jednostkowa (PLN) |
| :---- | :---- | :---- |
| **Dokumentacja Aktowa** |  |  |
| Kat. „B10–B5–B3-B2” (finansowo-księgowa, itp.) \- opracowanie | za 1 mb | od 49,00 do 99,00 |
| Kat. „B10–B5–B3-B2” \- weryfikacja i brakowanie | za 1 mb | od 25,00 do 40,00 |
| Kat. „B10–B5–B3-B2” \- weryfikacja, brakowanie i zniszczenie | za 1 mb | od 28,00 do 45,00 |
| **Dokumentacja Pracownicza** |  |  |
| Kat. „B50-B10-B5” (płacowa \- listy płac) | za 1 mb | od 90,00 do 135,00 |
| Kat. „B50-B10-B5” (płacowa \- karty wynagrodzeń) | za 1 mb | od 150,00 do 220,00 |
| Kat. „B50-B10-B5” (płacowa \- założenie teczki) | za 1 teczkę | od 3,60 do 5,30 |
| Kat. „BE50-B50” (osobowa) | za 1 teczkę osobową | od 2,50 do 7,50 |
| **Dokumentacja Specjalistyczna** |  |  |
| Kat. „B25” (założycielska, prawna \- w podmiotach niepaństwowych) | za 1 mb | od 180,00 do 270,00 |
| Kat. „A” (materiały archiwalne do arch. państwowego) | za 1 mb | od 500,00 do 750,00 |
| Kat. „BE5-B5” (inwestycje i remonty) | za 1 mb | od 120,00 do 160,00 |
| **Dokumentacja Techniczna** |  |  |
| Inwestycyjna Kat. „A–B25” | za 1 mb | od 260,00 do 340,00 |
| Inwestycyjna Kat. „BE5-B5” | za 1 mb | od 170,00 do 240,00 |
| Konstrukcyjna/Technologiczna Kat. „B” | za 1 mb | od 140,00 do 190,00 |
| Geologiczna/Górnicza | za 1 mb | od 200,00 do 260,00 |
| **Prace Dodatkowe** |  |  |
| Prace na godziny (przenoszenie, nadzór, itp.) | za 1 godzinę roboczą | od 24,00 do 29,00 |
| Odtwarzanie dokumentów osobowych | za 1 teczkę | od 5,50 do 8,50 |
| Odtwarzanie dokumentów płacowych | za 1 rok / zaśw. | od 4,00 do 6,50 |

* **Sekcja 3: Przechowalnictwo**  
  * **Treść:** Ta sekcja zawiera informacje o usługach przechowywania dokumentacji zlikwidowanych firm oraz powiela tę samą, długą listę firm, która znajduje się na stronie "O firmie".3  
  * **Cennik:** Poniżej przedstawiono cennik usług przechowywania w formie tabeli.

**Tabela 2: Cennik Usług Przechowywania (ceny netto)**

| Kategoria Dokumentacji | Okres Przechowywania | Model Cenowy | Przykładowy Koszt Całkowity |
| :---- | :---- | :---- | :---- |
| Pracownicza osobowa kat. „B50” | do 50 lat | 0,23 zł za 1 teczkę x ilość lat | do 11,50 zł za 1 teczkę |
| Pracownicza płacowa kat. „B50” | do 50 lat | 33,00 zł za 1 mb x ilość lat | do 1650,00 zł za 1 mb |
| Akta kat. „B25” | do 25 lat | 33,00 zł za 1 mb x ilość lat | do 825,00 zł za 1 mb |
| Akta kat. „B10” | do 10 lat | 33,00 zł za 1 mb x ilość lat | do 330,00 zł za 1 mb |
| Akta kat. „B5” | do 5 lat | 33,00 zł za 1 mb x ilość lat | do 165,00 zł za 1 mb |

#### **Opis Elementów Graficznych**

Podobnie jak strona "O firmie", podstrona "Oferta" jest wysoce tekstowa i pozbawiona dedykowanych elementów graficznych, co skupia uwagę użytkownika wyłącznie na merytorycznej treści.

### **Galeria (/galeria/)**

Strona "Galeria" wykorzystuje prostą, ale wysoce efektywną strategię komunikacji wizualnej. Zamiast prezentować portfolio w formie standardowej siatki zdjęć, buduje narrację opartą na kontraście, która w bezpośredni sposób komunikuje wartość dodaną usług firmy.

#### **Struktura i Treść Tekstowa**

Układ strony jest prosty i wertykalny. Treść tekstowa ogranicza się do nagłówków poszczególnych sekcji wizualnych.4

* **Nagłówek:** "Przed archiwizacją"  
* **Nagłówek:** "Po archiwizacji"  
* **Nagłówek:** "Poprawny spis zdawczo odbiorczy wykonany przez Nas"  
* **Nagłówek:** "Przykład złego spisu"

#### **Opis Elementów Graficznych**

* **Pary Obrazów "Przed/Po"**  
  * **Układ:** Na stronie znajdują się trzy pary zdjęć. Każda para składa się z dwóch obrazów umieszczonych obok siebie, ilustrujących stan dokumentacji przed i po interwencji firmy.  
  * **Obraz "Przed archiwizacją" (lewa strona):** Zdjęcia konsekwentnie przedstawiają chaos. Widoczne są stosy nieuporządkowanych dokumentów, luźno rzuconych na półki, w otwartych i zniszczonych pudłach. Papiery są pozaginane, nieposegregowane i nieopisane, co wizualizuje problem, z którym borykają się klienci.  
  * **Obraz "Po archiwizacji" (prawa strona):** Zdjęcia te demonstrują transformację i porządek. Te same dokumenty są teraz starannie ułożone w jednolitych, jasnych teczkach i pudłach archiwizacyjnych. Każda jednostka jest wyraźnie opisana czytelną etykietą, a całość jest równo ustawiona na czystych regałach. Obrazy te komunikują profesjonalizm, bezpieczeństwo i łatwość dostępu do informacji.  
* **Obrazy Porównawcze Spisów**  
  * **Układ:** Poniżej par "przed/po" znajdują się dwa pojedyncze zdjęcia dokumentów.  
  * **Obraz "Poprawny spis zdawczo odbiorczy wykonany przez Nas":** Przedstawia wzorowo przygotowany dokument ewidencyjny. Jest to wydruk komputerowy o przejrzystej, tabelarycznej strukturze. Widoczne są czytelne kolumny z nagłówkami takimi jak "sygnatura", "tytuł teczki", "daty skrajne", "kategoria archiwalna". Dane są wpisane konsekwentnie i dokładnie, co świadczy o zgodności z normami i profesjonalizmie.  
  * **Obraz "Przykład złego spisu":** Ukazuje dokument będący antytezą profesjonalizmu. Jest on chaotyczny, być może wypełniony odręcznie, z nieczytelnym pismem, skreśleniami i brakiem kluczowych informacji. Struktura jest niekonsekwentna, co wizualizuje ryzyko i problemy wynikające z nieprawidłowego ewidencjonowania dokumentacji.

Narracyjna struktura galerii – od problemu (chaos) do rozwiązania (porządek) oraz od amatorstwa (zły spis) do profesjonalizmu (dobry spis) – jest kluczowym elementem perswazyjnym strony. Odtworzenie tej strony wymaga nie tylko umieszczenia zdjęć, ale zreplikowania tej właśnie narracji wizualnej.

### **Kontakt (Sekcja na Stronie Głównej)**

Witryna nie posiada dedykowanej podstrony kontaktowej. Zamiast tego, wszystkie funkcje kontaktowe są skonsolidowane w sekcji na stronie głównej, dostępnej pod kotwicą \#kontakt, co upraszcza ścieżkę użytkownika do konwersji.

#### **Struktura i Treść Tekstowa**

Analiza bazuje na sekcji kontaktowej zidentyfikowanej na stronie głównej.1

* **Nagłówek H2:** "KONTAKT"  
* **Dane kontaktowe:**  
  * **Adres:** "Krzykawa 7, 32-329 Bolesław, małopolskie, Polska"  
  * **Telefon:** "+48 32 6424780", "+48 501 439 752"  
  * **Email:** "arpad@arpad.pl" (w formie linku mailto:)  
* **Formularz Kontaktowy:**  
  * **Pole (Input, typ text):** Etykieta "Imię"  
  * **Pole (Input, typ text):** Etykieta "Nazwisko"  
  * **Pole (Input, typ email):** Etykieta "Email"  
  * **Pole (Textarea):** Etykieta "Wiadomość"  
  * **Przycisk (Button, typ submit):** Tekst "Wyślij"

#### **Opis Elementów Graficznych**

Sekcja ta jest przede wszystkim funkcjonalna. Potencjalne elementy graficzne ograniczają się do małych ikon (np. ikona telefonu, koperty) umieszczonych obok odpowiednich danych kontaktowych w celu poprawy czytelności.

### **RODO (/Rodo)**

Podejście witryny do prezentacji polityki RODO jest kolejnym przykładem jej specyficznej architektury informacyjnej. Mimo istnienia dedykowanego linku /Rodo w stopce, faktyczna treść polityki nie jest hostowana na osobnej stronie, lecz zaimplementowana jako powtarzalny blok treści.

#### **Struktura i Treść Tekstowa**

Treść polityki RODO została zidentyfikowana jako integralna część podstron "O firmie" oraz "Oferta".2

* **Nagłówek:** "RODO"  
* **Treść:** Pełna treść polityki jest wielokrotnie powielana. Kluczowe punkty zawarte w tekście to:  
  * Stwierdzenie, że kwestie RODO są priorytetem ze względu na charakter usług (przetwarzanie danych osobowych w dokumentacji).  
  * Informacja o powołaniu Inspektora Ochrony Danych i wdrożeniu Polityki Ochrony Danych Osobowych.  
  * Zapewnienie o przetwarzaniu danych zgodnie z przepisami RODO, z zachowaniem przejrzystości i bezpieczeństwa.  
  * Opis środków bezpieczeństwa, w tym przechowywanie danych na szyfrowanych nośnikach.  
  * Procedura informowania zleceniodawcy w przypadku naruszenia ochrony danych.  
  * Zastrzeżenie prawa do ujawnienia informacji właściwym organom na podstawie przepisów prawa.  
  * Określenie, że okres przetwarzania danych zależy od rodzaju umowy i że po jego upływie dane są nieodwracalnie usuwane.

#### **Opis Elementów Graficznych**

Brak. Sekcja ta ma charakter czysto tekstowy i prawny.

#### **Kluczowe Obserwacje Architektoniczne**

Implementacja polityki RODO jako osadzonego, powielanego bloku treści, a nie jako samodzielnej, linkowanej strony, jest spójna z ogólnym wzorcem architektonicznym witryny. Link /Rodo w stopce może być niefunkcjonalny lub stanowić pozostałość po wcześniejszym projekcie. W procesie odtworzenia należy zreplikować ten stan, umieszczając pełny tekst polityki jako integralną część stron /o-firmie/ i /oferta-2/. Dla poprawy przyszłej architektury, link /Rodo mógłby zostać przekierowany do kotwicy na jednej z tych stron (np. /o-firmie/\#rodo).

#### **Cytowane prace**

1. ARPAD: Home, otwierano: czerwca 22, 2025, [https://www.arpad.pl/](https://www.arpad.pl/)  
2. O firmie \- ARPAD, otwierano: czerwca 22, 2025, [https://www.arpad.pl/o-firmie/](https://www.arpad.pl/o-firmie/)  
3. Oferta \- ARPAD, otwierano: czerwca 22, 2025, [https://www.arpad.pl/oferta-2/](https://www.arpad.pl/oferta-2/)  
4. Galeria \- ARPAD, otwierano: czerwca 22, 2025, [https://www.arpad.pl/galeria/](https://www.arpad.pl/galeria/)