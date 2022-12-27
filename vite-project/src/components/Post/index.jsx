import React from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.css'

export function Post() {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/FerrazNathan.png" />
          <div className={styles.authorInfo}>
            <strong>Nathan Ferraz</strong>
            <span>Desenvolvedor Front end</span>
          </div>
        </div>
        <time
          title='26 de dezembro às 12:23h'
          dateTime='2022-12-12T12:23'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉{' '}<a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button
            type='submit'
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
