// Header.jsx
import React from 'react';
import styles from '../styles/Header.module.css';
import { IoHeadsetOutline } from 'react-icons/io5';
import { FaSearch } from "react-icons/fa";
const Header = ({ setSearchQuery }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearch = () => {
    // Convert the search query to lowercase for case-insensitive search
    const searchTerm = searchQuery.toLowerCase();
    
    // Filter the podcasts based on whether their title contains the search term
    const filteredPodcasts = podcasts.filter(podcast =>
      podcast.title.toLowerCase().includes(searchTerm)
    );
  
    // Do something with the filtered podcasts, such as updating state or displaying them
    console.log('Filtered Podcasts:', filteredPodcasts);
  };
  

  return (
    <header className={styles.header}>
      <h1>
        Fab_Podcast <IoHeadsetOutline className={styles.logo} />
      </h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchInputChange}
        />
        <FaSearch onClick={handleSearch} className={styles.searchButton}/>
        
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
