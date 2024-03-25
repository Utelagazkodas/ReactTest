import { IconType } from "react-icons";
import { FaPython } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";

let content: { Name: string; Description: React.ReactNode; Icon: IconType }[] = [
  { Name: "Python", Description: <div>Python is garbage but i started with it and it taught me the basics of programming. (I hate to admit but it is quite good for just fucking around and making garbage stuff quickly)</div>, Icon: FaPython },
  { Name: "C#", Description: <div>After Learning python i switched to C# and made some games with unity which you can find on <a className="text-purple-300" href="https://utelagazkodas.itch.io/">my Itch.io page</a>. They are not very good tho lol</div>, Icon: FaUnity },
  { Name: "Rust", Description: <div>Im sure rust is great, the little i used it i was really impressed with it, i tried bevy and i made some smaller stuff in it, but im just too dumb to know how to use even just a fraction of it properly.</div>, Icon: FaRust },

];

export function Languages() {
  return (
    <div className="flex flex-wrap m-5 place-content-center mx-22">
      {content.map((item) => (
        <Card
          LanguageIcon={item.Icon}
          LanguageDescription={item.Description}
          LanguageName={item.Name}
        />
      ))}
    </div>
  );
}

interface CardContent {
  LanguageIcon: IconType;
  LanguageDescription: React.ReactNode;
  LanguageName: string;
}

export function Card({
  LanguageDescription,
  LanguageIcon,
  LanguageName,
}: CardContent) {
  return (
    <div className="bg-teal-700 w-80 aspect-[9/12] text-sky-50 p-2 rounded-xl m-3 peer-hover:blur">
      <div className="flex m-2 place-content-between">
        <LanguageIcon className="size-10"/> <div className="text-3xl">{LanguageName}</div>
      </div>
      <hr/> <div className="text-xl text-justify">{LanguageDescription}</div>
    </div>
  );
}
