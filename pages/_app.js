import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {

  return (
    <Layout currentComp={Component.name}>
      <Component {...pageProps} />
    </Layout>
  );
}
