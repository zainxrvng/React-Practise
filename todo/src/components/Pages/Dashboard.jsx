import {
  Search,
  Bell,
  Settings,
  Inbox,
  CalendarDays,
  ArrowRightLeft,
  Folder,
  Check,
  MoreVertical,
  PlusCircle,
  RotateCcw,
  Plus,
} from "lucide-react";

// Static markup only — no state, no handlers yet.
// Assumes your tailwind.config.js already extends the Luminous Clarity
// color tokens from DESIGN.md (primary, on-surface, surface-container, etc.)
// If it doesn't yet, add those under theme.extend.colors before using this.

function Dashboard() {
  return (
    <div className="bg-background text-on-background min-h-screen font-sans">
      {/* Top AppBar */}
      <header className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-white/20 h-16 flex items-center justify-between px-10">
        <div className="flex items-center gap-12">
          <h1 className="text-3xl font-bold text-primary tracking-tight">
            FocusFlow
          </h1>
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input
              className="w-full bg-white/40 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search tasks or projects..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:bg-white/40 p-2 rounded-full transition-colors active:scale-95">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-on-surface-variant hover:bg-white/40 p-2 rounded-full transition-colors active:scale-95">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 cursor-pointer active:scale-95 transition-transform">
            <img
              className="w-full h-full object-cover"
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYgr1lhPKMP-elVDOkDKXetDsEOIFCfwpLFRTHYKeR-Vbd0uRgqu7uvH9i3o8Yaqv2Dhdlr2w-Y9w8kDZN6eY5ZgN5a8CPetH9KgIXKVnuKYkrbG-J_XaFM-34CCfzqxazD4eoQ1RaMAoKG14iT8AAdPynraGbO-DwX8gro2QHOVdRz6HVa5F5lZ8rX20Q3TahHf1dTVQf2w2VRq37vjbzlfoQdId6hl_g5NOJGq8ppjBPdktnvT6t"
            />
          </div>
        </div>
      </header>

      {/* Side Nav */}
      <aside className="fixed left-0 h-full w-64 z-50 bg-white/70 backdrop-blur-xl border-r border-white/20 flex flex-col p-6 pt-24 space-y-4">
        <div className="px-2 mb-6">
          <button className="w-full bg-primary-container text-on-primary-container rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
            <Plus className="w-5 h-5" />
            New Task
          </button>
        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Inbox className="w-5 h-5 group-hover:text-primary" />
            Inbox
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <CalendarDays className="w-5 h-5" />
            Today
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <ArrowRightLeft className="w-5 h-5 group-hover:text-primary" />
            Upcoming
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Folder className="w-5 h-5 group-hover:text-primary" />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Settings className="w-5 h-5 group-hover:text-primary" />
            Settings
          </a>
        </nav>

        <div className="mt-auto px-4 pb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant/50 mb-4">
            Projects
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Deep Work
              </span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Marketing Strategy
              </span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-tertiary" />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Personal Growth
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-24 pb-12 px-10 flex flex-col lg:flex-row gap-8">
        {/* Center: Task List */}
        <div className="flex-grow max-w-[800px]">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-on-surface mb-1">
              Today's Focus
            </h2>
            <p className="text-on-surface-variant">
              Wednesday, October 25 • 4 tasks remaining
            </p>
          </header>

          <div className="space-y-4">
            {/* Task 1 */}
            <div className="glass-card rounded-xl p-6 flex items-center gap-6 transition-all group">
              <div className="relative w-6 h-6 border-2 border-primary rounded-full cursor-pointer hover:bg-primary/5 transition-colors flex items-center justify-center">
                <Check className="text-primary w-4 h-4 scale-0 transition-transform group-hover:scale-75" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-on-surface mb-1">
                  Complete brand identity audit for Client X
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-primary/20">
                    High Priority
                  </span>
                  <span className="text-on-surface-variant/60 flex items-center gap-1 text-[10px] font-semibold">
                    <Folder className="w-3.5 h-3.5" /> Deep Work
                  </span>
                </div>
              </div>
              <button className="text-on-surface-variant/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Task 2 */}
            <div className="glass-card rounded-xl p-6 flex items-center gap-6 transition-all group">
              <div className="relative w-6 h-6 border-2 border-outline-variant rounded-full cursor-pointer hover:border-primary transition-colors flex items-center justify-center" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-on-surface mb-1">
                  Draft Q4 revenue projection report
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-secondary/10 text-secondary px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-secondary/20">
                    Medium
                  </span>
                  <span className="text-on-surface-variant/60 flex items-center gap-1 text-[10px] font-semibold">
                    <Folder className="w-3.5 h-3.5" /> Marketing Strategy
                  </span>
                </div>
              </div>
              <button className="text-on-surface-variant/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Task 3 — done */}
            <div className="glass-card rounded-xl p-6 flex items-center gap-6 transition-all group">
              <div className="relative w-6 h-6 bg-primary border-2 border-primary rounded-full cursor-pointer flex items-center justify-center">
                <Check className="text-white w-4 h-4" strokeWidth={3} />
              </div>
              <div className="flex-grow opacity-50">
                <h3 className="text-lg font-semibold text-on-surface mb-1 line-through">
                  Review team sprint backlog
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-tertiary/10 text-tertiary px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase">
                    Done
                  </span>
                  <span className="text-on-surface-variant/60 flex items-center gap-1 text-[10px] font-semibold">
                    <Folder className="w-3.5 h-3.5" /> Daily Operations
                  </span>
                </div>
              </div>
              <button className="text-on-surface-variant/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Empty state */}
            <div className="border-2 border-dashed border-primary/10 rounded-xl p-8 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/20 transition-all">
              <PlusCircle className="text-primary/40 w-9 h-9 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant/40">
                Add another task to your day
              </p>
            </div>
          </div>
        </div>

        {/* Right: Widgets */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Pomodoro widget */}
          <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center">
            <p className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant mb-6">
              Pomodoro Focus
            </p>
            <div className="relative mb-8 w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  className="text-primary/10"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <circle
                  className="text-primary transition-all duration-1000"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeDasharray="552.92"
                  strokeDashoffset="138.23"
                  strokeWidth="6"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[40px] font-bold text-on-surface tracking-tighter">
                  25:00
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-on-surface-variant/60">
                  Work Session
                </span>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <button className="flex-grow bg-primary text-on-primary py-3 rounded-xl text-xs font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all">
                Start
              </button>
              <button className="w-12 h-12 flex items-center justify-center glass-card rounded-xl text-on-surface-variant hover:text-primary transition-colors">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress widget */}
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">
                Daily Progress
              </p>
              <span className="text-primary font-bold text-xs">75%</span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1 h-32 items-end justify-between px-2">
                <div className="w-4 bg-primary/20 rounded-t-full h-[30%]" />
                <div className="w-4 bg-primary/20 rounded-t-full h-[50%]" />
                <div className="w-4 bg-primary/20 rounded-t-full h-[20%]" />
                <div className="w-4 bg-primary/20 rounded-t-full h-[80%]" />
                <div className="w-4 bg-primary rounded-t-full h-[95%]" />
                <div className="w-4 bg-primary/10 rounded-t-full h-[10%]" />
                <div className="w-4 bg-primary/10 rounded-t-full h-[10%]" />
              </div>
              <div className="flex justify-between px-1 text-[10px] text-on-surface-variant/40 font-semibold">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-on-surface-variant text-center">
              You're in the{" "}
              <span className="text-primary font-bold">top 5%</span> of focused
              users today. Keep it up!
            </p>
          </div>
        </div>
      </main>

      {/* Mobile FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 md:hidden">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Dashboard;

/*
  Add this once to your project's global CSS (e.g. index.css):

  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
  }
  .glass-card:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.8);
  }
*/
