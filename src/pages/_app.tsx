import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "../styles/main.scss";
import ShowsProvider from "@/contexts/ShowsContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ShowsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShowsProvider>
  );
};

export default App;
