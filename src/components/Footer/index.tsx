import Icon from "../Icons/icons";
import ViewCart from "../ViewCart";
import css from "./index.module.css";

const socials = ["instagram", "twitter", "youtube"]; // in the real-word this would be some object and have some link

function SocialIcons() {
  return (
    <div className={css.socialContainer}>
      {socials.map((social) => {
        return <Icon key={social} name={social} />;
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={css.container}>
      <div className={css.logo}>
        <Icon name={"logo"} />
        <div className={css.logoText}>SUN CO.</div>
      </div>

      <div className={css.text}>
        © 2023 dot.cards text task. All rights reserved
      </div>

      <SocialIcons />
    </footer>
  );
}
