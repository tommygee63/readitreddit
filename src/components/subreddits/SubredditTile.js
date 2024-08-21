import { React } from 'react';
import styles from './subredditTile.module.css';

export function SubredditTile({subreddit}) {
    return(
        <div className={styles.tile} ><h4>{subreddit.data.display_name}</h4></div>
    )
};