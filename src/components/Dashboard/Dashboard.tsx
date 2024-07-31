import { Open_Sans } from "next/font/google";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import styles from "./Dashboard.module.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export default function Dashboard() {
  return (
    <div className={`${open_sans.className} ${styles.dashboard}`}>
      <Header />

      <section>
        <SideMenu />
        <Editor />
      </section>
    </div>
  );
}
