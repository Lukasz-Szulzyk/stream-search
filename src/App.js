import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results';
import axios from 'axios';
import Details from './components/Results/Details';
import Footer from './components/Footer/Footer';

function App() {

  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {}
  });

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  const openDetail = (id) => {
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=c0ea56ad`)
    .then(({data}) => {
        setState(prevState => {
          return { ...prevState, selected: data };
        });
    })
    .catch(err => console.log('ERROR: ' + err));
  }

  const searchResult = (event) => {
    event.preventDefault();
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=c0ea56ad&s=${state.search}`)
      .then(res => {
        if (res.data.Search) {
          setState(prevState => {
            return { ...prevState, results: res.data.Search };
          });
        }
      })
      .catch(err => console.log('ERROR: ' + err));
  };

  const closeDetail = () => {
    setState(prevState => { return { ...prevState, selected: {} }})
  }

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      { typeof state.selected.Title != "undefined" ? <Details selected = {state.selected} closeDetail = {closeDetail} /> :
      <>
        <SearchBar handleInput={handleInput} searchResult={searchResult} state={state} />
        <Results state={state} openDetail={openDetail}/>
      </>
      }
      <Footer />
    </div>
  );
}

export default App;
