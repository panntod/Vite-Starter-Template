import { Button } from "@/components/Button";
import cn from "@/lib/clsx";
import { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "../store/Dropdown.context";
import { DropdownButtonProps } from "../types/Dropdown.type";

export const DropdownButton = ({
  children,
  variant = "outlined",
  className = ""
}: PropsWithChildren<DropdownButtonProps>) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownButton must be used within a Dropdown");
  const { setIsOpen } = context;

  return (
    <Button
      className={cn("justify-between", className)}
      variant={variant}
      id="dropdownDefaultButton"
      onClick={() => setIsOpen(prev => !prev)}
    >
      {children}
      <svg
        className={cn("w-2.5 h-2.5 ms-3 transform transition-transform", { "transform -rotate-180": context.isOpen })}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
    </Button>
  );
};
