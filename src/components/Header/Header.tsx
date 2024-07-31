import styles from "./Header.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import HeaderClient from "../HeaderClient/HeaderClient";

export default async function Header() {
  const session = await getServerSession(authOptions);
  
  const username = session?.user.username || session?.user.name;

  return (
    <div className={styles.header}>
      {username && <HeaderClient username={username} />}
    </div>
  );
}
