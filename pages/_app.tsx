import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900 text-white px-4">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
