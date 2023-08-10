import { useState } from "react";
import css from "./index.module.css";
import Image from "next/image";
import Icon from "../Icons/icons";
import IconLeftChevron from "../Icons/leftChevron";
import IconRightChevron from "../Icons/rightChevron";
import IconDarkDot from "../Icons/darkDot";
import IconGrayDot from "../Icons/grayDot";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState<number>(0);

  if (images.length === 0) {
    return (
      <div className={css.container}>
        <h2>Images coming soon</h2>
      </div>
    );
  }
  return (
    <div className={css.container}>
      <Image src={images[index]} alt="currentShoe" width={573} height={375} />
      <div className={css.iconsContainer}>
        <IconLeftChevron />

        <div className={css.dotsContainer}>
          {images.map((_, i) => {
            if (i === images.length) {
              return <IconDarkDot key={i} />;
            }
            return <IconGrayDot key={i} />;
          })}
        </div>

        <IconRightChevron />
      </div>
    </div>
  );
}
