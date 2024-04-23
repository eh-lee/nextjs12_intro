// '대괄호' means Dynamic URL: /movies/${id}
// 파일명은 대괄호 안에 변수명
// --> router.query.id
// 이때의 "id"는 대괄호 안의 변수명

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();

  // const [title, id] = router.query.params || [];
  // const [title, id] = router.query.params;
  // 이렇게 하면 server가 pre-render를 할 때,
  // router.query.params가 아직 undefined이라
  // 아래와 같이 수정해야 에러가 안 뜸

  const [title, id] = params || [];
  console.log("router->", router);

  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading ... "}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
