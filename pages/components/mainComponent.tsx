import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Rooms() {
  return (
    <>
      <h1>Here you can find all chat rooms</h1>
    </>
  );
}
