// === react helmet
import Head from "next/head";
import React, {ReactNode} from "react";

const Seo: React.FC<{ title: ReactNode }> = ({title}) =>{
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

export default Seo;