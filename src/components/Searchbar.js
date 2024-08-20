import  { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsData } from '../app/postsSlice';

export function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    function handleChange(e) {
        setSearchTerm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(fetchPostsData(searchTerm));
        setSearchTerm('')
    };

    return (
        <form onSubmit={handleSubmit} >
            <input 
            type='text' 
            placeholder='search...' 
            value={searchTerm}
            onChange={handleChange} />
        
            <input 
            type='submit' 
            value='Search' />
        </form>
    )
};