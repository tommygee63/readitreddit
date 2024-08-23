import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData, postsSelector } from '../../app/postsSlice';
import { Post } from '../../components/Post/Post.js';
import styles from './posts.module.css';

export function Posts() {

    const postsData = useSelector(postsSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPostsData('r/home'))
    }, [])

    if (!postsData) {
        return (
            <div className={styles.postsDiv} >
            <h2>Sorry, unable to fetch posts...</h2>
            <p>Check your spelling or try another search.</p>
            </div>
        )
    }

    return (
        <div className={styles.postsDiv} >{postsData.map((post) => {
            return <Post post={post} key={post.data.id} />
        })}</div>
    )
};
