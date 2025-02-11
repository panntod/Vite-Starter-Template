import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "px-6 py-3 inline-flex items-center rounded-full transition duration-300 ease-in-out transform hover:scale-105",
  {
    variants: {
      variant: {
        solid: "bg-blue-600 text-slate-100 hover:bg-blue-700 hover:text-slate-200",
        outlined: "bg-transparent border border-blue-600 text-blue-500 hover:bg-blue-700 hover:text-slate-200",
        ghost: "border border-transparent text-blue-600 hover:border-blue-600"
      }
    },
    defaultVariants: {
      variant: "solid"
    }
  }
);
