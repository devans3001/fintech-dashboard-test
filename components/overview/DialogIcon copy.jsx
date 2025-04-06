import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function DialogIcon({ icon }) {

  const DialogContext = createContext();
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="rounded-[50%] text-lg bg-gray-100 cursor-pointer hover:bg-white transition-all duration-300">
          {icon}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Some</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
