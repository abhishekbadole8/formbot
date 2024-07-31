import styles from "./Setttings.module.css";
import { TbLogout } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FiMail, FiLock, FiEye } from "react-icons/fi";

export default function Settings() {
  return (
    <div className={styles.settings}>
      <form action="" className={styles.settingsContainer}>
        <h5 className={styles.settingsTitle}>Settings</h5>

        <div className={styles.inputBox}>
          <input type="text" name="name" id="username" placeholder="Name" />
          <FaRegUser size={18} className={styles.inputIcon} />
        </div>

        <div className={styles.inputBox}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Update Email"
          />
          <FiMail size={18} className={styles.inputIcon} />
          <FiEye size={18} className={styles.inputIcon2} />
        </div>

        <div className={styles.inputBox}>
          <input type="password" name="password" placeholder="Old Password" />
          <FiLock size={18} className={styles.inputIcon} />
          <FiEye size={18} className={styles.inputIcon2} />
        </div>

        <div className={styles.inputBox}>
          <input
            type="password"
            name="confirm_password"
            placeholder="New Password"
          />
          <FiLock size={18} className={styles.inputIcon} />
          <FiEye size={18} className={styles.inputIcon2} />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Update
        </button>
      </form>

      <button className={styles.logoutBtn}>
        <TbLogout size={20} />
        Logout
      </button>
    </div>
  );
}
