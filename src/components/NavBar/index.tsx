import Icon from "../Icons/icons";
import ViewCart from "../ViewCart";
import css from "./index.module.css";

export default function NavBar() {
  return (
    <nav className={css.container}>
      <div className={css.logo}>
        <Icon name={"logo"} />
        <div className={css.text}>SUN CO.</div>
      </div>

      <ViewCart />
    </nav>
  );
}
