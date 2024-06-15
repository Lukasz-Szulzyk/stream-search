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

  const handleInput = (event) => {
    closeDetail();
    let search = event.target.value;
    setSearch(search);
  };

  const openDetail = (id) => {
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=c0ea56ad`)
    .then(({data}) => {
        setSelected(data);
    })
    .catch(err => console.log('ERROR: ' + err));
  }

  const searchResult = (event) => {
    event.preventDefault();
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=c0ea56ad&s=${search}`)
      .then(res => {
        if (res.data.Search) {
          setResults(res.data.Search);
        }
      })
      .catch(err => console.log('ERROR: ' + err));
  };

  const closeDetail = () => {
    setSelected({});
  }

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header handleInput={handleInput} searchResult={searchResult} search={search} />
      { typeof selected.Title != "undefined" ? <Details selected = {selected} closeDetail = {closeDetail} /> :
      <>
        <Results results={results} openDetail={openDetail}/>
      </>
      }
      <Footer />
    </div>
  );
}

export default App;
