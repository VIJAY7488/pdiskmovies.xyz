import React from 'react';

function Card({ items }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card card-compact w-76 bg-base-100 shadow-lg gap-x-8 box-content md:h-96 sm:w-82 lg:mx-10">
        <figure className="md:p-4">
          <img src={items.image} alt={items.title} className="object-cover" />
        </figure>
        <div className="card-body">
          <a href="#" className="card-title cursor-pointer hover:text-blue-700">
            {items.title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
