import styles from "../styles/About.module.css"
export default function about() {
    return(
      <div className={styles.container}>
         <h1 className={styles.heading}>About Fab_Podcast</h1>
      <p className={styles.paragraph}>
        Welcome to Fab_Podcast, the ultimate podcast application for discovering, listening to, and managing your favorite podcasts all in one place. Whether you're a podcast enthusiast or just getting started, Fab_Podcast makes it easy to explore a diverse range of content and enjoy a seamless listening experience.
      </p>
      <h2 className={styles.subHeading}>Our Mission</h2>
      <p className={styles.paragraph}>
        At Fab_Podcast, our mission is to provide users with a user-friendly platform to access and enjoy their favorite podcasts anytime, anywhere. We aim to create a space where users can discover new shows, stay updated on the latest episodes, and curate personalized listening experiences tailored to their interests.
      </p>
      <h2 className={styles.subHeading}>Key Features</h2>
      <ul className={styles.featureList}>
        <li>Discover New Podcasts</li>
        <li>Stream or Download Episodes</li>
        <li>Create Playlists</li>
        <li>Stay Updated</li>
        <li>User-Friendly Interface</li>
      </ul>
      <h2 className={styles.subHeading}>Technologies Used</h2>
      <ul className={styles.techList}>
        <li>React.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>CSS</li>
        <li>APIs</li>
      </ul>
      <h2 className={styles.subHeading}>Contributing</h2>
      <p className={styles.paragraph}>
        We welcome contributions from the community to help improve and enhance Fab_Podcast. If you're interested in contributing, please follow the steps outlined in our <a href="/contribute" className={styles.link}>Contribution Guidelines</a>.
      </p>
      <h2 className={styles.subHeading}>License</h2>
      <p className={styles.paragraph}>
        Fab_Podcast is open-source software licensed under the MIT License. See the <a href="/license" className={styles.link}>LICENSE</a> file for more details.
      </p>
      <h2 className={styles.subHeading}>Acknowledgments</h2>
      <p className={styles.paragraph}>
        We'd like to extend our gratitude to Codespace Academy for their support and inspiration in the development of Fab_Podcast.
      </p>
      </div>
    )
}