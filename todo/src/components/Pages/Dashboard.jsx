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
import DialogDemo from "../Pages/Dialog";
import { useState } from "react";

// Static markup only — no state, no handlers yet.
// Colors are hardcoded as Tailwind arbitrary values (bg-[#4648d4] etc.)
// pulled straight from DESIGN.md, so this renders correctly even if
// your tailwind.config.js doesn't have the Luminous Clarity tokens set up.
// Once you DO add those tokens to your config, you can swap bg-[#4648d4]
// back to bg-primary, text-[#464554] back to text-on-surface-variant, etc.

function Dashboard() {
  const [task, SetTask] = useState([]);
  const addTask = (newtask) => {
    SetTask((prev) => [...prev, { id: Date.now(), done: false, ...newtask }]);
  };
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const remainingTask = task.filter((t) => !t.done).length;

  // const taskToggle = (id) => {
  //   SetTask((prev) => [...prev, {done: true, ...task} ])
  // }
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen font-sans">
      {/* Top AppBar */}
      <header className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-white/20 h-16 flex items-center justify-between px-10">
        <div className="flex items-center gap-12">
          <h1 className="text-3xl font-bold text-[#4648d4] tracking-tight">
            FocusFlow
          </h1>
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#464554] w-5 h-5" />
            <input
              className="w-full bg-white/40 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#4648d4]/20 transition-all"
              placeholder="Search tasks or projects..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#464554] hover:bg-white/40 p-2 rounded-full transition-colors active:scale-95">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-[#464554] hover:bg-white/40 p-2 rounded-full transition-colors active:scale-95">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#4648d4]/20 cursor-pointer active:scale-95 transition-transform">
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
          <DialogDemo onAddtask={addTask} /> {console.log(task)}
        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Inbox className="w-5 h-5 group-hover:text-[#4648d4]" />
            Inbox
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-[#6063ee] text-[#fffbff] rounded-xl transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <CalendarDays className="w-5 h-5" />
            Today
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <ArrowRightLeft className="w-5 h-5 group-hover:text-[#4648d4]" />
            Upcoming
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Folder className="w-5 h-5 group-hover:text-[#4648d4]" />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] hover:bg-white/40 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Settings className="w-5 h-5 group-hover:text-[#4648d4]" />
            Settings
          </a>
        </nav>

        <div className="mt-auto px-4 pb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#464554]/50 mb-4">
            Projects
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#4648d4]" />
              <span className="text-sm text-[#464554] group-hover:text-[#0b1c30] transition-colors">
                Deep Work
              </span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#5c5f61]" />
              <span className="text-sm text-[#464554] group-hover:text-[#0b1c30] transition-colors">
                Marketing Strategy
              </span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#5d5f5f]" />
              <span className="text-sm text-[#464554] group-hover:text-[#0b1c30] transition-colors">
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
            <h2 className="text-3xl font-bold text-[#0b1c30] mb-1">
              Today's Focus
            </h2>
            <p className="text-[#464554]">
              {formatedDate} • {remainingTask} tasks remaining
            </p>
          </header>

          <div className="space-y-4">
            {task.map((task) => (
              <div
                className="rounded-xl p-6 flex items-center gap-6 transition-all group bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:bg-white/80 hover:border-white/40"
                key={task.id}
              >
                <div className="relative w-6 h-6 border-2 border-[#4648d4] rounded-full cursor-pointer hover:bg-[#4648d4]/5 transition-colors flex items-center justify-center">
                  <Check
                    className="text-[#4648d4] w-4 h-4 scale-0 transition-transform group-hover:scale-75"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-[#0b1c30] mb-1">
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-[#4648d4]/10 text-[#4648d4] px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-[#4648d4]/20">
                      {task.priority}
                    </span>
                    <span className="text-[#464554]/60 flex items-center gap-1 text-[10px] font-semibold">
                      <Folder className="w-3.5 h-3.5" /> {task.project}
                    </span>
                  </div>
                </div>
                <button className="text-[#464554]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            ))}
            {/* Task 1 */}

            {/* Task 2 */}
            <div className="rounded-xl p-6 flex items-center gap-6 transition-all group bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:bg-white/80 hover:border-white/40">
              <div className="relative w-6 h-6 border-2 border-[#c7c4d7] rounded-full cursor-pointer hover:border-[#4648d4] transition-colors flex items-center justify-center" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-[#0b1c30] mb-1">
                  Draft Q4 revenue projection report
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-[#5c5f61]/10 text-[#5c5f61] px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-[#5c5f61]/20">
                    Medium
                  </span>
                  <span className="text-[#464554]/60 flex items-center gap-1 text-[10px] font-semibold">
                    <Folder className="w-3.5 h-3.5" /> Marketing Strategy
                  </span>
                </div>
              </div>
              <button className="text-[#464554]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Task 3 — done */}
            <div className="rounded-xl p-6 flex items-center gap-6 transition-all group bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:bg-white/80 hover:border-white/40">
              <div className="relative w-6 h-6 bg-[#4648d4] border-2 border-[#4648d4] rounded-full cursor-pointer flex items-center justify-center">
                <Check className="text-white w-4 h-4" strokeWidth={3} />
              </div>
              <div className="flex-grow opacity-50">
                <h3 className="text-lg font-semibold text-[#0b1c30] mb-1 line-through">
                  Review team sprint backlog
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-[#5d5f5f]/10 text-[#5d5f5f] px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase">
                    Done
                  </span>
                  <span className="text-[#464554]/60 flex items-center gap-1 text-[10px] font-semibold">
                    <Folder className="w-3.5 h-3.5" /> Daily Operations
                  </span>
                </div>
              </div>
              <button className="text-[#464554]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Empty state */}
            <div className="border-2 border-dashed border-[#4648d4]/10 rounded-xl p-8 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/20 transition-all">
              <PlusCircle className="text-[#4648d4]/40 w-9 h-9 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-semibold tracking-wider uppercase text-[#464554]/40">
                Add another task to your day
              </p>
            </div>
          </div>
        </div>

        {/* Right: Widgets */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Pomodoro widget */}
          <div className="rounded-3xl p-8 flex flex-col items-center text-center bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#464554] mb-6">
              Pomodoro Focus
            </p>
            <div className="relative mb-8 w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  className="text-[#4648d4]/10"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <circle
                  className="text-[#4648d4] transition-all duration-1000"
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
                <span className="text-[40px] font-bold text-[#0b1c30] tracking-tighter">
                  25:00
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]/60">
                  Work Session
                </span>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <button className="flex-grow bg-[#4648d4] text-white py-3 rounded-xl text-xs font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-[#4648d4]/30 active:scale-95 transition-all">
                Start
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl text-[#464554] hover:text-[#4648d4] transition-colors bg-white/70 backdrop-blur-xl border border-white/20">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress widget */}
          <div className="rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#464554]">
                Daily Progress
              </p>
              <span className="text-[#4648d4] font-bold text-xs">75%</span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1 h-32 items-end justify-between px-2">
                <div className="w-4 bg-[#4648d4]/20 rounded-t-full h-[30%]" />
                <div className="w-4 bg-[#4648d4]/20 rounded-t-full h-[50%]" />
                <div className="w-4 bg-[#4648d4]/20 rounded-t-full h-[20%]" />
                <div className="w-4 bg-[#4648d4]/20 rounded-t-full h-[80%]" />
                <div className="w-4 bg-[#4648d4] rounded-t-full h-[95%]" />
                <div className="w-4 bg-[#4648d4]/10 rounded-t-full h-[10%]" />
                <div className="w-4 bg-[#4648d4]/10 rounded-t-full h-[10%]" />
              </div>
              <div className="flex justify-between px-1 text-[10px] text-[#464554]/40 font-semibold">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-[#464554] text-center">
              You're in the{" "}
              <span className="text-[#4648d4] font-bold">top 5%</span> of
              focused users today. Keep it up!
            </p>
          </div>
        </div>
      </main>

      {/* Mobile FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-[#4648d4] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 md:hidden">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Dashboard;
