import React from 'react'
import Card from './Card';
import Movieslist from "../movies-list.json"

function NewMovies01() {

    const NewReleaseMovies = Movieslist.filter((data) => data.id === "NewRelease");

  return (
    <>
    <div>
    <div>
       <h1 className='font-semibold text-xl pb-2 bg-blue-600 text-white'>New Release Hollywood Movies</h1>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-4'>
           {
             NewReleaseMovies.map((items) =>(
                <Card key={items.id} items={items}/>
            ))
           }
        </div>
    </div>
    </>
  )
}

export default NewMovies01