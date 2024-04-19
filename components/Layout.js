import NavBar from "./NavBar";

export default function Layout({ children }) {
  // Layout 태그가 바깥에서 감싸고 있는 컴포넌트들이
  // children이 되어 div에 들어감
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
