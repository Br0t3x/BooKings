import styles from "@styles/pages/main.module.css";
import NavBar from "@components/essential/NavBar";
import BookPage from "@pages/BookPage";

export default function MainPage(): JSX.Element {
  return <div className={styles.page}>
    <NavBar />
    <BookPage />
  </div>
}