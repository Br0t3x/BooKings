import styles from "styles/login.module.scss";

export default function LoginPage() {
  return <main className={styles.main}>
    <h1 className={styles.header}>Login</h1>

    <form className={styles.form}>
      <input type="email" name="e-mail" id="login-email-field" placeholder="E-mail" className={styles.field} />
      <input type="password" name="password" id="login-password-field" placeholder="Password" className={styles.field} />
      <button>I lost my password</button>
      <input type="submit" value="Confirm" className={styles.submit} />
    </form>
  </main>
}