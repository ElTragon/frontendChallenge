import css from "./index.module.css";

type Props = {
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
};

export default function Button({ text, icon, onClick }: Props) {
  return (
    <button className={css.container} onClick={() => onClick()}>
        <div className={css.text}>{text}</div>
        {icon}
    </button>
  );
}
