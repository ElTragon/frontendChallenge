import HomePage from "@/components/pageComponents/Homepage";
import ShopPage from "@/components/pageComponents/ShopPage";
import Layout from "@/components/utils/Layout";
import { ProductProvider } from "@/contexts/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Creased Jordans, we got you",
};

export default function Page() {
  return (
    <Layout
      route={""}
      title={"Homepage"}
      description={"Creased Jordans, we got you"}
    >
      <ProductProvider>
        <ShopPage />
      </ProductProvider>
    </Layout>
  );
}
