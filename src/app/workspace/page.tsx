import Header from "@/components/Header/Header";
import styles from "./home.module.css";
import { Open_Sans } from "next/font/google";
import Workspace from "@/components/Workspace/Workspace";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default async function page() {

  return (
    <div className={`${open_sans.className} ${styles.homepage}`}>
      <Header />
      <Workspace />
    </div>
  );
}
