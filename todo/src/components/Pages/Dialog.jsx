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

export function DialogDemo() {
  return (
    <Dialog>
      <form>
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
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>
              Make A New Task
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="title" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Priority</Label>
              <Input id="username-1" name="Priority" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Project</Label>
              <Input id="username-1" name="project" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Input id="username-1" name="username" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default DialogDemo