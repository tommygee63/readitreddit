import { React } from 'react';

export function SubredditTile({subreddit}) {
    return(
        <div><h3>{subreddit.data.display_name}</h3></div>
    )
};