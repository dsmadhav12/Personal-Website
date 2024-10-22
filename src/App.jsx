import styles from './App.module.css';
import { Navigationbar } from './components/Navigationbar/navigationbar';

function App() {

  return (
    <div className={styles.App}>
      <Navigationbar/>
    </div>
  );
}

export default App;
