// Next.js가 _app.js를 자동으로 불러옴

import NavBar from "../components/NavBar";
// custom <App> (ex) _app.js) component에서만 
// global css file is importable
import "../styles/globals.css"

// Global layout 느낌
export default function CustomApp({ Component, pageProps }) {
  return (
  <>
    <NavBar />
    <Component {...pageProps} />
    {/* 여기에 넥스트가 페이지들을 전달 */}
    <h1>hello</h1>
    <style jsx global>
        {`
          span {
            color: green;
          } 
        `}
      </style>
  </>
  );
}
