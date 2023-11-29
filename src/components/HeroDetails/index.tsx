import { spidermanFont } from "@/fonts/index";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  data: IHeroData;
}

export default function HeroDetails({ data }: IProps) {
  const { name, universe } = data;

  return (
    <div>
      <h1 className={`${spidermanFont.className}`}>oi</h1>
    </div>
  );
}
