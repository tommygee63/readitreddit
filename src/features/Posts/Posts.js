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

    return (
        <div className={styles.postsDiv} >{postsData.map((post) => {
            return <Post post={post} key={post.data.id} />
        })}</div>
    )
};
