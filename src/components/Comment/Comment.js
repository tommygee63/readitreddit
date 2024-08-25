import { React } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './comment.module.css'

export function Comment({comment}) {

    return(
        <div className={styles.comment_body} >
            <p className={styles.comment_text} ><strong>{comment.data.author}</strong></p>
            <div className={styles.comment_text} ><ReactMarkdown children={comment.data.body} /></div>
        </div>
    )
}