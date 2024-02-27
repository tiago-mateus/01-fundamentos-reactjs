import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state)=>{return state+1});
    }
    return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/tiago-mateus.png' />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Tiago Mateus</strong>
                        <time 
                            title='11 de Maio de 2012' 
                            dateTime='2024-05-08 08:00:00' >
                            Publicado há 1h
                        </time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'
                        
                        >
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
    )
}