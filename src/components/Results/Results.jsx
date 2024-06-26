import React from 'react';
import ResultItem from './ResultItem';

const Results = ({results, openDetail}) => {
  return (
    <main className="flex-grow">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
          {
            results.map((result, index) => (
              <ResultItem key={index} result={result} openDetail={openDetail} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Results;