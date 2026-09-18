import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";
import { useState } from "react";

export function TimerSettingDialog({ onChangeDuration }) {
  const [open, setOpen] = useState(false);
  const [minutes, setMinutes] = useState(25);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = Number(minutes);
    if (!parsed || parsed <= 0) return; // guard against empty/0/negative input
    onChangeDuration(parsed);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button className="w-12 h-12 flex items-center justify-center rounded-xl text-[#464554] hover:text-[#4648d4] transition-colors bg-white/70 backdrop-blur-xl border border-white/20">
            <Settings className="w-5 h-5" />
          </button>
        }
      />
      <DialogContent className="sm:max-w-sm bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-3xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-[#0b1c30] font-bold">
              Set Timer Duration
            </DialogTitle>
            <DialogDescription className="text-[#464554]">
              Choose how many minutes your focus session should run.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label
                htmlFor="minutes"
                className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
              >
                Minutes
              </Label>
              <Input
                id="minutes"
                name="minutes"
                type="number"
                min="1"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button
                  variant="outline"
                  className="rounded-xl border-[#4648d4]/20 text-[#464554] hover:bg-white/40"
                >
                  Cancel
                </Button>
              }
            />
            <Button
              type="submit"
              className="rounded-xl bg-[#4648d4] text-white hover:bg-[#4648d4]/90 shadow-lg shadow-[#4648d4]/20 text-xs font-semibold tracking-wider uppercase"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TimerSettingDialog;
