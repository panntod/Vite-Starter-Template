import { ReactNode } from "react";

export interface AccordionData {
  title: string;
  content: ReactNode | string;
}
export interface AccordionProps {
  showNumber?: boolean;
  data: AccordionData[];
}
