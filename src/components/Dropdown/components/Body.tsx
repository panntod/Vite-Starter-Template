import { useContext } from "react";
import { DropdownContext } from "../store/Dropdown.context";
import { DropdownBodyProps } from "../types/Dropdown.type";

export const DropdownBody = ({ data, children }: DropdownBodyProps) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownBody must be used within a Dropdown");
  const { isOpen, setIsOpen } = context;

  if (!isOpen) return null;
  return (
    <div className="absolute z-10 mt-2 divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-gray-700">
      <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
        {data
          ? data.map((item, index) => (
              <li key={index}>
                <button
                  onClick={e => {
                    e.preventDefault();
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className="block w-full text-start px-4 py-2 hover:bg-gray-600 hover:text-white"
                >
                  {item.title}
                </button>
              </li>
            ))
          : children}
      </ul>
    </div>
  );
};
