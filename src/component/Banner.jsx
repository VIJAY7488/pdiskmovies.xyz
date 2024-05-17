import React from 'react';

function Banner() {
  return (
    <>
      <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://wallpapers.com/images/high/marvel-s-moon-knight-5120-x-1440-qk9wyp1zn5z7lsl4.webp')` }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Unlimited <span className="text-yellow-600">Movies</span>, Web Series & More.
          </h1>
          <button className="btn btn-secondary mt-6 text-xl">Free Download</button>
        </div>
      </div>
    </>
  );
}

export default Banner;
