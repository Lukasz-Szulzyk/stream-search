import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import axios from 'axios';
import Details from './components/Results/Details';
import Footer from './components/Footer/Footer';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false); // Nowy stan do zarządzania animacją ładowania

  const handleInput = (event) => {
    closeDetail();
    let search = event.target.value;
    setSearch(search);
  };

  const openDetail = (id) => {
    setLoading(true); // Rozpocznij ładowanie
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=c0ea56ad`)
      .then(({data}) => {
        setSelected(data);
        setLoading(false); // Zakończ ładowanie
      })
      .catch(err => {
        console.log('ERROR: ' + err);
        setLoading(false); // Zakończ ładowanie nawet w przypadku błędu
      });
  };

  const searchResult = (event) => {
    event.preventDefault();
    setLoading(true); // Rozpocznij ładowanie
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=c0ea56ad&s=${search}`)
      .then(res => {
        if (res.data.Search) {
          setResults(res.data.Search);
        }
        setLoading(false); // Zakończ ładowanie
      })
      .catch(err => {
        console.log('ERROR: ' + err);
        setLoading(false); // Zakończ ładowanie nawet w przypadku błędu
      });
  };

  const closeDetail = () => {
    setSelected({});
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header handleInput={handleInput} searchResult={searchResult} search={search} />
      
      <div className="flex-grow flex justify-center m-8">
        {!loading ? (
          results.length === 0 ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome to Stream Search</h1>
              <p className="text-lg mt-4">Start by searching for your favorite movies or shows.<br />I will show you on which sreaming services you can watch them.</p>
            </div>
          ) : (
            typeof selected.Title !== "undefined" ? (
              <Details selected={selected} closeDetail={closeDetail} />
            ) : (
              <Results results={results} openDetail={openDetail} />
            )
          )
        ) : (
          <div className="flex justify-center items-center">
            <div className="border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;