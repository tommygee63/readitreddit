import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData, postsSelector } from '../../app/postsSlice';
import { Post } from '../../components/Post/Post.js';
import { Loading } from '../../components/Loading/Loading.js';
import styles from './posts.module.css';

export function Posts() {

    const postsData = useSelector(postsSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPostsData('/r/home'))
    }, [dispatch])

    if (!postsData.posts) {
        return (
            <div className={styles.postsDiv} >
            <h2>Sorry, unable to fetch posts...</h2>
            <p>Check your spelling or try another search.</p>
            </div>
        )
    }

   /* if (postsData.posts.isPending) {
        return (
            
        )
    }*/

    return (
        <>
        {postsData.isPending ? <div className={styles.postsDiv}>
                <div className={styles.loading} ><Loading /></div>
                <div className={styles.loading} ><Loading /></div>
                <div className={styles.loading} ><Loading /></div>
                <div className={styles.loading} ><Loading /></div>
            </div>  : <div className={styles.postsDiv} >{postsData.posts.map((post) => {
            return <Post post={post} key={post.data.id} />
        })}</div>}
        </>
    )
};
