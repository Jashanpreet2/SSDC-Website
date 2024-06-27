import Layout from "@/components/Layout";
import '@/styles/main.scss';

export default function App({ Component, pageProps }) {

  return (
    <Layout currentComp={Component.name}>
      <Component {...pageProps} />
    </Layout>
  );
}
