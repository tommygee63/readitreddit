import { React } from 'react';
import styles from './post.module.css';

export function Post({post}) {
    return(
        <div className={styles.postTile} >
            <h4 className={styles.title} >{post.data.title}</h4>
        </div>
    )
};