import styles from "@styles/components/essential/theme-button.module.css";
import { ChangeEvent } from "react";
import sun from "@monocolor/sun.png";
import moon from "@monocolor/moon.png";

export default function ThemeButton(): JSX.Element {
  function toggleTheme(event: ChangeEvent) {
    const activated = (event.target as HTMLInputElement).checked;
    const icon = document.getElementById("theme-icon") as HTMLImageElement;
    
    if (activated) {
      document.querySelector(":root")?.setAttributeNode(document.createAttribute("dark-theme"));
      icon.setAttribute("src", moon);
    }
    else {
      document.querySelector(":root")?.removeAttribute("dark-theme");
      icon.setAttribute("src", sun);
    }
  }

  return <button className={styles.button}>
    <input type="checkbox" name="theme-button" id="theme-button" className={styles.input} onChange={toggleTheme} />
    <label htmlFor="theme-button" className={styles.label}>
      <img className={styles.icon} src={sun} id="theme-icon" />
    </label>
  </button>
}