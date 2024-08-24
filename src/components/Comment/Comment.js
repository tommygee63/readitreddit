import { React } from 'react';
import styles from './comment.module.css'

export function Comment({comment}) {

    return(
        <div className={styles.comment_body} >
            <p className={styles.comment_text} ><strong>{comment.data.author}</strong></p>
            <p className={styles.comment_text} >{comment.data.body}</p>
        </div>
    )
}