import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCommentsData } from '../../app/commentsSlice';
import { Comments } from '../../features/Comments/Comments';
import ReactMarkdown from 'react-markdown';
import styles from './post.module.css';

export function Post({post}) {

    const dispatch = useDispatch()
    const [hideComments, setHideComments] = useState(true)

    function handleClick(e) {
        if (post.data.num_comments === 0) {
            return null;
        }
        setHideComments(false);
        dispatch(fetchCommentsData(post.data.permalink)); 
    };

    return(
        <div className={styles.postTile} >
            <h2 className={styles.title} >{post.data.title}</h2>
            {post.data.url.includes('.jpeg') ? <img src={post.data.url} alt='' className={styles.img} ></img> : <img src={post.data.thumbnail} alt='' ></img>}
            <div className={styles.container} ><ReactMarkdown children={post.data.selftext} /></div>
            <div className={styles.postFooter} >
                <div><p><strong>{post.data.author}</strong></p></div>
                <button className={styles.button} onClick={handleClick} ><i class="fa-regular fa-comment fa-xl"></i><p className={styles.comment_counter} >{post.data.num_comments}</p></button>
            </div>
            {hideComments ? null : <Comments post={post} setHideComments={setHideComments} />}
        </div>
    )
};