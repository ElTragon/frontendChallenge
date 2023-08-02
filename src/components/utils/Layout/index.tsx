import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SeoHeader from "../SeoHeader";

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
    <html lang="en">
      <SeoHeader {...props} />
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
