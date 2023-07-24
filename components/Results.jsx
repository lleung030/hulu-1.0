"use client";

import Thumbnail from "./Thumbnail";
import React, { useState, useEffect } from "react";
import requests from "@/utils/requests";
import FlipMove from 'react-flip-move'

function Results({ results }) {
  const [fetchedData, setFetchedData] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
       
      // const genre = context.query.genre;
      const genre = "fetchTopRated";
      // const genre = Object.keys(requests)
      const request = await fetch(
        `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`
      ).then((res) => res.json());
      const results = request.results;
      console.log(results)
      setFetchedData(results);
    };

    fetchData();
  }, []);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {fetchedData.map((result) => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </FlipMove>
  );
}

// function Results({ results }) {
//     const [fetchedData, setFetchedData] = useState({});
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const genreData = {};
//           const genres = Object.keys(requests);
//           for (const genre of genres) {
//             const url = `https://api.themoviedb.org/3${requests[genre].url}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             genreData[genre] = data.results;
//           }
//           setFetchedData(genreData);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     return (
//       <div>
//         {/* Render the fetched data for each genre */}
//         {Object.entries(fetchedData).map(([genre, genreResults]) => (
//           <div key={genre}>
//             <h2>{requests[genre].title}</h2>
//             {genreResults.map((result) => (
//               <Thumbnail key={result.id} />
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }

export default Results;
