import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <h1 className="font-oswald text-primary text-3xl">Test H1</h1>
        <h2 className="font-nunito text-secondary text-xl">Test H2</h2>
        <p className="font-nunito text-tertiary">Test paragraph</p>
      </div>
    </Layout>
  );
}
