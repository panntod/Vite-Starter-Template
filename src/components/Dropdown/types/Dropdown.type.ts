import { buttonVariants } from "@/components/Button/utils/generate";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

export interface DropdownBodyProps {
  data?: { title: string; onClick: () => void }[];
  children?: ReactNode;
}

export interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DropdownButtonProps = VariantProps<typeof buttonVariants>;
