import { IconType } from "react-icons";
import { FaPython } from "react-icons/fa";

let content: { Name: string; Description: string; Icon: IconType }[] = [
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
  { Name: "Python", Description: "Python is garbage", Icon: FaPython },
];

export function Languages() {
  return (
    <div className="flex flex-wrap place-content-center m-5 px-22">
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
  LanguageDescription: String;
  LanguageName: string;
}

export function Card({
  LanguageDescription,
  LanguageIcon,
  LanguageName,
}: CardContent) {
  return <div className="bg-teal-700 w-72 aspect-[9/16] text-sky-50 p-2 rounded-xl m-3 peer-hover:blur"><LanguageIcon/> {LanguageName} <hr /> {LanguageDescription}</div>;
}
