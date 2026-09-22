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
  Trash2,
  LogOut,
} from "lucide-react";
import DialogDemo from "../Pages/Dialog";
import { useEffect, useState } from "react";
import useTimmer from "@/hooks/use-timer";
import { supabase } from "@/lib/supabaseClient";
import TimerSettingDialog from "./TimerSettingsDialog";
import ThemeToggle from "./ThemeToggle";

// Colors are hardcoded as Tailwind arbitrary values (Luminous Clarity).
// Every light color has a dark: partner:
//   page bg     #f8f9ff -> #0b1020
//   glass cards white/70 -> white/5
//   headings    #0b1c30 -> #e6e9ff
//   body/muted  #464554 -> #a3a6c2
//   accent      #4648d4 -> #8b8dff (text/strokes) or #6063ee (fills)

function Dashboard() {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    timmer,
    isRunning,
    toggle,
    reset,
    changeDuration,
    formattedTime,
    totalSeconds,
  } = useTimmer(25);
  const [searchTerm, setSearchTerm] = useState({
    search: "",
  });
  const [activeProject, setActiveProject] = useState(null);

  const handelChange = (e) => {
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  const addTask = async (newtask) => {
    const { error } = await supabase
      .from("task")
      .insert([{ ...newtask, done: false }]);

    if (error) console.log("Error adding a new task", error.message);
  };

  const visableTask = task.filter((t) => {
    const searchData = t.title
      .toLowerCase()
      .includes(searchTerm.search.toLowerCase());
    const matchesProject = !activeProject || t.project === activeProject;
    return searchData && matchesProject;
  });
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const remainingTask = task.filter((t) => !t.done).length;

  const toggleTask = async (id, currentDone) => {
    const { error } = await supabase
      .from("task")
      .update({ done: !currentDone })
      .eq("id", id);

    if (error) console.log("error while toggle taks", error.message);
  };

  const totalTask = task.length;
  const completedTask = task.filter((t) => t.done).length;
  const progress =
    totalTask === 0 ? 0 : Math.round((completedTask / totalTask) * 100);

  // for projects duplicates
  const uniqueProjects = [...new Set(task.map((t) => t.project))];

  /// for supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("task").select("*");
      if (!error) setTask(data);
      setIsLoading(false);
    };
    fetchData();

    // listen for changes
    const channel = supabase
      .channel("task-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "task" },
        (payload) => {
          console.log("realtime event:", payload.eventType, payload);
          fetchData();
        },
      )
      .subscribe((status) => {
        console.log("subscription status:", status); // temp
      });

    // clean up
    return () => supabase.removeChannel(channel);
  }, []);

  const deleteTask = async (id) => {
    console.log("delete is clicked", id);
    const { error } = await supabase.from("task").delete().eq("id", id);

    if (error) console.log("an error has come ", error.message);
  };

  // progress bar
  const weeklyProgress = (() => {
    const days = ["S", "M", "T", "W", "T", "F", "S"]; // Sun-Sat, JS getDay() order
    const buckets = Array(7)
      .fill(null)
      .map(() => ({ total: 0, done: 0 }));

    task.forEach((t) => {
      const dayIndex = new Date(t.created_at).getDay(); // 0 = Sunday
      buckets[dayIndex].total += 1;
      if (t.done) buckets[dayIndex].done += 1;
    });

    return days.map((label, i) => ({
      label,
      percent:
        buckets[i].total === 0
          ? 0
          : Math.round((buckets[i].done / buckets[i].total) * 100),
      isToday: i === new Date().getDay(),
    }));
  })();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="bg-[#f8f9ff] dark:bg-[#0b1020] text-[#0b1c30] dark:text-[#e6e9ff] min-h-screen font-sans">
      {/* Top AppBar */}
      <header className="fixed top-0 left-64 right-0 z-40 bg-white/70 dark:bg-[#0b1020]/70 backdrop-blur-xl border-b border-white/20 dark:border-white/10 h-16 flex items-center justify-between px-10">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#464554] dark:text-[#a3a6c2] w-5 h-5" />
          <input
            className="w-full bg-white/40 dark:bg-white/5 dark:text-[#e6e9ff] dark:placeholder:text-[#a3a6c2]/60 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#4648d4]/20 dark:focus:ring-[#8b8dff]/30 transition-all"
            placeholder="Search tasks or projects..."
            value={searchTerm.search}
            onChange={handelChange}
            name="search"
            id="search"
          />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold tracking-wider uppercase text-[#464554] dark:text-[#a3a6c2] hover:bg-white/60 dark:hover:bg-white/10 transition"
          >
            <LogOut size={16} />
            Sign out
          </button>
          <button className="text-[#464554] dark:text-[#a3a6c2] hover:bg-white/40 dark:hover:bg-white/10 p-2 rounded-full transition-colors active:scale-95">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-[#464554] dark:text-[#a3a6c2] hover:bg-white/40 dark:hover:bg-white/10 p-2 rounded-full transition-colors active:scale-95">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#4648d4]/20 dark:border-white/20 cursor-pointer active:scale-95 transition-transform">
            <img
              className="w-full h-full object-cover"
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYgr1lhPKMP-elVDOkDKXetDsEOIFCfwpLFRTHYKeR-Vbd0uRgqu7uvH9i3o8Yaqv2Dhdlr2w-Y9w8kDZN6eY5ZgN5a8CPetH9KgIXKVnuKYkrbG-J_XaFM-34CCfzqxazD4eoQ1RaMAoKG14iT8AAdPynraGbO-DwX8gro2QHOVdRz6HVa5F5lZ8rX20Q3TahHf1dTVQf2w2VRq37vjbzlfoQdId6hl_g5NOJGq8ppjBPdktnvT6t"
            />
          </div>
        </div>
      </header>

      {/* Side Nav */}
      <aside className="fixed left-0 h-full w-64 z-50 bg-white/70 dark:bg-[#0b1020]/80 backdrop-blur-xl border-r border-white/20 dark:border-white/10 flex flex-col p-6 pt-24 space-y-4">
        <div className="px-2 mb-6">
          <DialogDemo onAddtask={addTask} />
        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] dark:text-[#a3a6c2] hover:bg-white/40 dark:hover:bg-white/10 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Inbox className="w-5 h-5 group-hover:text-[#4648d4] dark:group-hover:text-[#8b8dff]" />
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
            className="flex items-center gap-3 px-4 py-3 text-[#464554] dark:text-[#a3a6c2] hover:bg-white/40 dark:hover:bg-white/10 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <ArrowRightLeft className="w-5 h-5 group-hover:text-[#4648d4] dark:group-hover:text-[#8b8dff]" />
            Upcoming
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] dark:text-[#a3a6c2] hover:bg-white/40 dark:hover:bg-white/10 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Folder className="w-5 h-5 group-hover:text-[#4648d4] dark:group-hover:text-[#8b8dff]" />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#464554] dark:text-[#a3a6c2] hover:bg-white/40 dark:hover:bg-white/10 transition-all text-xs font-semibold tracking-wider uppercase group"
          >
            <Settings className="w-5 h-5 group-hover:text-[#4648d4] dark:group-hover:text-[#8b8dff]" />
            Settings
          </a>
        </nav>

        <div className="mt-auto px-4 pb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#464554]/50 dark:text-[#a3a6c2]/60 mb-4">
            Projects
          </p>
          <div className="space-y-3">
            {uniqueProjects.map((projects) => (
              <div
                className={`flex items-center gap-3 group cursor-pointer ${
                  activeProject === projects
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                onClick={() =>
                  setActiveProject((prev) =>
                    prev === projects ? null : projects,
                  )
                }
                key={projects}
              >
                <div className="w-2 h-2 rounded-full bg-[#4648d4] dark:bg-[#8b8dff]" />
                <span
                  className={`text-sm transition-colors ${
                    activeProject === projects
                      ? "text-[#0b1c30] dark:text-[#e6e9ff] font-semibold"
                      : "text-[#464554] dark:text-[#a3a6c2]"
                  }`}
                >
                  {projects}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-24 pb-12 px-10 flex flex-col lg:flex-row gap-8">
        {/* Center: Task List */}
        <div className="flex-grow max-w-[800px]">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-[#0b1c30] dark:text-[#e6e9ff] mb-1">
              Today's Focus
            </h2>
            <p className="text-[#464554] dark:text-[#a3a6c2]">
              {formatedDate} • {remainingTask} tasks remaining
            </p>
          </header>

          <div className="space-y-4">
            {visableTask.map((tasks) => (
              <div
                className="rounded-xl p-6 flex items-center gap-6 transition-all group bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-white/80 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20"
                key={tasks.id}
              >
                <div
                  className={`relative w-6 h-6 border-2 rounded-full cursor-pointer flex items-center justify-center transition-colors ${
                    tasks.done
                      ? "bg-[#4648d4] border-[#4648d4] dark:bg-[#6063ee] dark:border-[#6063ee]"
                      : "border-[#4648d4] dark:border-[#8b8dff] hover:bg-[#4648d4]/5 dark:hover:bg-[#8b8dff]/10"
                  }`}
                  onClick={() => toggleTask(tasks.id, tasks.done)}
                >
                  {tasks.done && (
                    <Check className="text-white w-4 h-4" strokeWidth={3} />
                  )}
                </div>
                <div className={`flex-grow ${tasks.done ? "opacity-50" : ""}`}>
                  <h3
                    className={`text-lg font-semibold text-[#0b1c30] dark:text-[#e6e9ff] mb-1 ${tasks.done ? "line-through" : ""}`}
                  >
                    {tasks.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="bg-[#4648d4]/10 text-[#4648d4] border-[#4648d4]/20 dark:bg-[#8b8dff]/15 dark:text-[#a9abff] dark:border-[#8b8dff]/30 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border">
                      {tasks.priority}
                    </span>
                    <span className="text-[#464554]/60 dark:text-[#a3a6c2]/70 flex items-center gap-1 text-[10px] font-semibold">
                      <Folder className="w-3.5 h-3.5" /> {tasks.project}
                    </span>
                  </div>
                </div>
                <button className="text-[#464554]/40 dark:text-[#a3a6c2]/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-5 h-5" />
                </button>
                <div>
                  <button
                    onClick={() => deleteTask(tasks.id)}
                    className="p-1.5 rounded-lg text-[#464554] dark:text-[#a3a6c2] hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50/70 dark:hover:bg-red-500/10 transition-colors"
                    aria-label="Delete task"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Empty state */}
            {task.length === 0 && (
              <div className="border-2 border-dashed border-[#4648d4]/10 dark:border-white/10 rounded-xl p-8 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/20 dark:hover:bg-white/5 transition-all">
                <PlusCircle className="text-[#4648d4]/40 dark:text-[#8b8dff]/50 w-9 h-9 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-semibold tracking-wider uppercase text-[#464554]/40 dark:text-[#a3a6c2]/50">
                  Add another task to your day
                </p>
              </div>
            )}
            {visableTask.length === 0 && task.length > 0 && (
              <div className="border-2 border-dashed border-[#4648d4]/10 dark:border-white/10 rounded-xl p-8 flex flex-col items-center justify-center gap-2">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#464554]/40 dark:text-[#a3a6c2]/50">
                  No tasks match "{searchTerm.search}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Widgets */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Pomodoro widget */}
          <div className="rounded-3xl p-8 flex flex-col items-center text-center bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#464554] dark:text-[#a3a6c2] mb-6">
              Pomodoro Focus
            </p>
            <div className="relative mb-8 w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  className="text-[#4648d4]/10 dark:text-white/10"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <circle
                  className="text-[#4648d4] dark:text-[#8b8dff] transition-all duration-1000"
                  cx="96"
                  cy="96"
                  fill="transparent"
                  r="88"
                  stroke="currentColor"
                  strokeDasharray="552.92"
                  strokeDashoffset="138.23"
                  strokeWidth="6"
                  style={{
                    strokeDashoffset:
                      552.92 * ((totalSeconds - timmer) / totalSeconds),
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[30px] font-bold text-[#0b1c30] dark:text-[#e6e9ff] tracking-tighter">
                  {formattedTime}
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]/60 dark:text-[#a3a6c2]/70">
                  Work Session
                </span>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <button
                className="flex-grow bg-[#4648d4] dark:bg-[#6063ee] text-white py-3 rounded-xl text-xs font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-[#4648d4]/30 dark:hover:shadow-[#6063ee]/30 active:scale-95 transition-all"
                onClick={() => toggle()}
              >
                {isRunning ? "Stop" : "Start"}
              </button>
              <button
                className="w-12 h-12 flex items-center justify-center rounded-xl text-[#464554] dark:text-[#a3a6c2] hover:text-[#4648d4] dark:hover:text-[#8b8dff] transition-colors bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10"
                onClick={() => reset()}
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <TimerSettingDialog onChangeDuration={changeDuration} />
            </div>
          </div>

          {/* Progress widget */}
          <div className="rounded-3xl p-8 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#464554] dark:text-[#a3a6c2]">
                Daily Progress
              </p>
              <span className="text-[#4648d4] dark:text-[#8b8dff] font-bold text-xs">
                {progress}%
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1 h-32 items-end justify-between px-2">
                {weeklyProgress.map((day, i) => (
                  <div
                    key={i}
                    className={`w-4 rounded-t-full transition-all ${
                      day.isToday
                        ? "bg-[#4648d4] dark:bg-[#8b8dff]"
                        : "bg-[#4648d4]/20 dark:bg-[#8b8dff]/25"
                    }`}
                    style={{ height: `${Math.max(day.percent, 4)}%` }}
                  />
                ))}
              </div>
              {/* Labels now come from weeklyProgress so they match the bars (Sun-first) */}
              <div className="flex justify-between px-1 text-[10px] text-[#464554]/40 dark:text-[#a3a6c2]/60 font-semibold">
                {weeklyProgress.map((day, i) => (
                  <span key={i}>{day.label}</span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-[#464554] dark:text-[#a3a6c2] text-center">
              You're in the{" "}
              <span className="text-[#4648d4] dark:text-[#8b8dff] font-bold">
                top 5%
              </span>{" "}
              of focused users today. Keep it up!
            </p>
          </div>
        </div>
      </main>

      {/* Mobile FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-[#4648d4] dark:bg-[#6063ee] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 md:hidden">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Dashboard;
