import React from 'react'

const ResultItem = ({ result, openDetail }) => {
  return (
    <div key={result.index} className="bg-gray-200 p-2 rounded-lg cursor-pointer" onClick={e => openDetail(result.imdbID)}>
        <img
            src={result.Poster}
            alt={result.Title}
            className="w-full h-auto rounded-md"
        />
        <p className="text-center mt-2 font-medium font-sans text-sm md:text-base">{result.Title}</p>
    </div>
  )
}

export default ResultItem;