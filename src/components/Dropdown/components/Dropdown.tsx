import { ReactNode, useState } from "react";
import { DropdownContext } from "../store/Dropdown.context";
import { DropdownBody } from "./Body";
import { DropdownButton } from "./Button";

const DropdownComponent = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
};

export const Dropdown = Object.assign(DropdownComponent, {
  Button: (() => null) as unknown as typeof DropdownButton,
  Body: (() => null) as unknown as typeof DropdownBody
});
