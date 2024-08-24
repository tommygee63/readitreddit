import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { commentsSelector } from '../../app/commentsSlice';
import { Comment } from '../../components/Comment/Comment';
import styles from './comments.module.css'

export function Comments({post}) {

    const comments = useSelector(commentsSelector);
    const commentsId = `${post.kind}_` + post.data.id;
    const commentsToRender = comments[commentsId]

    if (!commentsToRender) {
        return null
    }

    return(
        <div className={styles.comments_container} >
            {commentsToRender.map((comment) => {
                return <Comment key={comment.data.id} comment={comment} />
        })}
        </div>
    )

}