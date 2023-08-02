import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import css from "./index.module.css";

type Props = {
  children: JSX.Element;
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  route: string;
};

export default function Layout({ children, ...props }: Props) {
  return (
    <div className={css.container}>
      <NavBar />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
}
