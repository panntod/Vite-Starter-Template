import { SizeVariant } from "@/components/Typography";
import { cva } from "class-variance-authority";
import { SizeTooltip } from "../types/Tooltip.types";

export const tooltipVariants = cva("absolute pointer-events-none animate-fade-in", {
  variants: {
    position: {
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
    },
    flexDirection: {
      bottom: "flex-col",
      left: "flex-row-reverse",
      right: "flex-row",
      top: "flex-col-reverse"
    }
  },
  defaultVariants: {
    position: "bottom",
    flexDirection: "bottom"
  }
});

export const getSize = (size: SizeTooltip): SizeVariant => {
  switch (size) {
    case "small":
      return "BODY_SM_NORMAL";
    case "medium":
      return "BODY_MD_NORMAL";
    case "large":
      return "BODY_LG_NORMAL";
    default:
      return "BODY_SM_NORMAL";
  }
};
