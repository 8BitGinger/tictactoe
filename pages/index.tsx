import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Board from '@/containers/Board';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic Tac Typscript</title>
        <meta name="description" content="A Typscript Tic Tac Toe Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/redX.png" />
      </Head>
      <main>
        <h1>
          Tic Tac <span className="italic">Typescript</span>
        </h1>
        <Board />
      </main>
    </>
  );
}
