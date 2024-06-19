import styles from "styles/Books/AddBookButton.module.scss";
import Add from "public/add.png";

export default function AddBookButton() {
  return <button className={styles.button}>
    <img src={Add} alt="Add book icon" className={styles.img} />
    <span className={styles.shortcut}>Ctrl + N</span>
  </button>
}