import { createContext } from "react";
import { DropdownContextProps } from "../types/Dropdown.type";

export const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);
