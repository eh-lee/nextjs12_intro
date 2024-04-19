// Next.js가 _app.js를 자동으로 불러옴

import Layout from "../components/Layout";
// custom <App> (ex) _app.js) component에서만
// global css file is importable
import "../styles/globals.css";

// Global layout 느낌
export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
