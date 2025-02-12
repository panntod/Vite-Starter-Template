import { useToast } from "../hooks/use-toast";
import { Toast } from "./Toast";

export const Toaster = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
      {toasts.map(({ id, message, type }) => (
        <Toast key={id} id={id} message={message} type={type} onClose={() => removeToast(id)} />
      ))}
    </div>
  );
};
