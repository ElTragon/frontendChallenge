import Icon from "../Icons/icons";
import ViewCart from "../ViewCart";
import css from "./index.module.css";

export default function NavBar() {
  return (
    <div className={css.container}>
      <div className={css.Logo}>
        <Icon name={"logo"} /> SUN CO.
      </div>

      <ViewCart />
    </div>
  );
}