import React from 'react';
import Card from './Card';
import Movieslist from '../movies-list.json';

function NewMovies01() {
  const newReleaseMovies = Movieslist.filter((data) => data.id === 'NewRelease'); 

  return (
    <div className="mt-8">
      <div>
        <h1 className="font-semibold text-xl pb-2 bg-blue-600 text-white px-4 py-2">
          New Release Hollywood Movies
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {newReleaseMovies.map((item) => (
          <Card key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
}

export default NewMovies01;
