// pages/index.js

import Head from 'next/head';
import Link from 'next/link'; // Import the Link component from Next.js
import { Fragment } from 'react';

export default function IndexPage() {
  return (

    <Fragment>
      <Head>
        <title>Fab_PodCast</title>
        <meta
          name='description'
          content="You are what you listen to"
        />
      </Head>

      <main>
        <div
          className="mainContent"
          style={{
            backgroundImage: `url('/landingPage.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            height: "100vh",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 className="landingTitle">Podcast & Chill</h1>
          <div className="landingContent">
            <h2 className="title">You are what you listen to!</h2>
           
            <Link href="/podcastList">
              <>
                <button className="landingButton">Podcasts</button>
              </>
            </Link>
          </div>
        </div>
      </main>



      <Link href="/podcastList">
        <>
          <button>Go to Podcast List</button>
        </>
      </Link>
    </Fragment>
  );
};

;
