import  { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/tiago-mateus.png',
      name: 'Tiago Mateus',
      role: 'Web System Analiyst II', 
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        type: 'paragraph',
        content: 'quisquam distinctio magni hic necessitatibus laudantium provident mollitia dolores et ex quo eius. ',
      },
      {
        type: 'paragraph',
        content:'Nostrum, cumque.'
      },
      {
        type: 'link',
        content:'https://github.com/tiago-mateus'
      }    
    ],
    publishedAt: new Date('2024-02-26 12:53:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/tiago-mateus.png',
      name: 'Tiago Mateus',
      role: 'Web System Analiyst II', 
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        type: 'paragraph',
        content: 'necessitatibus laudantium provident mollitia dolores et ex quo eius. ',
      },
      {
        type: 'paragraph',
        content:'cumque.'
      },
      {
        type: 'link',
        content:'https://github.com/tiago-mateus'
      }    
    ],
    publishedAt: new Date('2024-02-23 12:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
