import React from 'react';
import { useRouter } from 'next/router';

const PodcastPreview = () => {
  const router = useRouter();
  const { showId, data } = router.query; // Retrieve showId and data from query parameters

  // Parse the JSON string to get the selected show data
  const selectedShow = data ? JSON.parse(data) : null;

  return (
    <div>
      <h1>Podcast Preview</h1>
      {selectedShow ? (
        <div>
          <h2>{selectedShow.title}</h2>
          <img
                    //className={styles.img}
                    //style={{ position: 'sticky', top: 42 }}
                    src={selectedShow.image}
                    alt='pic'></img>
          {/* Render other details of the selected show */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PodcastPreview;
