import {React} from 'react';
import { Header } from '../features/Header/Header.js';
import { Subreddits } from '../features/Subreddits/Subreddits.js';
import { Posts } from '../features/Posts/Posts.js';

export function Root() {
    return(
        <div>
            <Header />
            <main><Posts /></main>
            <aside><Subreddits /></aside>
        </div>
    )
};