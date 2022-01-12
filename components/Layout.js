import NavBar from "./NavBar";

const Layout = ({ children }) => {
  // _app.js 확인
  // children - react.js가 제공하는 prop. 하나의 컴포넌트를 다른 컴포넌트 안에 넣을 때 쓸 수 있음

  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
