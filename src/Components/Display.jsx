import { useState, useEffect } from 'react';
import UseFetch from './Data';
import Shows from './Shows';
import Header from './Header';
import Footer from './Footer';

export default function Display() {
  const [data, errorStatus, loading] = UseFetch(
    'https://podcast-api.netlify.app/shows'
  );
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setOriginalData(data);
  }),
    [data];
  

  const renderedShows = originalData.map((show) => (
    <Shows
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
      <Footer />
    </div>
  );
}
