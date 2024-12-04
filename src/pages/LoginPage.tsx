import styles from "@styles/login.module.css";
import { invoke } from "@tauri-apps/api/tauri";

export default function LoginPage(): JSX.Element {
  async function checkCredentials(event: React.FormEvent) {
    event.preventDefault();
    const email = document.getElementById("e-mail-field") as HTMLInputElement;
    const password = document.getElementById("password-field") as HTMLInputElement;

    if (email && password) {
      const response = await invoke("check_credentials", {
        email: email.value,
        password: password.value
      });

      if (!response) {
        
      }
    }
  }
  return <div className={styles.page}>
    <h1 className={styles.header}>Login</h1>
    <hr />
    <form className={styles.form} onSubmit={checkCredentials}>
      <input type="text" placeholder="E-mail" className={styles.field} name="e-mail" id="e-mail-field"/>
      <input type="password" placeholder="Senha" className={styles.field} name="password" id="password-field" />
      <div className={styles.options}>
        <a href="/reset-password">Password lost</a>
        <a href="/sign-up">Sign up</a>
      </div>
      <input type="submit" className={styles.submit} value="Confirmar" />
    </form>
  </div>
}