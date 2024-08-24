import { React } from 'react';

export function Comment({comment}) {
    return(
        <div>
            <p>{comment.data.body}</p>
            <hr></hr>
            <p>{comment.data.author}</p>
        </div>
    )
}