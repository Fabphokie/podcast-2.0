// components/PodcastList.js

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Import the Spinner component
import styles from '../Components/PodcastList.module.css';
import Link from 'next/link';
const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        if (!response.ok) {
          throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setPodcasts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching podcasts:', error.message);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <div className={styles.PodcastList}>
      {loading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        <ul className={styles.cardList}>
          {podcasts.map((podcast) => (
            <li key={podcast.id} className={styles.podcastCard}>
               <Link href="/PodcastPreview">
                <>
                  <img className={styles.img} style={{ position: 'sticky', top: 42 }} src={podcast.image} alt='pic'></img>
                </>
              </Link>
              <div className={styles.cardContent}>
                <h2>{podcast.title}</h2>
                <p>{podcast.numSeasons} Seasons</p>
                <p>Last Updated: {podcast.lastUpdated}</p>
                <p>Genres: {podcast.genres.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PodcastList;
