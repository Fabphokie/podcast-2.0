import { TiSocialTwitter, TiSocialFacebook, TiSocialYoutube} from "react-icons/ti";
import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className="copyright">
                    &copy; 2024 Fab_Podcast 2.0 . All rights reserved.
                </div>
                <div className={styles.info}>
                    <p>Contact us: </p>
                    <p>Email: Fab_Podcast@gmail.com</p>
                    <p>Phone: +27739374400</p>

                </div>
                <div className="{styles.socialMedia}">
                    <p>Follow us:
                    <br />
                    <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                         <TiSocialTwitter />
                    </a>
                    <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
                        <TiSocialFacebook />
                    </a>
                    <a href="https://youtube.com/company/example" target="_blank" rel="noopener noreferrer">
                      <TiSocialYoutube />
                    </a>
                    </p>
                </div>



            </div>
        </footer>
    );
};

