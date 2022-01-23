import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>F&B Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Homepage />
    </div>
  );
};

export default Home;
