import cn from "@/lib/clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Typography } from "../../Typography";
import { AccordionProps } from "../types/Accordion.type";

export function Accordion({ data = [], showNumber = false }: Readonly<AccordionProps>) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => () => {
    setExpanded(prevExpanded => (prevExpanded === panel ? false : panel));
  };

  return (
    <section className="space-y-4 w-full max-w-4xl" id="accordion-collapse" data-accordion="collapse">
      {data.map((item, index) => {
        const panelId = `accordion-panel-${index}`;
        const isExpanded = expanded === panelId;

        return (
          <section id={panelId} key={"key-" + index}>
            <button
              id={`accordion-collapse-heading-${index}`}
              type="button"
              onClick={handleChange(panelId)}
              className={cn(
                `flex items-center justify-between w-full p-4 rtl:text-right border border-gray-100 hover:border-gray-200 text-white z-10 cursor-pointer`,
                isExpanded ? "rounded-t-xl border-b-0 pb-2" : "rounded-xl shadow-lg"
              )}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={isExpanded}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <Typography size="TITLE_LG" className="font-normal text-start">
                {showNumber && `${index + 1}. `} {item.title}
              </Typography>

              <ChevronDown className={cn("transform transition-transform", { "transform -rotate-180": isExpanded })} />
            </button>

            <div
              id={`accordion-collapse-body-${index}`}
              className={cn(
                `rounded-b-xl p-4 pt-0 border border-t-0 shadow-lg border-gray-100 transition-all z-0`,
                isExpanded ? "block" : "hidden"
              )}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              {typeof item.content === "string" ? (
                <Typography size="BODY_LG_NORMAL" className="text-gray-300">
                  {item.content}
                </Typography>
              ) : (
                item.content
              )}
            </div>
          </section>
        );
      })}
    </section>
  );
}
