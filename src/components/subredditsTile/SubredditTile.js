import { React } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsData } from '../../app/postsSlice';
import styles from './subredditTile.module.css';

export function SubredditTile({subreddit}) {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(fetchPostsData(subreddit.data.url));
    }

    return(
        <button onClick={handleClick} className={styles.tile} ><h4>{subreddit.data.display_name}</h4></button>
    )
};