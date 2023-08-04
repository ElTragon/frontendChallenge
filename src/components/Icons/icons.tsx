import React from "react";
import IconCart from "./cart";
import IconInstagram from "./instagram";
import IconRightArrow from "./rightArrow";
import IconLogo from "./logo";
import IconLeftChevron from "./leftChevron";
import IconMinus from "./minus";
import IconPlus from "./plus";
import IconYoutube from "./youtube";
import IconTwitter from "./twitter";

type Props = {
  name: string;
};

const Icon = ({ name }: Props) => {
  switch (name) {
    case "cart":
      return <IconCart />;
    case "instagram":
      return <IconInstagram />;
    case "rightArrow":
      return <IconRightArrow />;
    case "leftChevron":
      return <IconLeftChevron />;
    case "rightChevron":
      return <IconRightArrow />;
    case "minus":
      return <IconMinus />;
    case "plus":
      return <IconPlus />;
    case "youtube":
      return <IconYoutube />;
    case "twitter":
      return <IconTwitter />;
    default:
      return <IconLogo />;
  }
};

export default Icon;
