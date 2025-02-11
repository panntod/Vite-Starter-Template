import cn from "@/lib/clsx";
import { PropsWithChildren } from "react";
import { ButtonLinkProps } from "../types/Button.type";
import { buttonVariants } from "../utils/generate";

export function ButtonLink({ variant, className = "", href, ...props }: PropsWithChildren<ButtonLinkProps>) {
  return <a href={href} className={cn(buttonVariants({ variant }), className)} {...props} />;
}
