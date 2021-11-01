// - 　フレームワーク =====================================================================================================
import { AppProps } from "next/app";

// - アセット ===========================================================================================================
import "../assets/styles/global/reset.scss";
import "../assets/styles/global/global.scss";

// - レイアウト ==========================================================================================================
import Layout from "../components/layouts/Layouts";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
