import React from "react";

const Navbar = ({ setView }) => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 p-5 shadow-md m-5">
      <h1 className="text-lg font-bold text-white">STUDENT LIST</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setView("students")}
          className="px-4 py-2 text-sm bg-blue-400 hover:bg-blue-500 text-white shadow transition duration-300"
        >
          List of Students
        </button>
        <button
          onClick={() => setView("favourites")}
          className="px-4 py-2 text-sm bg-green-400 hover:bg-green-500 text-white shadow transition duration-300"
        >
          Favourite Students
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
