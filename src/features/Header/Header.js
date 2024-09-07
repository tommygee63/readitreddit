import { React } from 'react';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.littleDivTitle} ><h2 className={styles.title} ><span className={styles.titlespan} >Readit</span>Reddit</h2></div>
            <div className={styles.bigDiv} ><Searchbar /></div>
            <div className={styles.littleDivEmpty} ></div>  
        </header>
    )
};