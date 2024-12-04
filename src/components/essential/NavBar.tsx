import styles from "@styles/components/essential/navbar.module.css";
import ThemeButton from "@components/essential/ThemeButton";
import accountIcon from "@monocolor/account.png";
import bookIcon from "@monocolor/books.png";
import clientIcon from "@monocolor/client.png";
import optionsIcon from "@monocolor/options.png";

export default function NavBar() {
  return <div className={styles.navbar}>
    <ul>
      <li className={styles.option}>
        <a href="/account">
          <img src={accountIcon} alt="Account icon" className="monocolor-icon" />
          <span lang="pt" id="account">Conta</span>
        </a>
      </li>
      <li className={styles.option} data-focused>
        <a href="/books">
          <img src={bookIcon} alt="Book icon" className="monocolor-icon" />
          <span lang="pt" id="books">Livros</span>
        </a>
      </li>
      <li className={styles.option}>
        <a href="/clients">
          <img src={clientIcon} alt="Client icon" className="monocolor-icon" />
          <span lang="pt" id="clients">Clientes</span>
        </a>
      </li>
    </ul>
    <div>
      <button className={styles.settings}>
        <img src={optionsIcon} alt="" className="monocolor-icon" />
        <span lang="pt" id="options">Opções</span>
      </button>
      <ThemeButton />
    </div>
  </div>
}