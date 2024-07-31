"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./HeaderClient.module.css";
import { signOut } from "next-auth/react";

interface HeaderClientProps {
  username: string;
}

export default function HeaderClient({ username }: HeaderClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSignOut = () => {
    signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/login`,
    });
  };

  return (
    <div
      className={`${styles.headerTitle}  ${isModalOpen && styles.activeModal}`}
      onClick={toggleModal}
    >
      <h5>{username}'s workspace</h5>
      <IoIosArrowDown />

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.menuModal}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Settings</li>
            <li className={styles.menuItem} onClick={handleSignOut}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
