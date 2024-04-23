// ************** ver.2 *************
// ServerProps params 받아와서 Client에서 렌더링
// TypeScript
// ************** ver.2 *************
import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import { GetServerSideProps } from "next";

type DetailProps = {
  title: string,
  id: number,
};

export default function Detail({ title }: DetailProps) {
  const router = useRouter();
  console.log("expected server props--->", router.query.params);
  console.log("title---->", title); // undefined. 못 받아옴.
  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading ... "}</h4>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const paramsArray = params?.params as string[] | undefined;
  const title = paramsArray ? paramsArray[0] : undefined;
  const id = paramsArray ? parseInt(paramsArray[1], 10) : undefined;

  // 예외 처리
  const safeTitle = title ?? "Unknown Title";
  const safeId = id ?? 1230000;

  return {
    props: {
      title: safeTitle,
      id: safeId,
      // title,
      // id,
    },
  };
};


// ************** ver.3 *************
// ServerProps 없이
// Client에서만 title 핸들링
// ************** ver.3 *************

// import { useRouter } from 'next/router';
// import Seo from '../../components/Seo';

// export default function Detail() {
//   const router = useRouter();
//   console.log("router==>", router.query);
//   const params = router.query.params as string[] | undefined;
//   const title = params ? params[0] : undefined;

//   return (
//     <>
//       <Seo title={title} />
//       <h4>{title || 'Loading ... '}</h4>
//     </>
//   );
// }



// ************** ver.1 *************
// ServerProps params 받아와서 Client에서 렌더링
// JavaScript
// ************** ver.1 *************

// import { useRouter } from "next/router";
// import Seo from "../../components/Seo";

// export default function Detail({ params }) {
//   console.log("server res params----->", params)
//   const router = useRouter();

//   // const [title, id] = router.query.params || [];
//   // const [title, id] = router.query.params;
//   // 이렇게 하면 server가 pre-render를 할 때,
//   // router.query.params가 아직 undefined이라
//   // 아래와 같이 수정해야 에러가 안 뜸

//   const [title, id] = params || [];
//   console.log("router->", router);

//   return (
//     <>
//       <Seo title={title} />
//       <h4>{title || "Loading ... "}</h4>
//     </>
//   );
// }

// export function getServerSideProps({ params: { params } }) {
//   return {
//     props: {
//       params,
//     },
//   };
// }
