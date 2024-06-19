import styles from "styles/books-page.module.scss";
import AddBookButton from "components/Books/AddBookButton";

export default function BooksPage() {
  return <div className={styles.main}>
    <AddBookButton />
  </div>
}