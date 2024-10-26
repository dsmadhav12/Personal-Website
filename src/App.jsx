import styles from './App.module.css';
import { Navigationbar } from './components/Navigationbar/navigationbar';
import { AboutMe } from './components/AboutMe/AboutMe';
import { AboutSection } from './components/AboutSection/AboutSection';
import { Experience } from './components/Experience/experience';

function App() {

  return (
    <div className={styles.App}>
      <Navigationbar/>
      <AboutMe/>
      <AboutSection/>
      <Experience/>
    </div>
  );
}

export default App;
