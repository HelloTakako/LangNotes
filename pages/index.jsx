import Head from 'next/head';
import React from 'react';

import RandomImage from '../components/RandomMarathiAlphabetImages';
import DrawingPad from '../components/DrawingPad';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Lang Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <main>
        <div className="container">
          <DrawingPad />
        </div>
      </main>

      <Footer />
    </div>
  );
}
