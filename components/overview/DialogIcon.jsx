import { createContext } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function DialogComponent({ children }) {
  const DialogContext = createContext();
  return (
    <DialogContext.Provider value={{}}>
      <Dialog>{children}</Dialog>
    </DialogContext.Provider>
  );
}

function DialogTriggerComp({ children }) {
  return <DialogTrigger>{children}</DialogTrigger>;
}

function DialogContentComp({ title, description, children }) {
  return (
    <DialogContent>
      <DialogHeader>
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && (
          <DialogDescription className="text-sm text-muted-foreground">
            {description}
          </DialogDescription>
        )}
      </DialogHeader>
      {children}
    </DialogContent>
  );
}

DialogComponent.Trigger = DialogTriggerComp;
DialogComponent.Content = DialogContentComp;
// DialogComponent.Header = DialogHeader;
