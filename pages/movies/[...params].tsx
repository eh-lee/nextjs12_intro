import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import { GetServerSideProps } from "next";

type DetailProps = {
  title: string,
  id: string,
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
  const { title, id } = params;

  // 예외 처리
  const safeTitle = title ?? "Unknown Title";
  const safeId = id ?? "Unknown ID";

  return {
    props: {
      title: safeTitle,
      id: safeId,
      // title,
      // id,
    },
  };
};


// js

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
