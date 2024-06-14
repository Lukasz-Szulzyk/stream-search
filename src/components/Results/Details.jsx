import React from 'react'

const Details = ({selected, closeDetail }) => {
  return (
    <main className="flex-grow">
      <div className="container mx-auto flex-grow relative">
        <div class="md:flex">
          <div className="w-full md:w-1/2 p-4">
            <img src={selected.Poster} alt={selected.Title} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col">
            <div class="flex items-start justify-between">
              <h2 className="text-3xl font-bold md:mr-4">{selected.Title}</h2>
              <button className="bg-black text-white rounded py-2 px-4" onClick={closeDetail}>Back</button>
            </div>
            <p className="py-1">{selected.Year}</p>
            <p className="py-1">Rating: {selected.imdbRating}</p>
            <p className="py-1">{selected.Plot}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Details;