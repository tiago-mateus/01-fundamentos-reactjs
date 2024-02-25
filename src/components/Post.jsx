import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/tiago-mateus.png' />
                    <div className={styles.authorInfo}>
                        <strong>Tiago Mateus</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title='11 de Maio de 2012' 
                    dateTime='2024-05-08 08:00:00' >
                        Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p>Ipsam ipsa esse quas, architecto placeat veritatis, </p>
                    <p>quisquam distinctio magni hic necessitatibus laudantium provident mollitia dolores et ex quo eius. </p>
                    <p>Nostrum, cumque.</p>
                    <p><a href="">https://github.com/tiago-mateus</a></p>
                    <p>
                        <a href="">#developer</a>{' '}
                        <a href="">#aprendendo</a>{' '}
                        <a href="">#reactJS</a>
                    </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}