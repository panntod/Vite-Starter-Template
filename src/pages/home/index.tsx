import Faq from "./parts/Faq";
import Landing from "./parts/Landing";

export default function Home() {
  return (
    <main className="bg-gray-900 relative">
      <Landing />
      <Faq />
    </main>
  );
}
