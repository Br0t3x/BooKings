import styles from "@styles/components/util/AddBookButton.module.css";
import addIcon from "@monocolor/plus.png";

export default function AddBookButton(): JSX.Element {
  return <button className={styles.button}>
    <img src={addIcon} className={`monocolor-icon ${styles.icon}`} alt="Ícone" />
  </button>
}