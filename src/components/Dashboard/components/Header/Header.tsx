import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.dashboardHeader}>
      <input type="text" placeholder="Enter Form Name"/>

      <nav className={styles.navigationBtn}>
        <ul>
          <li className={styles.navigationItem}>Flow</li>
          <li className={styles.navigationItem}>Theme</li>
          <li className={styles.navigationItem}>Response</li>
        </ul>
      </nav>

      <div className={styles.actionBtnList}>
        <button className={`${styles.actionBtnItem} ${false && styles.activatedBtn}`}>Share</button>
        <button className={styles.actionBtnItem}>Save</button>
        <button className={styles.actionBtnItem}>Cancel</button>
      </div>
    </div>
  );
}
