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
import { useState } from "react";

export function DialogDemo({ onAddtask }) {
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    project: "",
    priority: "",
  });

  const handelChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!formdata.title || !formdata.description) return 
    onAddtask(formdata);
    console.log("form Submitted", formdata);
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="w-full bg-[#6063ee] text-[#fffbff] rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#4648d4]/20 active:scale-[0.98] transition-all border-none hover:bg-[#4648d4]"
          >
            New Task
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-3xl">
        <form onSubmit={handelSubmit}>
          <DialogHeader>
            <DialogTitle className="text-[#0b1c30] font-bold">
              New Task
            </DialogTitle>
            <DialogDescription className="text-[#464554]">
              
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label
                htmlFor="title"
                className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
              >
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formdata.title}
                onChange={handelChange}
                className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30"
              />
            </Field>
            <Field>
              <Label
                htmlFor="priority"
                className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
              >
                Priority
              </Label>
              <Input
                id="priority"
                name="priority"
                value={formdata.priority}
                onChange={handelChange}
                className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30"
              />
            </Field>
            <Field>
              <Label
                htmlFor="project"
                className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
              >
                Project
              </Label>
              <Input
                id="project"
                name="project"
                value={formdata.project}
                onChange={handelChange}
                className="bg-white/60 border-[#4648d4]/10 rounded-xl focus-visible:ring-2 focus-visible:ring-[#4648d4]/20 focus-visible:border-[#4648d4]/30"
              />
            </Field>
            <Field>
              <Label
                htmlFor="description"
                className="text-[10px] font-semibold tracking-wider uppercase text-[#464554]"
              >
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={formdata.description}
                onChange={handelChange}
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
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDemo;