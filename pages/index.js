import Head from "next/head";
import styles from "../styles/Home.module.css";
import Menu from "../components/Menu";
import Landing from "./Landing";
import Projects from "./Projects";
export default function Home() {
  return (
    <div className={styles.container}>
      {" "}
      <Head>
        <title>Tallys Cordeiro</title>
        <link rel="icon" href="/code.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="preload"
          href="../public/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Menu />
      <div className={styles.content}>
        <Landing />
        <Projects />
      </div>
    </div>
  );
}
