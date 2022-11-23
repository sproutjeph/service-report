import "../styles/main.css";
import { Layout } from "../components";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { AppProvider } from "../store/context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={`${roboto.variable} font-sans h-screen`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </main>
    </AppProvider>
  );
}
