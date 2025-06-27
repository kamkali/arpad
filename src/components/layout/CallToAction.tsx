import OnScrollAnimator from "@/components/OnScrollAnimator";
import ContactDetails from "@/components/layout/ContactDetails";

interface CallToActionProps {
  title: string;
  description: string;
}

export default function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section id="kontakt" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <OnScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-primary">
              {title}
            </h2>
            <p className="mt-4 text-lg text-foreground/70">{description}</p>
          </div>
        </OnScrollAnimator>
        <ContactDetails />
      </div>
    </section>
  );
} 