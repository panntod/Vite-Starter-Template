import { cva } from "class-variance-authority";

export const toastVariants = cva("flex items-center gap-3 p-4 rounded-md shadow-lg max-w-xs text-white", {
  variants: {
    type: {
      success: "bg-green-500",
      error: "bg-red-500",
      info: "bg-blue-500"
    }
  },
  defaultVariants: {
    type: "info"
  }
});
