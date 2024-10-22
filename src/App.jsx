import styles from './App.module.css';
import { Navigationbar } from './components/Navigationbar/navigationbar';
import { AboutMe } from './components/Navigationbar/AboutMe/AboutMe';

function App() {

  return (
    <div className={styles.App}>
      <Navigationbar/>
      <AboutMe/>
    </div>
  );
}

export default App;
