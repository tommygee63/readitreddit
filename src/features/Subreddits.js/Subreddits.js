import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subredditsSelector, fetchSubredditsData } from '../../app/subredditsSlice';
import { SubredditTile } from '../../components/subreddits/SubredditTile.js';

export function Subreddits() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubredditsData())
    }, []);

    const subreddits = useSelector(subredditsSelector);

    return (
        <div>
            {subreddits.map((subreddit) => {
                return <SubredditTile  subreddit={subreddit} />
            })}
        </div>
    )

};