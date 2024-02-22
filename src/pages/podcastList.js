import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import PodcastList from '@/Components/PodcastList';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../pages/podcastList.module.css'
const PodcastListPage = () => {
  return (
    <div className={styles.list}>
      <Header />
      <div className={styles.carouselContainer} style={{ marginTop: '20px' }}>
        <Carousel  showStatus={false} showArrows={false} infiniteLoop autoPlay stopOnHover={false} interval={1500} className={styles.customCarousel}>
          <div  classNames={styles.carouselSlide}>
            <h1 className={styles.carouselTitle}>Welcome</h1>
             
          </div>
          <div>
            <h1 className={styles.carouselTitle}>Back</h1>
          </div>
          <div>
            <h1 className={styles.carouselTitle}>to</h1>
          </div>
          <div>
            <h1 className={styles.carouselTitle}>Fab_Podcast!</h1>
          </div>
          
          {/* Add more slides if needed */}
        </Carousel>
      </div>
      <PodcastList />
      <Footer/>
    </div>
  );
};

export default PodcastListPage;
