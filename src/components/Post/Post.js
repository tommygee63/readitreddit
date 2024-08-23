import { React } from 'react';
import styles from './post.module.css';

export function Post({post}) {
    return(
        <div className={styles.postTile} >
            <h2 className={styles.title} >{post.data.title}</h2>
            {post.data.url.includes('.jpeg') ? <img src={post.data.url} alt='' className={styles.img} ></img> : <img src={post.data.thumbnail} alt='' ></img>}
            <div className={styles.container} ><p className={styles.description} >{post.data.selftext}</p></div>
            <div className={styles.postFooter} >
                <div><p><strong>{post.data.author}</strong></p></div>
                <button><i class="fa-regular fa-comment"></i>{post.data.num_comments}</button>
            </div>
        </div>
    )
};