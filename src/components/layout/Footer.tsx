import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-headline font-semibold text-white">ARPAD Sp. z o.o.</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Zakład Obsługi Archiwalnej
            </p>
            <div className="mt-4 text-xs space-y-1 text-primary-foreground/60">
              <p>NIP: 637-205-99-78</p>
              <p>KRS: 0000241894</p>
              <p>REGON: 120114890</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-white">Nawigacja</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Strona Główna</Link></li>
              <li><Link href="/o-firmie" className="text-primary-foreground/80 hover:text-accent transition-colors">O firmie</Link></li>
              <li><Link href="/oferta" className="text-primary-foreground/80 hover:text-accent transition-colors">Oferta</Link></li>
              <li><Link href="/galeria" className="text-primary-foreground/80 hover:text-accent transition-colors">Galeria</Link></li>
              <li><Link href="/kontakt" className="text-primary-foreground/80 hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-white">Informacje i Linki</h3>
             <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/o-firmie#rodo" className="text-primary-foreground/80 hover:text-accent transition-colors">Polityka RODO</Link>
              </li>
              <li>
                <Link href="/oferta#przechowalnictwo" className="text-primary-foreground/80 hover:text-accent transition-colors">Przechowalnictwo</Link>
              </li>
              <li>
                <a href="/Wniosek-o-wydanie-dokumentow.docx" className="text-primary-foreground/80 hover:text-accent transition-colors" download>Wniosek o wydanie dokumentów</a>
              </li>
              <li><a href="https://www.archiwa.gov.pl/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">Archiwa Państwowe</a></li>
              <li><a href="https://e-kartoteka.net/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">Baza zlikwidowanych zakładów pracy</a></li>
              <li><a href="https://www.zus.pl/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">Zakład Ubezpieczeń Społecznych</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-headline font-semibold text-white">Kontakt</h3>
             <div className="mt-4 text-sm space-y-2">
               <p className="text-primary-foreground/80">Krzykawa 7<br />32-329 Bolesław</p>
                <p>
                 <span className="text-primary-foreground/60 mr-1">Tel:</span>
                 <a href="tel:+48326424780" className="text-primary-foreground/80 hover:text-accent transition-colors">+48 32 642 47 80</a>
               </p>
                <p>
                 <span className="text-primary-foreground/60 mr-1">Kom:</span>
                 <a href="tel:+48501439752" className="text-primary-foreground/80 hover:text-accent transition-colors">+48 501 439 752</a>
               </p>
               <p>
                 <span className="text-primary-foreground/60 mr-1">Email:</span>
                 <a href="mailto:arpad@arpad.pl" className="text-primary-foreground/80 hover:text-accent transition-colors">arpad@arpad.pl</a>
               </p>
             </div>
           </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>©{new Date().getFullYear()}. Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. Wszystkie prawa zastrzeżone.</p>
           <p className="mt-2">Zapraszamy serdecznie do korzystania z naszych usług.</p>
        </div>
      </div>
    </footer>
  );
}
