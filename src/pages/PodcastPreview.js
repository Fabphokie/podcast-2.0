import React from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/PodcastPreview.module.css'
import Spinner from '@/Components/Spinner';
const PodcastPreview = () => {
  const router = useRouter();
  const { showId, data } = router.query;
  const selectedShow = data ? JSON.parse(data) : null;

  return (
    <div className={styles.container}>
      
      {selectedShow ? (
        <div>
          <h2>{selectedShow.title}</h2>
          <img
            className={styles.img}
            style={{ position: 'sticky', top: 42 }}
            src={selectedShow.image}
            alt='pic'>

          </img>
          

        </div>
        
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default PodcastPreview;
