// PodcastList.jsx
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import styles from '../Components/PodcastList.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PodcastList = ({ searchQuery }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        if (!response.ok) {
          throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setPodcasts(data);
        setShowFullDescription(Array(data.length).fill(false));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching podcasts:', error.message);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  const handleSelectShow = async (showId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://podcast-api.netlify.app/id/${showId}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch detailed show data');
      }
      const data = await response.json();
      setLoading(false);
      // Navigate to PodcastPreview page with selected show data
      router.push({
        pathname: '/PodcastPreview',
        query: { showId: showId, data: JSON.stringify(data) }, // Pass showId and data as query parameters
      });
    } catch (error) {
      console.error('Error fetching detailed show data:', error.message);
      setLoading(false);
    }
  };

  const toggleDescription = (index) => {
    setShowFullDescription((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the state for the clicked card
      return newState;
    });
  };

  // Filter podcasts based on search query
  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.PodcastList}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <ul className={styles.cardList}>
            {filteredPodcasts.map((podcast, index) => (
              <li key={podcast.id} className={styles.podcastCard}>
                <Link href="#" onClick={() => handleSelectShow(podcast.id)}>
                  <img
                    className={styles.img}
                    style={{ position: 'sticky', top: 42 }}
                    src={podcast.image}
                    alt="pic"
                  ></img>
                </Link>
                <div className={styles.cardContent}>
                  <h2>{podcast.title}</h2>
                  <p> Seasons :{podcast.seasons}</p>
                  <p>Last Updated: {podcast.updated}</p>
                  <p>Genres: {podcast.genres.join(', ')}</p>

                  <p>
                    {showFullDescription[index]
                      ? podcast.description
                      : podcast.description.slice(0, 100) + '...'}
                  </p>

                  <button onClick={() => toggleDescription(index)}>
                    {showFullDescription[index] ? 'Show less' : 'Show more'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PodcastList;
