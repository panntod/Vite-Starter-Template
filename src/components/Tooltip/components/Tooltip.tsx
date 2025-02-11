"use client";

import { Typography } from "@/components/Typography";
import cn from "@/lib/clsx";
import React, { PropsWithChildren, useState } from "react";
import { PropsTooltip } from "../types/Tooltip.types";
import { getSize, tooltipVariants } from "../utils/generate";

export const Tooltip = ({
  id,
  children,
  renderContent,
  position = "bottom",
  size = "small",
  flexDirection = "bottom"
}: PropsWithChildren<PropsTooltip>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div id={id} className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {open && (
        <div className={cn(tooltipVariants({ position, flexDirection }))}>
          <div className="bg-gray-700 rounded py-2 px-3 w-full h-auto">
            <Typography size={getSize(size)} className="text-center text-nowrap">
              {renderContent}
            </Typography>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
