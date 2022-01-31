import type { AppProps } from "next/app";
import { Router } from "next/router";
import Footer from "../components/Footer";
import { GamesProvider } from "../store/games-context";
import "../styles/globals.css";
import NProgress from "nprogress";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900 text-white ">
      <GamesProvider>
        <Component {...pageProps} />
        <Footer />
      </GamesProvider>
    </div>
  );
}

export default MyApp;
