import { redirect } from 'next/navigation';
import { Metadata } from "next";
import OnScrollAnimator from "@/components/OnScrollAnimator";

export const metadata: Metadata = {
  title: "Rodo",
};

export default function RodoPage() {
  redirect('/o-firmie#rodo');
  return null;
}
