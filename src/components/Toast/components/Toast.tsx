import cn from "@/lib/clsx";
import { X } from "lucide-react";
import { IToast } from "../types/Toast.type";
import { toastVariants } from "../utils";

export const Toast = ({ message, type, onClose }: IToast & { onClose: () => void }) => {
  return (
    <div className={cn(toastVariants({ type }))}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-auto text-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
