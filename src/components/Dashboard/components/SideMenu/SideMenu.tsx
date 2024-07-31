import styles from "./SideMenu.module.css";
import { FiMessageSquare, FiImage, FiVideo, FiHash, FiPhone, FiStar ,FiCalendar    } from "react-icons/fi";
import { TbGif } from "react-icons/tb";
import { MdTextFields, MdVerticalAlignBottom } from "react-icons/md";
import { SiMaildotru } from "react-icons/si";

export default function SideMenu() {
  return (
    <div className={styles.sidemenu}>

      {/* 1st */}
      <div className={styles.sidemenuCard}>
        <p className={styles.sidemenuTitle}>Bubbles</p>

        <ul>
          <li className={styles.sideMenuItem}>
            <FiMessageSquare />
            <span>Text</span>
          </li>
          <li className={styles.sideMenuItem}>
            <FiImage />
            <span>Text</span>
          </li>
          <li className={styles.sideMenuItem}>
            <FiVideo />
            <span>Text</span>
          </li>
          <li className={styles.sideMenuItem}>
            <TbGif />
            <span>Text</span>
          </li>
        </ul>
      </div>

      {/* 2nd */}
      <div className={styles.sidemenuCard}>
        <p className={styles.sidemenuTitle}>Inputs</p>

        <ul>
          <li className={styles.sideMenuItem}>
            <MdTextFields />
            <span>Text</span>
          </li>

          <li className={styles.sideMenuItem}>
            <FiHash  />
            <span>Number</span>
          </li>

          <li className={styles.sideMenuItem}>
            <SiMaildotru />
            <span>Email</span>
          </li>

          <li className={styles.sideMenuItem}>
            <FiPhone  />
            <span>Phone</span>
          </li>

          <li className={styles.sideMenuItem}>
            <FiCalendar  />
            <span>Date</span>
          </li>

          <li className={styles.sideMenuItem}>
            <FiStar  />
            <span>Rating</span>
          </li>

          <li className={styles.sideMenuItem}>
            <MdVerticalAlignBottom />
            <span>Buttons</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
