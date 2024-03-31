import { IconType } from "react-icons";
import { FaPython } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

let content: { Name: string; Description: React.ReactNode; Icon: IconType }[] = [
  { Name: "Python", Description: <div>Python is garbage but i started with it and it taught me the basics of programming. (I hate to admit but it is quite good for just fucking around and making garbage stuff quickly)</div>, Icon: FaPython },
  { Name: "C#", Description: <div>After Learning python i switched to C# and made some games with unity which you can find on <a className="text-purple-300" href="https://utelagazkodas.itch.io/">my Itch.io page</a>. They are not very good tho lol</div>, Icon: FaUnity },
  { Name: "Rust", Description: <div>Im sure rust is great, the little i used it i was really impressed with it, i tried bevy and i made some smaller stuff in it, but im just too dumb to know how to use even just a fraction of it properly.</div>, Icon: FaRust },
  { Name: "HTML", Description: <div>I quite enjoy HTML it is nothing too fancy but it will be useful for some other languages i will mention later :D <br/> I dont know what to say about html it exists i guess
  </div>, Icon: FaHtml5 },
  { Name: "CSS", Description: <div>CSS is the most annoying shit ever created by mankind and i despise it. So i switched to something i will mention later on, i made some websites with PURE html and css and maaaaaan, that takes patience and a lot of fucking around and finding out</div>, Icon: FaCss3Alt },
  { Name: "JavaScript", Description: <div>Essential for making web apps (unfortunately) it is the third thing you need to learn for front end work and it is something i despise too, (but for backend it is quite fun) and beacause of that i switched to...</div>, Icon: IoLogoJavascript },
  { Name: "TypeScript", Description: <div>...TypeSript, my beloved, I LOVE THIS LANGUAGE SO MUCH, it made me enjoy backend even more and kinda like frontend work with... </div>, Icon:  SiTypescript },
  { Name: "React", Description: <div>...React, i have just started using react but so far i really like it and using...</div>, Icon:  FaReact },
  { Name: "Tailwind", Description: <div>...Tailwind CSS instead of regular CSS is just the cherry on top</div>, Icon:  SiTailwindcss },
  
  

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
    <div className="bg-teal-700 w-80 aspect-[9/12] text-sky-50 p-2 rounded-xl m-3 peer-hover:blur hover:translate-y-[-0.75rem] transition-all">
      <div className="flex m-2 place-content-between">
        <LanguageIcon className="size-10"/> <div className="text-3xl">{LanguageName}</div>
      </div>
      <hr className=""/> <div className="text-xl text-justify">{LanguageDescription}</div>
    </div>
  );
}
