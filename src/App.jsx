import styles from './App.module.css';
import { Navigationbar } from './components/Navigationbar/navigationbar';
import { AboutMe } from './components/AboutMe/AboutMe';
import { AboutSection } from './components/AboutSection/AboutSection';
import { Experience } from './components/Experience/experience';
import { Projects } from './components/Projects/projects';
import { Golf } from './components/Golf/golf';
import { Contact } from './components/Contact/contact';

function App() {

  return (
    <div className={styles.App}>
      <Navigationbar/>
      <AboutMe/>
      <AboutSection/>
      <Experience/>
      <Projects/>
      <Golf/>
      <Contact/>
    </div>
  );
}

export default App;
