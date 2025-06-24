import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import OnScrollAnimator from "@/components/OnScrollAnimator";
import Link from 'next/link';

export default function ContactDetails() {
  return (
    <div className="flex flex-col items-center text-center gap-16">
        <OnScrollAnimator>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-4 text-primary mt-1">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Adres</h3>
                            <div className="text-lg text-foreground/80 mt-2">
                                <p>Krzykawa 7</p>
                                <p>32-329 Bolesław</p>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                         <div className="bg-primary/10 rounded-full p-4 text-primary mt-1">
                            <Phone className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Telefon</h3>
                            <div className="flex flex-col text-lg text-foreground/80 mt-2 space-y-2">
                                <a href="tel:+48326424780" className="font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                                    +48 32 642 47 80
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a href="tel:+48501439752" className="font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                                    +48 501 439 752
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="bg-primary/10 rounded-full p-4 text-primary mt-1">
                            <Mail className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Email</h3>
                            <div className="text-lg text-foreground/80 mt-2">
                                <a href="mailto:arpad@arpad.pl" className="font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                                    arpad@arpad.pl
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OnScrollAnimator>
        
        <OnScrollAnimator delay={0.2}>
            <div className="mt-8 md:mt-12">
                 <Link href="mailto:arpad@arpad.pl"
                    className="inline-block bg-accent text-accent-foreground py-6 px-12 text-2xl font-bold font-headline rounded-full hover:bg-accent/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                     Napisz do nas maila
                 </Link>
            </div>
        </OnScrollAnimator>
    </div>
  );
}
