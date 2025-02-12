import { generateUUID } from "@/utils/generateUUID";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { toastAtom } from "../store/atom";
import { IToast } from "../types/Toast.type";

export const useToast = () => {
  const [toasts, setToasts] = useAtom(toastAtom);

  const addToast = useCallback(
    (message: string, type: IToast["type"] = "info", duration: number = 3000) => {
      const id = generateUUID();
      setToasts(prev => [...prev, { id, message, type }]);

      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, duration);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: string) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    },
    [setToasts]
  );

  return { toasts, addToast, removeToast };
};
