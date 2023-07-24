"use client";

import Thumbnail from "./Thumbnail";
import React, { useState, useEffect } from "react";
import requests from "@/utils/requests";

function Results({ results }) {
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const genre = context.query.genre;
      const genre = "Action";
      const request = await fetch(
        `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`
      ).then((res) => res.json());
      const results = request.results;
      setFetchedData(results);
    };

    fetchData();
  }, []);
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {fetchedData.map((result) => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </div>
  );
}

export default Results;
