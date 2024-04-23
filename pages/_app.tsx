// Next.js가 _app.js를 자동으로 불러옴

import { AppProps } from "next/app";
import Layout from "../components/Layout";
// custom <App> (ex) _app.tsx) component에서만
// global css file is importable
import "../styles/globals.css";

// Global layout 느낌
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
