"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  lastName: z.string().min(2, {
    message: "Nazwisko musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Proszę podać poprawny adres email.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy wkrótce.",
      variant: "default"
    });
    form.reset();
  }

  return (
    <Card className="border-border/50 bg-card shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Napisz do nas</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Imię</FormLabel>
                    <FormControl>
                        <Input placeholder="Jan" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Nazwisko</FormLabel>
                    <FormControl>
                        <Input placeholder="Kowalski" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jan.kowalski@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wiadomość</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Twoja wiadomość..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Wyślij</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
