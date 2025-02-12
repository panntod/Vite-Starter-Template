import { Accordion, AccordionData } from "@/components/Accordion";
import { Typography } from "@/components/Typography";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation("faq");
  const data = t("accordion", { returnObjects: true }) as AccordionData[];

  return (
    <section className="min-h-screen w-full flex flex-col items-center gap-12 sm:gap-24 p-4">
      <Typography size="DISPLAY_3XL">{t("title")}</Typography>
      <Accordion data={data} i18nIsDynamicList showNumber />
    </section>
  );
};

export default Faq;
