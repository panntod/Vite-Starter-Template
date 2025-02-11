import { ReactNode } from "react";
import { SizeVariant } from "../constant/SIZE";

export interface TypographyProps {
  children: ReactNode;
  size?: SizeVariant;
  className?: string;
}
