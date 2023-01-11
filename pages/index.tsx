import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { Suspense } from "react";

// lazy load the component
const Rooms = React.lazy(() => import("./components/mainComponent"));
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Chat</title>
        <meta name="description" content="Chat using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Rooms />
        </Suspense>
      </main>
    </>
  );
}
