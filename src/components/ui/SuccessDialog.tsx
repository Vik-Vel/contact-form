"use client";

import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SuccessDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  description?: string;
};

export function SuccessDialog({
  isOpen,
  setIsOpen,
  title = "Message Sent!",
  description = "Thank you! We'll get back to you shortly. Quack Quack!",
}: SuccessDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white dark:bg-slate-800 rounded-none shadow-xl max-w-md">
        <DialogHeader className="border-b border-gray-200 dark:border-gray-700 p-5">
          <DialogTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
            <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
              <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="px-5 py-4 rounded-b-lg flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-[#272823] hover:bg-gray-800 text-white text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
