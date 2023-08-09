import ShopItemPage from "@/components/pageComponents/ShopItemPage";
import Layout from "@/components/utils/Layout";
import { ProductProvider } from "@/contexts/products";
import { ProductDetails } from "@/types/products";
import { Metadata } from "next";

const baseUrl = "http://localhost:3000/api/";

export const metadata: Metadata = {
  title: "Shop Item",
  description: "Check out this great deal",
};

async function getProductDetails(
  id: string
): Promise<{ data?: ProductDetails; error?: string }> {
  try {
    const productDetailsResponse = await fetch(baseUrl + "products/" + id, {
      cache: "no-cache", // ssr
    });

    if (!productDetailsResponse.ok) {
      return { error: "Failed to fetch product details" };
    }

    const productDetails: ProductDetails = await productDetailsResponse.json();
    return { data: productDetails };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}
export default async function Page({ params }: { params: { id: string } }) {
  const { data, error } = await getProductDetails(params.id);

  return (
    <Layout
      route={""}
      title={"ShopItem"}
      description={"Creased Jordans, we got you"}
    >
      <ProductProvider>
        <ShopItemPage productDetails={data} error={error} />
      </ProductProvider>
    </Layout>
  );
}
