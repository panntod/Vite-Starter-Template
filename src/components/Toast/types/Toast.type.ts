import { VariantProps } from "class-variance-authority";
import { toastVariants } from "../utils";

export interface IToast extends VariantProps<typeof toastVariants> {
  id: string;
  message: string;
}
