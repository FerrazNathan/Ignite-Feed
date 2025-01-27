import { useState } from 'react'
import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import { CommentProps } from './types.d';

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment(){
    setLikeCount((count) => {
      return count + 1
    })
  }

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/FerrazNathan.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nathan Ferraz</strong>
              <time
                title='26 de dezembro às 12:23h'
                dateTime='2022-12-12T12:23'
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
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
