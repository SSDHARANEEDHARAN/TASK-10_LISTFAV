import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import FavouriteList from "./components/FavouriteList";

const App = () => {
  const [view, setView] = useState("students");
  const [students, setStudents] = useState([
    { id: 1, name: "THARA", isFavourite: false },
    { id: 2, name: "THARANEE", isFavourite: false },
    { id: 3, name: "THARAN", isFavourite: false },
    { id: 4, name: "RAMYA", isFavourite: false },
    { id: 5, name: "SIR", isFavourite: false },
    { id: 6, name: "KUMURAN", isFavourite: false },
    { id: 7, name: "THIRU", isFavourite: false },
    { id: 8, name: "MURUGAN", isFavourite: false },
  ]);

  // Function to add a student to favourites
  const addFavourite = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, isFavourite: true } : student
      )
    );
  };

  // Function to remove a student from favourites
  const removeFavourite = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, isFavourite: false } : student
      )
    );
  };

  // Filter favourites
  const favourites = students.filter((student) => student.isFavourite);

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/SKY.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <Navbar setView={setView} />

      {/* Main Content */}
      <div className="m-5">
        {view === "students" ? (
          <StudentList students={students} addFavourite={addFavourite} />
        ) : (
          <FavouriteList
            favourites={favourites}
            removeFavourite={removeFavourite}
          />
        )}
      </div>
    </div>
  );
};

export default App;
