import React from "react";

const FavouriteList = ({ favourites, removeFavourite }) => {
  return (
    <div className="bg-white p-5 shadow-md m-5">
      {favourites.length ? (
        favourites.map((student) => (
          <div
            key={student.id}
            className="flex justify-between items-center p-5 m-3 bg-gray-100 shadow hover:shadow-lg transition duration-300"
          >
            <span className="text-sm font-medium">{student.name}</span>
            <button
              onClick={() => removeFavourite(student.id)}
              className="px-3 py-1 text-sm bg-red-400 hover:bg-red-500 text-white shadow transition duration-300"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No favourite students yet!</p>
      )}
    </div>
  );
};

export default FavouriteList;
