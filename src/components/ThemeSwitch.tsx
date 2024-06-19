import styles from "styles/theme-switch.module.scss";

export default function ThemeSwitch() {
  return <label className={styles.switch}>
    <input type="checkbox" id="theme-switch-checkbox" onChange={(event) => {
      const target = event.target as HTMLInputElement;

      if (target.checked)
        document.querySelector(":root")?.setAttribute("data-theme", "light");
      else
        document.querySelector(":root")?.removeAttribute("data-theme");
    }} />
    <span className={styles.slider} />
  </label>
}