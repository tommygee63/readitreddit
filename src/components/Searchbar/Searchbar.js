import  { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsData } from '../../app/postsSlice';
import styles from './searchbar.module.css';

export function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    function handleChange(e) {
        setSearchTerm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const searchTermSplit = searchTerm.split(' ')
        const termToSearch = searchTermSplit.join('')
        dispatch(fetchPostsData(`/r/${termToSearch}`));
        setSearchTerm('')
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} >
            <input 
            className={styles.input}
            type='text' 
            placeholder='search...' 
            value={searchTerm}
            onChange={handleChange} />
        
            <button type='submit' className={styles.submit} ><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
};