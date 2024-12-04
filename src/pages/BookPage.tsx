import styles from "@styles/pages/bookpage.module.css";
import AddBookButton from "@components/util/AddBookButton";
import { Settings } from "@/contexts/settings";
import React from "react";

export default function BookPage(): JSX.Element {
  const settings = React.useContext(Settings);

  return <main className={styles.main}>
    <div className={styles["book-area"]}>
      {settings.ui.addbookbuttonisvisible ? <AddBookButton /> : <></>}
    </div>
  </main>
}