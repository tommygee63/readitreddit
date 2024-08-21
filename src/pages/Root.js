import {React} from 'react';
import { Header } from '../features/Header/Header.js';
import { Subreddits } from '../features/Subreddits/Subreddits.js';

export function Root() {
    return(
        <>
            <header><Header /></header>
            <aside><Subreddits /></aside>
        </>
    )
};