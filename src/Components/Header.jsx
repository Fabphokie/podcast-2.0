import React from 'react';
import styles from '../styles/Header.module.css'
import { IoHeadsetOutline } from "react-icons/io5";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Fab_Podcast <IoHeadsetOutline className={styles.logo}/></h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}


