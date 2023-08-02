import css from "./index.module.css";
import { capitalize } from "@/utils/capitalize";
import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icons/icons";

type Props = {
  season: string;
  deal: number;
};

export default function SeasonSale({ season, deal }: Props) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <h3 className={css.deal}>{deal}% OFF</h3>
        <h2 className={css.sale}>{capitalize(season)} Sale</h2>
        <div className={css.footerText}>
          Discover our {season} styles with a discount
        </div>
        <Button
          text="Shop Now"
          onClick={() => console.log("clicked")}
          icon={<Icon name={"rightArrow"} />}
        />
      </div>

      <Image
        src={"/images/hero.png"}
        alt="hero6 shoe"
        width={490}
        height={321}
      />
    </div>
  );
}
