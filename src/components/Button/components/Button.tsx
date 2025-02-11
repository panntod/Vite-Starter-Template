import cn from "@/lib/clsx";
import { ButtonProps } from "../types/Button.type";
import { buttonVariants } from "../utils/generate";

export function Button({ children, onClick, className = "", variant = "solid", ...props }: Readonly<ButtonProps>) {
  return (
    <button onClick={onClick} className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
