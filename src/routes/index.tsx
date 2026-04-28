import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-desserts.jpg";
import aboutImg from "@/assets/about-baking.jpg";
import logoImg from "@/assets/sweet-crumbs-logo.jpg";
import { Button } from "@/components/ui/button";
import {
  Cake,
  Cookie,
  Heart,
  Sparkles,
  ShieldCheck,
  Gift,
  Star,
  MessageCircle,
  Facebook,
  Instagram,
  MapPin,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sweet Crumbs — Homemade Desserts in Bangladesh" },
      {
        name: "description",
        content:
          "Sweet Crumbs is a cozy home-based dessert shop in Bangladesh — fresh brownies, cookies, cheesecake, chocolate cake & customized cakes baked with love.",
      },
      { property: "og:title", content: "Sweet Crumbs — Homemade Desserts" },
      {
        property: "og:description",
        content: "Brownies, cookies, cheesecake & custom cakes baked fresh with love in Bangladesh.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/8801000000000?text=Hi%20Sweet%20Crumbs!%20I'd%20like%20to%20place%20an%20order.";
const FACEBOOK_URL = "https://www.facebook.com/sweet_crumbs";
const INSTAGRAM_URL = "https://instagram.com/sweetcrumbs";

const menu = [
  { name: "Fudgy Brownies", price: "150", unit: "per piece", icon: Cake },
  { name: "Soft Cookies", price: "110", unit: "per piece", icon: Cookie },
  { name: "Chocolate Cake Slice", price: "220", unit: "per slice", icon: Cake },
  { name: "Cheesecake Slice", price: "300", unit: "per slice", icon: Cake },
  { name: "Chocolate Cake — 1 lb", price: "1500", unit: "whole cake", icon: Cake },
  { name: "Cheesecake — 1 lb", price: "2200", unit: "whole cake", icon: Cake },
  { name: "Customized Cakes", price: "—", unit: "price on design", icon: Sparkles, custom: true },
];

const reasons = [
  { icon: Heart, title: "Fresh & Homemade", text: "Baked in small batches the day of delivery — never frozen, never mass-produced." },
  { icon: Sparkles, title: "Premium, Affordable", text: "Bakery-quality ingredients at prices that make sweet moments easy." },
  { icon: Cake, title: "Customized Orders", text: "Tell us your vision — themes, colors, flavors. We make it happen." },
  { icon: ShieldCheck, title: "Hygienic Prep", text: "Spotless home kitchen, gloves, sealed packaging from oven to door." },
  { icon: Gift, title: "Beautiful Packaging", text: "Every box is dressed up with ribbon & care — gift-ready, photo-ready." },
];

const specials = [
  { icon: Cake, title: "Birthday Cakes", text: "Custom-designed cakes for the people who matter most." },
  { icon: Sparkles, title: "Party Orders", text: "Dessert tables, mini bites & sharing platters for any celebration." },
  { icon: Gift, title: "Office Orders", text: "Bulk treats for meetings, milestones & team appreciation days." },
  { icon: Heart, title: "Seasonal Gift Boxes", text: "Eid, winter & festive gift boxes — curated and beautifully wrapped." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Sweet Crumbs — Dessert & Cake logo"
              className="h-12 w-12 rounded-full object-cover shadow-soft"
            />
            <span className="font-display text-xl font-700 text-primary">Sweet Crumbs</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary/80">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#specials" className="hover:text-primary transition">Specials</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Order Now</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="absolute inset-0 bg-gradient-warm -z-10" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl -z-10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gold/30 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-soft text-xs font-semibold tracking-wide uppercase text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Baked fresh in Bangladesh
            </span>
            <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl font-700 text-primary leading-[0.95] text-balance">
              Sweet
              <span className="block italic text-accent-foreground/90">
                Crumbs<span className="text-gold">.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md text-balance">
              Homemade desserts baked with love — small batches, big flavor, and packaging too pretty to throw away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm h-12 px-7 text-base">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Order Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-base border-primary/20 bg-card/60 backdrop-blur hover:bg-card">
                <a href="#menu">View Menu</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-[2rem] rotate-3 opacity-40 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-warm border-4 border-card">
              <img
                src={heroImg}
                alt="Assortment of homemade brownies, cookies, cheesecake and chocolate cake from Sweet Crumbs"
                width={1536}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 animate-float">
              <div className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary fill-primary/20" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Made today</p>
                <p className="text-sm font-semibold text-primary">With love ✨</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-semibold shadow-warm rotate-6">
              🍫 Fresh batch
            </div>
          </div>
        </div>
      </section>

      {/* BRAND / LOGO SHOWCASE */}
      <section id="brand" className="py-20 md:py-28 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Brand</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-primary text-balance">
            The Sweet Crumbs mark
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A little window into our kitchen — where every cake is baked with care.
          </p>

          <div className="mt-12 relative inline-block">
            <div className="absolute -inset-6 bg-gradient-gold rounded-[2.5rem] opacity-30 blur-2xl" />
            <div className="relative rounded-[2rem] bg-card shadow-warm border-4 border-card p-8 md:p-14">
              <img
                src={logoImg}
                alt="Sweet Crumbs — Dessert & Cake official logo"
                width={600}
                height={600}
                loading="lazy"
                className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-accent/40 rounded-[2rem] -rotate-3" />
            <img
              src={aboutImg}
              alt="Baker piping pink frosting onto a homemade cake"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative rounded-[2rem] w-full h-auto object-cover shadow-soft"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Story</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-primary text-balance">
              A little kitchen.
              <span className="italic text-accent-foreground/80"> A lot of love.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sweet Crumbs is a home-based dessert studio offering fresh brownies, cookies, cheesecake slices,
              chocolate cake slices, and fully customized cakes. Every order is hand-mixed, hand-decorated and
              baked the day it's delivered — because dessert tastes better when it's made just for you.
            </p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-28 bg-gradient-cocoa text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">The Menu</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-balance">
              Something sweet for <span className="italic text-accent">every craving</span>
            </h2>
            <p className="mt-4 text-primary-foreground/70">All prices in BDT. Bulk & event pricing available on request.</p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className={`group relative rounded-3xl p-6 border transition-all hover:-translate-y-1 ${
                    item.custom
                      ? "bg-gradient-gold border-gold/40 text-primary"
                      : "bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur hover:bg-primary-foreground/10"
                  }`}
                >
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${
                    item.custom ? "bg-primary/10" : "bg-accent/30"
                  }`}>
                    <Icon className={`h-6 w-6 ${item.custom ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className={`font-display text-xl font-600 ${item.custom ? "text-primary" : ""}`}>
                    {item.name}
                  </h3>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div>
                      <span className={`font-display text-3xl font-700 ${item.custom ? "text-primary" : "text-gold"}`}>
                        {item.custom ? item.price : `৳${item.price}`}
                      </span>
                      <span className={`ml-2 text-xs ${item.custom ? "text-primary/70" : "text-primary-foreground/60"}`}>
                        {item.unit}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Why Sweet Crumbs</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-primary text-balance">
              Tiny details. <span className="italic">Big love.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-warm transition-shadow"
                >
                  <div className="h-12 w-12 rounded-2xl bg-accent/50 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-600 text-primary">{r.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL ORDERS */}
      <section id="specials" className="py-20 md:py-28 bg-accent/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Special Orders</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-primary text-balance">
              For the moments <span className="italic">worth celebrating</span>
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specials.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-3xl bg-card p-6 shadow-soft hover:-translate-y-1 transition-transform border border-border"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-600 text-primary">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-warm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2.5rem] bg-gradient-cocoa text-primary-foreground p-8 md:p-14 shadow-warm relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gold">Order & Contact</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-balance">
                  Ready for something <span className="italic text-accent">delicious?</span>
                </h2>
                <p className="mt-4 text-primary-foreground/70 max-w-md">
                  Message us on WhatsApp to place an order or ask about custom designs. We reply within an hour during the day.
                </p>
                <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
                  <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Delivery available across Bangladesh & local areas</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Home-based studio · Dhaka, Bangladesh</div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-gold text-primary hover:scale-[1.02] transition-transform shadow-warm"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider opacity-70">Fastest reply</p>
                    <p className="font-display font-700 text-lg">Order on WhatsApp</p>
                  </div>
                  <span className="font-display text-xl">→</span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Follow our bakes</p>
                    <p className="font-display font-700 text-lg">@sweetcrumbs</p>
                  </div>
                  <span className="font-display text-xl text-primary-foreground/60">→</span>
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Facebook className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Find us on</p>
                    <p className="font-display font-700 text-lg">Facebook Page</p>
                  </div>
                  <span className="font-display text-xl text-primary-foreground/60">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <Cake className="h-4 w-4 text-primary" />
            </span>
            <span className="font-display text-lg font-700 text-primary">Sweet Crumbs</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sweet Crumbs · Baked with 🤎 in Bangladesh
          </p>
        </div>
      </footer>
    </div>
  );
}
