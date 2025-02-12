import { ButtonLink } from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import { useToast } from "@/components/Toast";
import { Typography } from "@/components/Typography";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t, i18n } = useTranslation("landing");
  const { addToast } = useToast();

  const changeLanguage = (locales: "en" | "id") => {
    if (i18n.language !== locales) {
      i18n.changeLanguage(locales);
      addToast(t("toast"), "success");
    }
  };

  const data = [
    { title: "Indonesia", onClick: () => changeLanguage("id") },
    { title: "English", onClick: () => changeLanguage("en") }
  ];

  return (
    <section className="min-h-screen w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-12 sm:gap-24 px-4 sm:px-0">
      <section className="w-full sm:w-[630px] space-y-2">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-0 sm:gap-4">
          <Typography
            size="DISPLAY_3XL"
            className="bg-gradient-to-br text-transparent bg-clip-text from-blue-500 via-purple-500 to-pink-400"
          >
            Vite
          </Typography>
          <span className="text-white text-3xl sm:text-5xl font-bold">+</span>
          <Typography
            size="DISPLAY_3XL"
            className="bg-gradient-to-b text-transparent bg-clip-text from-blue-400 to-blue-600"
          >
            React
          </Typography>
          <span className="text-white text-3xl sm:text-5xl font-bold">+</span>
          <Typography
            size="DISPLAY_3XL"
            className="bg-gradient-to-b text-transparent bg-clip-text from-blue-600 to-blue-800 leading-[140%]"
          >
            Typescript
          </Typography>
        </div>

        <Typography size="DISPLAY_2XL">{t("title")}</Typography>

        <Typography size="DISPLAY_XL" className="text-wrap text-gray-400 mb-4 sm:mb-8">
          {t("description")}
        </Typography>

        <div className="flex flex-col lg:flex-row gap-2 justify-center sm:justify-start">
          <ButtonLink variant="outlined" href="https://link.pandhuarya.my.id">
            {t("button.profile")}
          </ButtonLink>

          <Dropdown>
            <Dropdown.Button className="w-full lg:w-auto" variant="solid">
              {t("button.dropdown")}
            </Dropdown.Button>
            <Dropdown.Body data={data} />
          </Dropdown>
        </div>
      </section>

      <aside className="relative flex justify-center items-center w-full sm:w-auto">
        <figure className="z-10 w-32 sm:w-72 h-auto">
          <img src="/vite.svg" alt="vite's logo" className="object-contain" width={300} height={300} />
        </figure>
        <div className="absolute w-52 sm:w-96 h-52 sm:h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full blur-3xl" />
      </aside>
    </section>
  );
};

export default Landing;
