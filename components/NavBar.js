import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
// css module pattern

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav className={styles.nav}>
      {/* 해당 페이지가 빌드될 때  */}
      {/* NextJs가 class 이름을 무작위로 변환해 줌  */}
      {/* ex) <nav class="NavBar_nav__i8le3">*/}
      {/* 클래스 이름의 재사용 가능 */}
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        About Us
      </Link>
    </nav>
  );
}
