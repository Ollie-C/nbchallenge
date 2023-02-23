import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "../styles/main.scss";
import ShowsProvider from "@/contexts/ShowsContext";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ShowsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShowsProvider>
    </ApolloProvider>
  );
};

export default App;
