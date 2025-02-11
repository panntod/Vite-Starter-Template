import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { tooltipVariants } from "../utils/generate";

export interface PropsTooltip extends VariantProps<typeof tooltipVariants> {
  id: string;
  size: SizeTooltip;
  renderContent: ReactNode;
}

export interface OptionTooltip {
  width: number;
  height: number;
  positionValue: number;
}

export type SizeTooltip = "small" | "medium" | "large";
