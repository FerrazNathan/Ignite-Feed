import { Post } from '../components/Post';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import { posts } from '../mock';

import styles from './App.module.css'
import '../global.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {
          posts.map((item) => {
            return(
              <Post
                key={item.id}
                author={item.author}
                content={item.content}
                publishedAt={item.publishedAt}
              />
            )
          })
        }
        </main>

      </div>
    </>
  )
}

export default App;
