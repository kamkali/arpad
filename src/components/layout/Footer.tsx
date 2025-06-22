"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white font-headline">ARPAD Sp. z o.o.</h3>
            <p className="mt-2 text-sm">
              Zakład Obsługi Archiwalnej
            </p>
            <div className="mt-4 text-xs space-y-1">
              <p>NIP: 6372061320</p>
              <p>KRS: 0000236049</p>
              <p>REGON: 120067644</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-headline">Informacje</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/o-firmie#rodo" className="hover:text-primary transition-colors">RODO</Link>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-slate-300 hover:text-primary transition-colors">Przechowalnictwo</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl bg-background text-foreground">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-primary">Informacja handlowa dotycząca usług przechowywania dokumentacji</DialogTitle>
                    </DialogHeader>
                    <div className="prose max-w-none text-sm text-foreground/80">
                      <p>Oferujemy profesjonalne usługi przechowywania dokumentacji zlikwidowanych firm, zapewniając bezpieczeństwo i zgodność z przepisami.</p>
                      <h4 className="font-bold mt-4">Cennik (ceny netto)</h4>
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
                          <TableRow>
                            <TableCell>Pracownicza osobowa kat. „B50”</TableCell>
                            <TableCell>do 50 lat</TableCell>
                            <TableCell>0,23 zł za 1 teczkę x ilość lat</TableCell>
                            <TableCell>do 11,50 zł za 1 teczkę</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Pracownicza płacowa kat. „B50”</TableCell>
                            <TableCell>do 50 lat</TableCell>
                            <TableCell>33,00 zł za 1 mb x ilość lat</TableCell>
                            <TableCell>do 1650,00 zł za 1 mb</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Akta kat. „B25”</TableCell>
                            <TableCell>do 25 lat</TableCell>
                            <TableCell>33,00 zł za 1 mb x ilość lat</TableCell>
                            <TableCell>do 825,00 zł za 1 mb</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Akta kat. „B10”</TableCell>
                            <TableCell>do 10 lat</TableCell>
                            <TableCell>33,00 zł za 1 mb x ilość lat</TableCell>
                            <TableCell>do 330,00 zł za 1 mb</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Akta kat. „B5”</TableCell>
                            <TableCell>do 5 lat</TableCell>
                            <TableCell>33,00 zł za 1 mb x ilość lat</TableCell>
                            <TableCell>do 165,00 zł za 1 mb</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <a href="/wp-content/uploads/2023/01/Wniosek-o-wydanie-dokumentow.doc" className="hover:text-primary transition-colors" download>Pobierz wniosek</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-headline">Przydatne linki</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="https://www.archiwa.gov.pl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Archiwa Państwowe</a></li>
              <li><a href="https://www.zus.pl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Zakład Ubezpieczeń Społecznych</a></li>
              <li><a href="https://e-kartoteka.net/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Archiwa Państwowe - dok. pracownicza</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-bold text-white font-headline">Kontakt</h3>
             <div className="mt-4 text-sm space-y-2">
               <p>Krzykawa 7<br />32-329 Bolesław</p>
               <p>
                 <a href="tel:+48326424780" className="hover:text-primary transition-colors">+48 32 6424780</a>
               </p>
               <p>
                 <a href="mailto:arpad@arpad.pl" className="hover:text-primary transition-colors">arpad@arpad.pl</a>
               </p>
             </div>
           </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>©{new Date().getFullYear()}. Zakład Obsługi Archiwalnej ARPAD Spółka z o.o. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
