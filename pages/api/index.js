import Head from 'next/head';
import styles from '@/styles/global.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hulu App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <h1>
            Hulu App
        </h1>
        <Header />
        <NavBar />
        </div>
    )
}