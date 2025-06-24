import OnScrollAnimator from "@/components/OnScrollAnimator";
import ContactDetails from "@/components/layout/ContactDetails";

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
                    Masz pytania lub potrzebujesz indywidualnej wyceny? Jesteśmy tutaj, aby pomóc. Czekamy na Twój telefon lub e-mail.
                </p>
            </div>
        </OnScrollAnimator>
      </header>

      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary">Dane Kontaktowe</h2>
        </div>
        <ContactDetails />
      </div>
    </div>
  );
}
