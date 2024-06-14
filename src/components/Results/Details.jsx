import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Details = ({ selected, closeDetail }) => {
  const [tmdbId, setTmdbId] = useState(null);
  const [streamings, setStreamings] = useState(null);

  useEffect(() => {
    const findTMDBID = async (imdbid) => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/find/${imdbid}?external_source=imdb_id&api_key=8544c4e0afc888ec3e7cac58360de05b`);
        if (data.movie_results && data.movie_results.length > 0) {
          setTmdbId(data.movie_results[0].id);
        }
      } catch (err) {
        console.log('ERROR: ' + err);
      }
    };

    findTMDBID(selected.imdbID);
  }, [selected.imdbID]);

  useEffect(() => {
    if (tmdbId) {
      const findStreamings = async (id) => {
        try {
          const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=8544c4e0afc888ec3e7cac58360de05b`);
          if (data.results && data.results.PL) {
            setStreamings(data.results.PL);
          } else {
            setStreamings([]);
          }
        } catch (err) {
          console.log('ERROR: ' + err);
        }
      };
      findStreamings(tmdbId);
    }
  }, [tmdbId]);

  const renderProviders = (providers) => {
    if (!providers || providers.length === 0) {
      return <p className="w-full">No results</p>;
    }
    return providers.map(provider => (
      <div key={provider.provider_id} className="flex flex-col items-center m-2">
        <img src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`} alt={provider.provider_name} className="mb-2 w-12 h-12 rounded-xl"/>
        <p className="text-xs text-center w-12">{provider.provider_name}</p>
      </div>
    ));
  };

  return (
    <main className="flex-grow">
      <div className="container mx-auto flex-grow relative">
        <div className="md:flex">
          <div className="w-full md:w-1/2 p-4">
            <img src={selected.Poster} alt={selected.Title} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col">
            <div className="flex items-start justify-between">
              <h2 className="text-3xl font-bold md:mr-4">{selected.Title}</h2>
              <button className="bg-black text-white rounded py-2 px-4" onClick={closeDetail}>Back</button>
            </div>
            <p className="py-1">{selected.Year}</p>
            <p className="py-1">Rating: {selected.imdbRating}</p>
            <p className="py-1">{selected.Plot}</p>

            {streamings === null || streamings.length === 0 ? (
              <p className="w-full mt-5">No streaming options available</p>
            ) : (
              <div className="w-full mt-5">
                <h2 className="mt-4 text-xl font-bold">Streaming search results for Poland:</h2>
                <h3 className="mt-4 text-lg font-semibold">Subscription</h3>
                <div className="flex flex-wrap justify-start">
                  {renderProviders(streamings.flatrate)}
                </div>
                <h3 className="mt-4 text-lg font-semibold">Rent</h3>
                <div className="flex flex-wrap justify-start">
                  {renderProviders(streamings.rent)}
                </div>
                <h3 className="mt-4 text-lg font-semibold">Buy</h3>
                <div className="flex flex-wrap justify-start">
                  {renderProviders(streamings.buy)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
