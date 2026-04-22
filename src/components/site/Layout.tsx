import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
