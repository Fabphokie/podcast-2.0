
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import PodcastList from '@/Components/PodcastList';

const PodcastListPage = () => {
  return (
    <div>
      <Header />
      <h1>WELCOME BACK TO Fab_Podcast!</h1>
      
      <PodcastList />
      <Footer/>
    </div>
  );
};

export default PodcastListPage;
