// '대괄호' means Dynamic URL: /movies/${id}
// 파일명은 대괄호 안에 변수명
// --> router.query.id
// 이때의 "id"는 대괄호 안의 변수명

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log("router->", router);
  return <h4>{router.query.title || "Loading ... "}</h4>;
}
