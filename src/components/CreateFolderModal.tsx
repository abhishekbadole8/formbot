import styles from "./Workspace/Workspace.module.css";

export default function CreateFolderModal() {
  return (
    <div className={styles.createFolderModal}>
      <h4>Create New Folder</h4>

      <input
        type="text"
        placeholder="Enter folder name"
        className={styles.modalInput}
      />

      <div className={styles.modalBtns}>
        <button>Done</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}
