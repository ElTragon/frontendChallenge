import HomePage from "@/components/pageComponents/Homepage";
import Layout from "@/components/utils/Layout";

export default function Home() {
  return (
    <Layout
      route={""}
      title={"Homepage"}
      description={"Creased Jordans, we got you"}
    >
      <HomePage />
    </Layout>
  );
}
