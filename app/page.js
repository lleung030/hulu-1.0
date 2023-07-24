import Head from 'next/head';
import styles from '@/styles/global.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Results from '@/components/Results';
import requests from '@/utils/requests';


export default function Home({results}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Hulu App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        
        <Header />
        <NavBar />

        <Results results={results}/>
        </div>
    )
}

// export async function getServerSideProps(context) {
//     const genre = context.query.genre

//     const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
//     ).then((res) => res.json());
//     return {
//         props: {
//             results: request.results
//         }
//     }
// }
