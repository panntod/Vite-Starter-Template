import cn from "@/lib/clsx";
import { SIZE_VARIANT } from "../constant/SIZE";
import { TypographyProps } from "../types/Typography.type";

export function Typography({ children, size = "BODY_MD_NORMAL", className = "" }: Readonly<TypographyProps>) {
  const { className: sizeClassName, tag: Tag } = SIZE_VARIANT[size];

  const Element = Tag as keyof JSX.IntrinsicElements;

  return <Element className={cn("text-wrap text-white", sizeClassName, className)}>{children}</Element>;
}
