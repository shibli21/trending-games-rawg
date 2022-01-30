import type { AppProps } from "next/app";
import { createContext, PropsWithChildren, useState } from "react";
import Footer from "../components/Footer";
import "../styles/globals.css";

const [ctx, SearchProvider] = createCtx("");
export const SearchContext = ctx;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900 text-white ">
      <SearchProvider>
        <Component {...pageProps} />
        <Footer />
      </SearchProvider>
    </div>
  );
}

export default MyApp;

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });
  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}
