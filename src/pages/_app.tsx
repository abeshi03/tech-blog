// - 　フレームワーク =====================================================================================================
import { AppProps } from "next/app";

// - アセット ===========================================================================================================
import "../assets/styles/reset.scss";
import "../assets/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
