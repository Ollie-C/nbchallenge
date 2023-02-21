import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "../styles/main.scss";
import ShowsProvider from "@/contexts/ShowsContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ShowsProvider>
        <Component {...pageProps} />
      </ShowsProvider>
    </Layout>
  );
};

export default App;
