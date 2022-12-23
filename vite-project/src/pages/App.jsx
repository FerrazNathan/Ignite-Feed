import { Post } from '../components/Post';
import { Header } from '../components/Header';

import '../global.css'

export function App() {

  return (
    <>
      <Header />
      <Post
        author='Nathan Ferraz'
        content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur ipsam culpa sapiente nisi id minus obcaecati quis dicta beatae suscipit explicabo maxime facere aliquid, repudiandae mollitia cumque quam amet?'
      />
    </>
  )
}
