import React from "react";

const StudentList = ({ students, addFavourite }) => {
  return (
    <div className="bg-white p-5 shadow-md m-5">
      {students.map((student) => (
        <div
          key={student.id}
          className="flex justify-between items-center p-5 m-3 bg-gray-100 shadow hover:shadow-lg transition duration-300"
        >
          <span className="text-sm font-medium">{student.name}</span>
          <button
            disabled={student.isFavourite}
            onClick={() => addFavourite(student.id)}
            className={`px-3 py-1 text-sm transition duration-300 ${
              student.isFavourite
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-400 hover:bg-blue-500 text-white"
            }`}
          >
            {student.isFavourite ? "Added" : "Add to Favourite"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
