import HomePage from "@/components/pageComponents/Homepage";
import Layout from "@/components/utils/Layout";
import { ProductProvider } from "@/contexts/products";

export default function Home() {
  return (
    <Layout
      route={""}
      title={"Homepage"}
      description={"Creased Jordans, we got you"}
    >
      <ProductProvider>
        <HomePage />
      </ProductProvider>
    </Layout>
  );
}
