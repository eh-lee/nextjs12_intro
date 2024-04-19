// react component를 정의하고 export
import Seo from "../components/Seo";

// Rule: "export default"로 내보내야 함
export default function About() {
  return (
    <div>
      <Seo title="About" />
      <h1>about us</h1>
    </div>
  );
}
