import styles from "@styles/login.module.css";
import { invoke } from "@tauri-apps/api/tauri";

export default function LoginPage(): JSX.Element {
  function checkCredentials(event: React.FormEvent) {
    event.preventDefault();
    const email = document.getElementById("e-mail-field") as HTMLInputElement;
    const password = document.getElementById("password-field") as HTMLInputElement;

    console.log(email, password);
    if (email && password) {
      invoke("check_credentials", {
        email: email.value,
        password: password.value
      }).then((response) => {
        console.log(response);
      });
    }
  }
  return <div className={styles.page}>
    <h1 className={styles.header}>Login</h1>
    <hr />
    <form className={styles.form} onSubmit={checkCredentials}>
      <input type="email" placeholder="E-mail" className={styles.field} name="e-mail" id="e-mail-field" />
      <input type="password" placeholder="Senha" className={styles.field} name="password" id="password-field" />
      <input type="submit" className={styles.submit} value="Confirmar" />
    </form>
  </div>
}