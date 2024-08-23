import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subredditsSelector, fetchSubredditsData } from '../../app/subredditsSlice.js';
import { SubredditTile } from '../../components/subredditsTile/SubredditTile.js';
import styles from './subreddits.module.css';

export function Subreddits() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubredditsData())
    }, []);

    const subreddits = useSelector(subredditsSelector);

    return (
        <div className={styles.subreddits} >
            {subreddits.map((subreddit) => {
                return <SubredditTile key={subreddit.data.id}  subreddit={subreddit} />
            })}
        </div>
    )

};