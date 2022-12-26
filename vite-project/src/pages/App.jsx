import { Post } from '../components/Post';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import styles from './App.module.css'
import '../global.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Nathan Ferraz'
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur ipsam culpa sapiente nisi id minus obcaecati quis dicta beatae suscipit explicabo maxime facere aliquid, repudiandae mollitia cumque quam amet?'
          />
          <Post
            author='Nathan Ferraz'
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur ipsam culpa sapiente nisi id minus obcaecati quis dicta beatae suscipit explicabo maxime facere aliquid, repudiandae mollitia cumque quam amet?'
          />
        </main>

      </div>
    </>
  )
}
