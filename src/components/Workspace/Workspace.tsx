import styles from "./Workspace.module.css";
import { FiFolderPlus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import ConfirmActionModal from "../ConfirmActionModal";
import CreateFolderModal from "../CreateFolderModal";

export default function Workspace() {
  return (
    <section className={styles.workspaceSection}>
      {/* Folder's */}
      <div className={styles.createFolderContainer}>
        <button className={styles.createFolderBtn}>
          <FiFolderPlus /> Create a folder
        </button>

        <ul className={styles.folderList}>
          <li className={styles.folderItem}>
            Computer Network <MdDelete size={18} />
          </li>
        </ul>
      </div>

      {/* files */}
      <div className={styles.typebotContainer}>
        <button className={styles.createTypebotBtn}>
          <FaPlus size={24} /> Create a typebot
        </button>

        <ul className={styles.typebotformList}>
          <li className={styles.typebotformItem}>
            New Form
            <MdDelete className={styles.deleteIcon} />
          </li>
        </ul>
      </div>

      {/* <CreateFolderModal /> */}

      {/* <ConfirmActionModal /> */}
    </section>
  );
}
