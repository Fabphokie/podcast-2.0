import { useState, useEffect } from 'react';
import UseFetch from './Data'; // Assuming you have a custom hook for fetching data

import Header from './Header';
import Footer from './Footer';
import PodcastList from './PodcastList';

export default function Display(podcast) {
  const [data, errorStatus, loading] = UseFetch('https://podcast-api.netlify.app/shows');
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    if (data) {
      setOriginalData(data);
    }
  }, [data]);
  
  // Conditional rendering of Shows component when data is available
  const renderedShows = originalData.length > 0 && originalData.map((show) => (
    <PodcastList
      key={show.id}
      title={show.title}
      description={show.description}
      image={show.image}
      updated={show.updated}
      click={() => setIds(show.id)}
    />
  ));

  return (
    <div>
      <Header />
      {loading ? <p>Loading...</p> : errorStatus ? <p>Error: {errorStatus}</p> : renderedShows}
      <Footer />
    </div>
  );
}
