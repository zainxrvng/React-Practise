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
    onAddtask(formdata);
    console.log("form Submitted", formdata);
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="w-full bg-[#6063ee] text-[#fffbff] rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#4648d4]/20 active:scale-[0.98] transition-all"
          >
            New Task
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handelSubmit}>
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>Make A New Task</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formdata.title}
                onChange={handelChange}
              />
            </Field>
            <Field>
              <Label htmlFor="priorty">Priority</Label>
              <Input
                id="priority"
                name="priority"
                value={formdata.priority}
                onChange={handelChange}
              />
            </Field>
            <Field>
              <Label htmlFor="project">Project</Label>
              <Input
                id="project"
                name="project"
                value={formdata.project}
                onChange={handelChange}
              />
            </Field>
            <Field>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={formdata.description}
                onChange={handelChange}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDemo;
