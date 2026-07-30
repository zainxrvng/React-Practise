/**
 * FocusFlowLanding.jsx
 * ---------------------------------------------------------------------------
 * A single-file React + Tailwind implementation of the "Luminous Clarity"
 * landing page (see DESIGN.md for the source design tokens).
 *
 * WHY ARBITRARY TAILWIND VALUES (e.g. bg-[#4648d4]) INSTEAD OF THEME COLORS?
 * This file is meant to drop into any React + Tailwind project without you
 * having to touch tailwind.config.js first. Once you're happy with it, the
 * recommended next step is to move these hex values into your
 * tailwind.config.js `theme.extend.colors` (named the same as in DESIGN.md:
 * primary, on-surface, surface-container, etc.) so you can write
 * `bg-primary` instead of `bg-[#4648d4]` everywhere. I left a mapping
 * comment above each color group so that swap is easy later.
 *
 * NO SHADCN / NO ICON LIBRARY ON PURPOSE
 * Buttons are plain <button> elements and icons are tiny inline SVGs, so the
 * only dependency this file needs is React + Tailwind. Swap in shadcn's
 * <Button /> or lucide-react icons whenever you're ready.
 *
 * FONT
 * The design uses "Inter". Load it however your project prefers, e.g. in
 * index.html:
 *   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
 * or via `next/font/google` if you're on Next.js.
 * ---------------------------------------------------------------------------
 */

/* -----------------------------------------------------------------------
 * Tiny inline icon components
 * Kept local so this file has zero external dependencies. Each one is a
 * stroke-based icon matching the "1.5pt stroke weight" guidance in
 * DESIGN.md's Empty States / iconography notes.
 * --------------------------------------------------------------------- */

const PlayCircleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5l5 3.5-5 3.5v-7z" fill="currentColor" stroke="none" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.5 2.5 5-5" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
  </svg>
);

const TimerIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2.5 2.5M9 2h6" />
  </svg>
);

const CloudSyncIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M7 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117 9.5a4 4 0 01.5 7.5" />
    <path d="M9 15l2-2 2 2M11 13v5" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z" />
  </svg>
);

const BellIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M6 9a6 6 0 1112 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9z" />
    <path d="M10 18a2 2 0 004 0" />
  </svg>
);

/* -----------------------------------------------------------------------
 * NAVBAR
 * Fixed, translucent "glass" bar. `backdrop-blur` + a semi-transparent
 * white background is what creates the glassmorphism effect from
 * DESIGN.md's Elevation & Depth section (Level 1 chrome).
 * --------------------------------------------------------------------- */
function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/70 shadow-[0_20px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-10">
        {/* Logo + primary nav links */}
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-[#4648d4]">
            FocusFlow
          </span>

          {/* Desktop-only nav links; hidden below md breakpoint */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="border-b-2 border-[#4648d4] pb-1 font-bold text-[#4648d4] transition-opacity hover:opacity-80"
            >
              Features
            </a>
            <a
              href="#"
              className="text-[#464554] transition-opacity hover:opacity-80"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-[#464554] transition-opacity hover:opacity-80"
            >
              About
            </a>
          </div>
        </div>

        {/* Auth actions */}
        <div className="flex items-center gap-4">
          <button className="hidden text-[#464554] transition-opacity hover:opacity-80 active:scale-95 sm:block">
            Sign In
          </button>
          <button className="rounded-full bg-[#6063ee] px-6 py-2.5 text-white transition-all hover:opacity-90 active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

/* -----------------------------------------------------------------------
 * HERO
 * A full-bleed background photo with a floating glass card on top.
 * The glass card uses the exact recipe from DESIGN.md's "Glass Effect":
 *   background: rgba(255,255,255,0.7) + backdrop-filter: blur(16px)
 *   + a 1px translucent white border + a soft, low-opacity shadow.
 * --------------------------------------------------------------------- */
function Hero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center pt-20">
      {/* Background photo layer. Swap the URL for your own asset. */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9o83V00pMb-EUamqZuG7M6c7jVvb7jMvVfhmdnzTDDbRsj7J5hVLYyzyR3bE9inZIe8zgaia9QZvc8tzFynIObcRXBUhv6iwJTt7EsMGUHC9a86gxaI0CVUVAX6I1Vsdxf5iW-LIYti2lzvtg95yo5iHnTxulRkoPsVaVN7vJgIz1bcEeANo97w_s2AIY9ugJwhAs3ywZdtLO_C6-ktSwwlP1lWsNcrOASSANH_c1Td-0HzLue57')",
        }}
      >
        {/* Light wash over the photo so the glass card reads clearly on top */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Floating glass card */}
      <section className="relative z-10 mx-4 w-full max-w-[800px] md:mx-auto">
        <div
          className="rounded-[32px] border border-white/20 bg-white/70 p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl md:p-16"
          style={{ backdropFilter: "blur(16px)" }}
        >
          {/* Eyebrow / label-caps chip */}
          <div className="mb-8 inline-block rounded-full border border-[#4648d4]/20 bg-[#4648d4]/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4648d4]">
              Minimalist Design
            </span>
          </div>

          {/* Headline. Font sizes match DESIGN.md's display-lg token. */}
          <h1 className="mb-8 text-[40px] font-bold leading-tight tracking-[-0.02em] text-[#0b1c30] md:text-[48px] md:leading-[56px]">
            Master your day, <br className="hidden md:block" /> one task at a
            time.
          </h1>

          {/* Supporting copy */}
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-[#464554]">
            A clean, distraction-free interface designed for peak productivity.
            Focus on what truly matters without the digital noise.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="w-full rounded-xl px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 sm:w-auto"
              style={{
                background: "linear-gradient(to bottom, #6366F1, #4F46E5)",
              }}
            >
              Get Started
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/50 px-8 py-4 font-semibold text-[#0b1c30] backdrop-blur-md transition-all hover:bg-white/80 active:scale-95 sm:w-auto">
              <PlayCircleIcon className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-[#4648d4]" />
              <span className="text-sm">Calm Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5 text-[#4648d4]" />
              <span className="text-sm">No Ads</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -----------------------------------------------------------------------
 * FEATURE GRID
 * A 12-column "bento" layout on desktop, collapsing to a single column on
 * mobile — matches DESIGN.md's Layout & Spacing "Fluid Grid" rule.
 * Each card reuses the same glass-card recipe as the hero, just at a
 * smaller radius (24px, i.e. rounded-3xl-ish → rounded-[24px]).
 * --------------------------------------------------------------------- */

// Small helper so every card shares the same glass styling without repeating
// the same long className string four times.
function GlassCard({ className = "", children }) {
  return (
    <div
      className={`rounded-[24px] border border-white/20 bg-white/70 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition-colors hover:border-[#4648d4]/40 ${className}`}
      style={{ backdropFilter: "blur(16px)" }}
    >
      {children}
    </div>
  );
}

function FeatureGrid() {
  return (
    <section className="mx-auto max-w-[1200px] bg-white/30 px-4 py-24 md:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Card 1: Cognitive Ease — wide card with a preview image */}
        <GlassCard className="flex flex-col justify-between md:col-span-8">
          <div className="max-w-md">
            <h3 className="mb-4 text-[32px] font-bold leading-tight text-[#0b1c30]">
              Cognitive Ease
            </h3>
            <p className="leading-relaxed text-[#464554]">
              Our interface adapts to your workflow, reducing mental load and
              helping you maintain a state of flow throughout the day.
            </p>
          </div>
          <div className="mt-12 h-64 overflow-hidden rounded-xl bg-[#eff4ff]">
            <img
              className="h-full w-full object-cover opacity-80"
              alt="Minimalist glassmorphic dashboard preview with a task list and progress chart"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvIK01tjXVyksoNbA8UvgjgOXwRAOvDB21EuADxD4njo-WzTqdmQACd1eXRE-NsnBFO6PY-gpqA_tZXR_clrHBNTtUaQvk4pAnmqzwNJSoIGF5ujNYrXLidsyOlq1Rh-JSSdlaiHcorjq99FAYwyDYCxb3FZriwDp-OSXENnPjL7KJ-BEx9BteSEBdmHnnWS8zIPyf7G0jn-fQ8weU16Ho6cvca2iDJdXQG4fKePldmcQV2RbOhOno"
            />
          </div>
        </GlassCard>

        {/* Card 2: Focus Timers — narrow card with a "live" status footer */}
        <GlassCard className="flex flex-col md:col-span-4">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4648d4]/10">
            <TimerIcon className="h-7 w-7 text-[#4648d4]" />
          </div>
          <h3 className="mb-4 text-xl font-semibold text-[#0b1c30]">
            Focus Timers
          </h3>
          <p className="mb-8 leading-relaxed text-[#464554]">
            Integrated Pomodoro and deep work timers to manage your energy
            sessions effectively.
          </p>
          <div className="mt-auto border-t border-[#c7c4d7]/30 pt-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#4648d4]">
                Active now
              </span>
              {/* Pulsing dot = "live" indicator */}
              <div className="h-3 w-3 animate-pulse rounded-full bg-[#4648d4]" />
            </div>
          </div>
        </GlassCard>

        {/* Card 3: Instant Sync — simple narrow card */}
        <GlassCard className="flex flex-col md:col-span-4">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4648d4]/10">
            <CloudSyncIcon className="h-7 w-7 text-[#4648d4]" />
          </div>
          <h3 className="mb-4 text-xl font-semibold text-[#0b1c30]">
            Instant Sync
          </h3>
          <p className="leading-relaxed text-[#464554]">
            Your focus flow follows you. Seamlessly sync across mobile, desktop,
            and tablet in real-time.
          </p>
        </GlassCard>

        {/* Card 4: Smart Analytics — wide card with an avatar stack */}
        <GlassCard className="flex flex-col justify-between md:col-span-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-sm">
              <h3 className="mb-4 text-[32px] font-bold leading-tight text-[#0b1c30]">
                Smart Analytics
              </h3>
              <p className="leading-relaxed text-[#464554]">
                Visualize your productivity patterns and discover when you
                perform at your best.
              </p>
            </div>

            {/* Overlapping avatar stack + "+12k" counter */}
            <div className="flex -space-x-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-[#d3e4fe]">
                <img
                  className="h-full w-full object-cover"
                  alt="User avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzZ5vQ08jTfqE4vYXcibNPSaDN-d7amnoB1cP-KnfbvVnUy9VPrzwUzgNf_Vgi8o8LgfIWI78ztV_DpxFtgj83DcPBcGpcHZ7BF8-naNTm_RAOaABFc0XyjI1R_Hqjg8PGJVvatYj13fPWgWFM6R9HjJVMv8KlTaK8DPP8-5KW7lfm710ID04LM-LlRs02gXLhvWAdDuRe8TTsOdHAiaQdHnpj4aNnt5afOt2kG7kL4qgvU5BByfGx"
                />
              </div>
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-[#d3e4fe]">
                <img
                  className="h-full w-full object-cover"
                  alt="User avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEdv1bLkcYTvjLcou-GOKESY49qC2wNR75umzVblwhxxQDVK3MVCCOZb2mF17-iH3c2vVsSJYU2kJAvMl6oVrk0DuIm33vx6m4D7_VoUUj7V2qv-jd8-z-SzCwfgLhu6ieD_hhYE2GFW-TGr0xoOBCMZRY0YYBX3yVO3R_Nrv9M2VdCJm2lcTHrKt6WamJNuusFjJFrEA5I5brFaV__9SHurAbsuvdySwghZeMTDtij_Fq4h2Z9PFj"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#6063ee] text-xs font-bold text-white">
                +12k
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------------------
 * FOOTER
 * Plain (non-glass) surface — this is "Level 1" background per DESIGN.md,
 * so it intentionally does NOT use the blur/translucency treatment.
 * --------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="w-full border-t border-[#c7c4d7] bg-[#f8f9ff] py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-10">
        {/* Brand + copyright */}
        <div className="space-y-4 text-center md:text-left">
          <span className="text-xl font-bold text-[#0b1c30]">FocusFlow</span>
          <p className="max-w-xs text-sm text-[#464554]">
            © 2024 FocusFlow. All rights reserved. Built for creators and deep
            thinkers.
          </p>
        </div>

        {/* Secondary links */}
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="#"
            className="text-sm text-[#464554] transition-colors hover:text-[#4648d4]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-[#464554] transition-colors hover:text-[#4648d4]"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-[#464554] transition-colors hover:text-[#4648d4]"
          >
            Help Center
          </a>
          <a
            href="#"
            className="text-sm text-[#464554] transition-colors hover:text-[#4648d4]"
          >
            Contact
          </a>
        </div>

        {/* Utility icon buttons */}
        <div className="flex gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7c4d7] transition-colors hover:bg-[#e5eeff]">
            <GlobeIcon className="h-5 w-5 text-[#464554]" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7c4d7] transition-colors hover:bg-[#e5eeff]">
            <BellIcon className="h-5 w-5 text-[#464554]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

/* -----------------------------------------------------------------------
 * PAGE
 * Top-level export. Import this into a route/page and render it.
 *   e.g. import FocusFlowLanding from "./FocusFlowLanding";
 * --------------------------------------------------------------------- */
export default function FocusFlowLanding() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] font-sans text-[#0b1c30] antialiased">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Footer />
    </div>
  );
}
