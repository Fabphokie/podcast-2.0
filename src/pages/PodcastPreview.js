import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/PodcastPreview.module.css';
import Spinner from '@/Components/Spinner';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PodcastPreview = () => {
  const router = useRouter();
  const { data } = router.query;
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const showData = JSON.parse(data);
      setSelectedShow(showData);
      setLoading(false);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {selectedShow && (
            <div>
              <h2>{selectedShow.title}</h2>
              <img
                className={styles.img}
                style={{ position: 'sticky', top: 42 }}
                src={selectedShow.image}
                alt="pic"
              />
            </div>
          )}

          {selectedShow && selectedShow.seasons.length > 0 ? (
            <div>
              {selectedShow.seasons.map((season, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}a-content`}
                    id={`panel${index + 1}a-header`}
                  >
                    <Typography>{season.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {season.episodes.map((episode, idx) => (
                        <div key={idx}>
                          <p>{idx + 1}. {episode.title}</p>
                          <audio controls>
                            <source src={episode.file} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          ) : (
            <p>No seasons available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PodcastPreview;
