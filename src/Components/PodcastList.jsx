import React, { useState, useEffect } from 'react';
import styles from '../Components/PodcastList.module.css'

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  //const showId = 'https://podcast-api.netlify.app/id/${showId}'; 
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
        <p>Loading podcasts...</p>
      ) : (
        <ul className={styles.cardList}>
          {podcasts.map((podcast) => (
            <li key={podcast.id} className={styles.podcastCard}>

              <img className={styles.img} style={{ position: 'sticky', top: 42 }} src={podcast.image} alt='pic'></img>
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
