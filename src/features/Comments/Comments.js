import { React } from 'react';
import { useSelector } from 'react-redux';
import { commentsSelector } from '../../app/commentsSlice';
import { Comment } from '../../components/Comment/Comment';
import { Loading } from '../../components/Loading/Loading';
import styles from './comments.module.css'

export function Comments({post, setHideComments}) {

    const comments = useSelector(commentsSelector);
    const commentsId = `${post.kind}_` + post.data.id;
    const commentsToRender = comments.comments[commentsId]

    if (!commentsToRender) {
        return null
    }

    if (comments.isLoading) {
        return(
            <div className={styles.comments_container}>
            <div className={styles.loading} ><Loading /></div>
            <div className={styles.loading} ><Loading /></div>
            <div className={styles.loading} ><Loading /></div>
            <div className={styles.loading} ><Loading /></div>
        </div>
        )
    }

    function handleClick() {
        setHideComments(true)
    }

    return(
        <div className={styles.comments_container} >
            <button onClick={handleClick} className={styles.button} >Close Comments</button>
            {commentsToRender.map((comment) => {
                return <Comment key={comment.data.id} comment={comment} setHideComments={setHideComments} />
        })}
        </div>
    )

}