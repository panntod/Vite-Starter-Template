import { ButtonLink } from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import { Typography } from "@/components/Typography";

export default function Landing() {
  const data = [
    { title: "Indonesia", onClick: () => alert("id_ID") },
    { title: "English", onClick: () => alert("en_EN") }
  ];

  return (
    <main className="h-screen w-screen flex flex-col-reverse sm:flex-row justify-center items-center bg-gray-900 gap-24 px-4 sm:px-0">
      <section className="w-full sm:w-[630px] space-y-2">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-0 sm:gap-4">
          <Typography
            size="DISPLAY_XL"
            className="font-bold text-4xl sm:text-6xl bg-gradient-to-br text-transparent bg-clip-text from-blue-500 via-purple-500 to-pink-400"
          >
            Vite
          </Typography>
          <span className="text-white text-3xl sm:text-5xl font-bold">+</span>
          <Typography
            size="DISPLAY_XL"
            className="font-bold text-4xl sm:text-6xl bg-gradient-to-b text-transparent bg-clip-text from-blue-400 to-blue-600"
          >
            React
          </Typography>
          <span className="text-white text-3xl sm:text-5xl font-bold">+</span>
          <Typography
            size="DISPLAY_XL"
            className="font-bold text-4xl sm:text-6xl bg-gradient-to-b text-transparent bg-clip-text from-blue-600 to-blue-800"
          >
            Typescript
          </Typography>
        </div>

        <Typography size="DISPLAY_XL" className="font-bold text-4xl sm:text-6xl text-white">
          Next Generation Frontend Tooling
        </Typography>

        <Typography size="DISPLAY_LG" className="text-wrap text-gray-400 mb-8">
          Get ready for a development environment that can finally catch up with you.
        </Typography>

        <div className="flex gap-2 justify-center sm:justify-start">
          <ButtonLink variant="outlined" href="https://link.pandhuarya.my.id">
            See Developer Profile
          </ButtonLink>

          <Dropdown>
            <Dropdown.Button variant="solid">Language</Dropdown.Button>
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
    </main>
  );
}
