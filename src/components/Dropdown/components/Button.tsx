import { Button } from "@/components/Button";
import cn from "@/lib/clsx";
import { ChevronDown } from "lucide-react";
import { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "../store/dropdown";
import { DropdownButtonProps } from "../types/Dropdown.type";

export const DropdownButton = ({
  children,
  variant = "outlined",
  className = ""
}: PropsWithChildren<DropdownButtonProps>) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownButton must be used within a Dropdown");
  const { isOpen, setIsOpen } = context;

  return (
    <Button
      className={cn("justify-between", className)}
      variant={variant}
      id="dropdownDefaultButton"
      onClick={() => setIsOpen(prev => !prev)}
    >
      {children}
      <ChevronDown className={cn("ms-3 transform transition-transform", { "transform -rotate-180": isOpen })} />
    </Button>
  );
};
