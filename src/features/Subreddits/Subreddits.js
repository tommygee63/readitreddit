import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subredditsSelector, fetchSubredditsData } from '../../app/subredditsSlice.js';
import { SubredditTile } from '../../components/subredditsTile/SubredditTile.js';
import { Loading } from '../../components/Loading/Loading.js';
import styles from './subreddits.module.css';

export function Subreddits() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubredditsData())
    }, [dispatch]);

    const subreddits = useSelector(subredditsSelector);

    return (
        <>
        {subreddits.isLoading ? <div className={styles.subreddits} >
            <div className={styles.loading} ><Loading /></div>
            <div className={styles.loading} ><Loading /></div>
            <div className={styles.loading} ><Loading /></div>
            <div className={styles.loading} ><Loading /></div>
            </div> : <div className={styles.subreddits} >
            {subreddits.subreddits.map((subreddit) => {
                return <SubredditTile key={subreddit.data.id}  subreddit={subreddit} />
            })}
        </div>}
        </>
    )

   /* return (
        <div className={styles.subreddits} >
            {subreddits.subreddits.map((subreddit) => {
                return <SubredditTile key={subreddit.data.id}  subreddit={subreddit} />
            })}
        </div>
    ) */

};