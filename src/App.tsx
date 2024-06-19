import styles from "styles/App.module.scss";
import NavBar from "components/NavBar.tsx";

function App() {
  return <div className={styles.main}>
    <NavBar />
    <main id="main" />
  </div>
}

export default App;
