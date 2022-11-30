import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"artem gym, top bizeps" + keywords}></meta>
        <title>Главная старнциа</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователь" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
