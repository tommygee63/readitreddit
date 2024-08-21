import {React} from 'react';
import { Header } from '../features/Header.js/Header';
import { Subreddits } from '../features/Subreddits.js/Subreddits';

export function Root() {
    return(
        <>
            <header><Header /></header>
            <aside><Subreddits /></aside>
        </>
    )
};