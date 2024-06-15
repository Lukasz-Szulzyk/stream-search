import React, { useRef, useEffect } from 'react';
import defaultImage from './default-image.png';

const ResultItem = ({ result, openDetail }) => {
  const imgRef = useRef(null);
  const imageUrl = result.Poster !== 'N/A' ? result.Poster : defaultImage;

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.height = `${imgRef.current.offsetWidth * 1.5}px`;
    }
  }, [result.Poster]);

  return (
    <div key={result.index} className="cursor-pointer" onClick={() => openDetail(result.imdbID)}>
      <img
        ref={imgRef}
        src={imageUrl}
        alt={result.Title}
        className="w-full object-cover rounded-md shadow-custom"
      />
      <p className="text-center mt-2 font-medium font-sans text-sm md:text-base">{result.Title}</p>
    </div>
  );
}

export default ResultItem;
