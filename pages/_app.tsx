import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { GamesProvider } from "../store/games-context";
import "../styles/globals.css";

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
