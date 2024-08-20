import  { React, useState } from 'react';
import { fetchPostsData } from '../app/postsSlice';

export function Searchbar() {

    const [searchTerm, setSearchTerm] = useState();

    function handleChange(e) {
        setSearchTerm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetchPostsData(searchTerm);
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