import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import OnScrollAnimator from "@/components/OnScrollAnimator";

export default function KontaktPage() {
  return (
    <div className="bg-background">
      <header className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <OnScrollAnimator>
            <div className="container px-4 md:px-6">
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
                    Skontaktuj się z nami
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                    Masz pytania lub potrzebujesz indywidualnej wyceny? Jesteśmy tutaj, aby pomóc. Wypełnij formularz lub skorzystaj z danych poniżej.
                </p>
            </div>
        </OnScrollAnimator>
      </header>

      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <OnScrollAnimator>
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold font-headline text-primary">Dane Kontaktowe</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 text-lg">
                       <div className="flex items-start gap-4">
                            <div className="bg-accent/10 rounded-full p-3 text-accent mt-1">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Adres</h3>
                                <div className="text-foreground/80">
                                    <p>Krzykawa 7</p>
                                    <p>32-329 Bolesław</p>
                                </div>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                             <div className="bg-accent/10 rounded-full p-3 text-accent mt-1">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Telefon</h3>
                                <div className="flex flex-col text-foreground/80">
                                    <a href="tel:+48326424780" className="hover:text-accent transition-colors">
                                        <span className="font-medium text-foreground/60 mr-2">Tel:</span>+48 32 642 47 80
                                    </a>
                                    <a href="tel:+48501439752" className="hover:text-accent transition-colors">
                                        <span className="font-medium text-foreground/60 mr-2">Kom:</span>+48 501 439 752
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="bg-accent/10 rounded-full p-3 text-accent mt-1">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <div className="text-foreground/80">
                                    <a href="mailto:arpad@arpad.pl" className="hover:text-accent transition-colors">arpad@arpad.pl</a>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </OnScrollAnimator>
             <OnScrollAnimator delay={0.2}>
                <ContactForm />
            </OnScrollAnimator>
        </div>
      </div>
    </div>
  );
}
