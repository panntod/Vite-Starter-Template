import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { buttonVariants } from "../utils/generate";

export interface ButtonProps extends ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {
  type?: "button" | "reset" | "submit";
  isDisabled?: boolean;
  className?: string;
}

export interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  href: string;
}
