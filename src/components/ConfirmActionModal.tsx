import styles from "./Workspace/Workspace.module.css";

export default function ConfirmActionModal() {
  return (
    <div className={styles.createFolderModal}>
    <h4 className={styles.confirmModalTitle}>
      Are you sure you want to delete this folder ?
    </h4>

    <div className={styles.modalBtns}>
      <button>Done</button>
      <button>Cancel</button>
    </div>
  </div>
  )
}
