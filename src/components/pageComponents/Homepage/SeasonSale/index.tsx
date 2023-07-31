import Image from "next/image";
import css from "./index.module.css";
import { capitalize } from "@/utils/capitalize";
import Button from "@/components/Button";

type Props = {
  season: string;
  deal: number;
};

export default function SeasonSale({ season, deal }: Props) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <h3>{deal}% OFF</h3>
        <h2>{capitalize(season)} Sale</h2>
        <div>Discover our {season} styles with a discount</div>
        <Button text="Shop Now" onClick={() => console.log("clicked")} />
      </div>
    </div>
  );
}
