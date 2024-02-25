import  { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
              author="Tiago Mateus"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus blanditiis quo ipsa ea dolorum quibusdam iusto, incidunt tenetur et saepe voluptatibus id iure? Totam, adipisci eaque corrupti illo animi maxime!"
            />
        </main>
      </div>
    </div>
  )
}
