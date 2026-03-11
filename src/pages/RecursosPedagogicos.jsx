import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Globe,
  Heart,
  ShieldCheck,
  Sparkles,
  Zap,
  Clock3,
  Shield,
  PackageCheck,
} from "lucide-react";

const PRIMARY = "#012677";

// -------------------------
// Dados (11 capas)
// -------------------------

const FEATURED_BOOKS = [
  // CRECHE E PRÉ-ESCOLA (2)
  {
    id: "c1",
    title: "Recursos Pedagogicos: Creche",
    category: "Educação Infantil",
    stage: "Creche e Pré-escola",
    coverImage: "/ebooks/ebook-creche.png",
  },
  {
    id: "c2",
    title: "Recursos Pedagogicos: Pré-escola",
    category: "BNCC",
    stage: "Creche e Pré-escola",
    coverImage: "/ebooks/ebook-pre-escolar.png",
  },

  // ANOS INICIAIS (5)
  {
    id: "i1",
    title: "Recursos Pedagogicos: Anos Iniciais 1º",
    category: "Matemática",
    stage: "Anos Iniciais",
    coverImage: "/ebooks/ebook-1-ano.png",
  },
  {
    id: "i2",
    title: "Recursos Pedagogicos: Anos Iniciais 2º",
    category: "Alfabetização",
    stage: "Anos Iniciais",
    coverImage: "/ebooks/ebook-2-ano.png",
  },
  {
    id: "i3",
    title: "Recursos Pedagogicos: Anos Iniciais 3º",
    category: "Ciências",
    stage: "Anos Iniciais",
    coverImage: "/ebooks/ebook-3-ano.png",
  },
  {
    id: "i4",
    title: "Recursos Pedagogicos: Anos Iniciais 4º",
    category: "Educação Especial",
    stage: "Anos Iniciais",
    coverImage: "/ebooks/ebook-4-ano.png",
  },
  {
    id: "i5",
    title: "Recursos Pedagogicos: Anos Iniciais 5º",
    category: "BNCC",
    stage: "Anos Iniciais",
    coverImage: "/ebooks/ebook-5-ano.png",
  },

  // ANOS FINAIS (4)
  {
    id: "f1",
    title: "Recursos Pedagogicos: Anos Finais 6º",
    category: "Metodologias",
    stage: "Anos Finais",
    coverImage: "/ebooks/ebook-6-ano.png",
  },
  {
    id: "f2",
    title: "Recursos Pedagogicos: Anos Finais 7º",
    category: "Língua Portuguesa",
    stage: "Anos Finais",
    coverImage: "/ebooks/ebook-7-ano.png",
  },
  {
    id: "f3",
    title: "Recursos Pedagogicos: Anos Finais 8º",
    category: "Tecnologia",
    stage: "Anos Finais",
    coverImage: "/ebooks/ebook-8-ano.png",
  },
  {
    id: "f4",
    title: "Recursos Pedagogicos: Anos Finais 9º",
    category: "Humanas",
    stage: "Anos Finais",
    coverImage: "/ebooks/ebook-9-ano.png",
  },
];

// -------------------------
// HERO
// -------------------------

const Hero = () => {
  const pills = useMemo(
    () => [
      { icon: <PackageCheck className="w-4 h-4" />, label: "Conteúdos prontos para aplicar" },
      { icon: <Clock3 className="w-4 h-4" />, label: "Economize tempo no planejamento" },
      { icon: <Shield className="w-4 h-4" />, label: "Curadoria e qualidade Afeto" },
    ],
    []
  );

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-36 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background: `radial-gradient(circle, ${PRIMARY} 0%, rgba(1,38,119,0) 62%)`,
          }}
        />
        <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#EEF2FF] blur-2xl opacity-80" />
        <div className="absolute -left-36 bottom-[-140px] h-[420px] w-[420px] rounded-full bg-[#F5F7FF] blur-3xl opacity-90" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-24 lg:pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E6EAFF] bg-white/70 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: PRIMARY }} />
              <p className="text-[11px] font-extrabold tracking-[0.22em] uppercase text-gray-600">
                Recursos Pedagógicos • Afeto&apos;s
              </p>
            </div>

            <h1 className="mt-5 text-[40px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.02] text-gray-900 tracking-tight">
              Materiais prontos
              <br />
              <span style={{ color: PRIMARY }}>para ensinar com excelência</span>
            </h1>

            <p className="mt-5 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
              Coleções organizadas por etapa (Creche/Pré, Anos Iniciais e Anos Finais),
              com design moderno, navegação simples e conteúdos aplicáveis.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[12px] font-extrabold text-white shadow-[0_18px_38px_rgba(1,38,119,0.24)] hover:brightness-95 transition"
                style={{ backgroundColor: PRIMARY }}
              >
                Acessar recursos <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#recursos"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[12px] font-extrabold transition border border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 bg-white"
              >
                Ver coleção
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-[12px] font-semibold text-gray-600">
              {pills.map((p) => (
                <div key={p.label} className="inline-flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm">
                    {p.icon}
                  </span>
                  <span className="whitespace-nowrap">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[470px] lg:min-h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[780px] h-[400px] sm:h-[440px] lg:h-[480px]">
                
                {/* OVAL BASE - Fundo da cápsula */}
                <div
                  className="absolute -right-4 top-8 h-[330px] w-[540px] sm:h-[370px] sm:w-[640px] lg:h-[410px] lg:w-[740px] rounded-[999px] overflow-hidden shadow-[0_40px_90px_rgba(1,38,119,0.12)] ring-1 ring-black/5"
                  style={{ backgroundColor: "#EEF2FF" }}
                >
                  <div className="absolute -right-28 top-16 opacity-95">
                    <div className="h-10 w-[600px] rounded-full bg-[#DDE5FF]" />
                    <div className="mt-7 h-10 w-[710px] rounded-full bg-[#DDE5FF]" />
                    <div className="mt-7 h-10 w-[650px] rounded-full bg-[#DDE5FF]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-white/10" />
                </div>

                {/* AVATAR (METADE SUPERIOR) */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none" 
                  style={{ clipPath: 'inset(-200px 0 20% 0)' }}
                >
                  <img
                    src="loafetos.png"
                    alt="Lo Afeto's"
                    className="absolute right-6 sm:right-10 lg:right-14 top-0 sm:-top-2 lg:-top-3 w-[380px] sm:w-[500px] lg:w-[610px] object-contain drop-shadow-[0_28px_75px_rgba(0,0,0,0.16)]"
                  />
                </div>

                {/* AVATAR (METADE INFERIOR) & MÁSCARA 3D */}
                <div
                  className="pointer-events-none absolute -right-4 top-8 h-[330px] w-[540px] sm:h-[370px] sm:w-[640px] lg:h-[410px] lg:w-[740px] rounded-[999px] overflow-hidden z-20"
                >
                  <img
                    src="loafetos.png"
                    alt=""
                    className="absolute right-[40px] sm:right-[56px] lg:right-[72px] -top-[32px] sm:-top-[40px] lg:-top-[44px] w-[380px] sm:w-[500px] lg:w-[610px] object-contain drop-shadow-[0_28px_75px_rgba(0,0,0,0.16)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#E3E9FF] via-[#EEF2FF]/40 to-transparent z-10" />
                  <div className="absolute inset-0 [box-shadow:inset_0_-30px_60px_rgba(1,38,119,0.08)] z-10" />
                </div>

                {/* Bubbles Flutuantes */}
                <div className="absolute right-16 sm:right-20 top-10 z-40 grid place-items-center h-14 w-14 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)] border border-gray-100">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF2FF]">
                    <PackageCheck className="w-5 h-5" style={{ color: PRIMARY }} />
                  </div>
                </div>

                <div className="absolute left-8 sm:left-12 top-[200px] z-40 hidden sm:grid place-items-center h-14 w-14 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)] border border-gray-100">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF2FF]">
                    <Clock3 className="w-5 h-5" style={{ color: PRIMARY }} />
                  </div>
                </div>

                <div className="absolute right-14 sm:right-16 bottom-12 z-40 grid place-items-center h-14 w-14 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)] border border-gray-100">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF2FF]">
                    <ShieldCheck className="w-5 h-5" style={{ color: PRIMARY }} />
                  </div>
                </div>

                {/* Pontinhos */}
                <div className="pointer-events-none absolute right-4 top-16 h-3 w-3 rounded-full bg-white shadow z-40" />
                <div
                  className="pointer-events-none absolute right-14 top-28 h-6 w-6 rounded-full opacity-20 z-40"
                  style={{ backgroundColor: PRIMARY }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

// -------------------------
// Features
// -------------------------

const Features = () => {
  const features = useMemo(
    () => [
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Validado",
        description: "Conteúdo revisado por mestres e doutores.",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Prático",
        description: "Formatos prontos para aplicação imediata.",
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Global",
        description: "As melhores metodologias do mundo.",
      },
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Exclusivo",
        description: "Materiais que você só encontra aqui.",
      },
    ],
    []
  );

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(1,38,119,0.06)] hover:shadow-[0_18px_44px_rgba(1,38,119,0.10)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EEF2FF] ring-1 ring-black/5 group-hover:scale-[1.03] transition-transform">
                  <span className="text-[#012677]">{f.icon}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-[15px] font-extrabold text-gray-900 leading-tight">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#EEF2FF] via-gray-100 to-transparent" />
              <div className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.22em] text-gray-400">
                Afeto&apos;s quality
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------
// FeaturedBooks (Cards com Tipografia Minimalista, sem números)
// -------------------------

const FeaturedBooks = () => {
  const stages = ["Todos", "Creche e Pré-escola", "Anos Iniciais", "Anos Finais"];
  const [activeStage, setActiveStage] = useState("Todos");
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const books = useMemo(() => {
    if (activeStage === "Todos") return FEATURED_BOOKS;
    return FEATURED_BOOKS.filter((b) => b.stage === activeStage);
  }, [activeStage]);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card='book']");
    const cardW = card ? card.getBoundingClientRect().width : 260;
    const step = (cardW + 24) * 1.35;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const nextLeft = el.scrollLeft + dir * step;

    if (nextLeft >= maxScroll - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;
    if (isPaused) return;

    const id = window.setInterval(() => scrollByCards(1), 1200);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, activeStage, books.length]);

  return (
    <section className="py-24 bg-white" id="recursos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <h3 className="text-[#012677] font-extrabold uppercase tracking-widest text-xs mb-3">
              Recursos Pedagógicos
            </h3>
            {/* ✨ AQUI: Alteração da fonte para ficar igual ao Hero */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Trilhas de Aprendizagem
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              Carrossel automático (pausa ao passar o mouse).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByCards(-1)}
              className="p-4 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-[#012677] transition-all group"
              aria-label="Anterior"
              type="button"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-gray-700 group-hover:text-[#012677]" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="p-4 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-[#012677] transition-all group"
              aria-label="Próximo"
              type="button"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-gray-700 group-hover:text-[#012677]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="
            flex gap-6 overflow-x-auto pb-4
            scroll-smooth snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
          aria-label="Carrossel de livros"
        >
          {books.map((book) => (
            <div
              key={book.id}
              data-card="book"
              className="group cursor-pointer snap-start flex-none w-[220px] sm:w-[240px] lg:w-[250px]"
            >
              <div className="relative mb-4">
                <div className="relative aspect-[2/3] overflow-hidden rounded-xl shadow-[10px_10px_30px_rgba(0,0,0,0.10)] transition-all duration-500 group-hover:shadow-[20px_20px_50px_rgba(0,0,0,0.15)] group-hover:-translate-y-1">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/seed/fallback/400/600";
                    }}
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      className="p-3 bg-white rounded-full hover:bg-[#012677] hover:text-white transition-all transform translate-y-3 group-hover:translate-y-0 duration-300"
                      aria-label="Visualizar"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      className="p-3 bg-white rounded-full hover:bg-[#012677] hover:text-white transition-all transform translate-y-3 group-hover:translate-y-0 duration-300 delay-75"
                      aria-label="Favoritar"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 text-gray-900 text-[10px] font-black px-3 py-1 rounded-full border border-white shadow">
                      {book.stage}
                    </span>
                  </div>
                </div>
              </div>

              {/* Design do Texto - Mais próximo da elegância do header */}
              <div className="pt-2 px-1">
                <p className="text-[10px] text-[#012677] font-extrabold uppercase tracking-[0.2em] mb-1.5">
                  {book.category}
                </p>
                <h4 className="font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-[#012677] transition-colors min-h-[44px]">
                  {book.title}
                </h4>
                
                {/* Linha de Ação Discreta sem números */}
                <div className="mt-3 flex items-center text-[11px] font-bold text-gray-400 group-hover:text-[#012677] transition-colors uppercase tracking-wider">
                  <span>Acessar conteúdo</span>
                  <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full bg-gray-100 p-2">
            {stages.map((s) => {
              const active = s === activeStage;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setActiveStage(s);
                    requestAnimationFrame(() => {
                      if (scrollerRef.current)
                        scrollerRef.current.scrollTo({ left: 0, behavior: "auto" });
                    });
                  }}
                  className={[
                    "px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wide transition",
                    active ? "bg-white text-[#012677] shadow-sm" : "text-gray-500 hover:text-[#012677]",
                  ].join(" ")}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// -------------------------
// Página
// -------------------------

export default function RecursosPedagogicos() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Features />
        <FeaturedBooks />
      </main>
    </div>
  );
}