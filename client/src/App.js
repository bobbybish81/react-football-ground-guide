import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Club from './components/Club';
import './App.css'

function App() {

  const [allClubData, setAllClubData] = useState([]);
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    fetch('/api/footballclubs')
      .then(res => res.json())
        .then(data => setAllClubData(data))
  },[])


  const fetchClubData = clubName => {
    console.log(clubName)
    fetch(`/api/footballclubs/${clubName}`)
      .then(res => res.json())
        .then(data => setClubData(data))
  }

  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home allClubData={allClubData} fetchClubData={fetchClubData}/>}></Route>
        <Route path="/club" element={<Club clubData={clubData}/>}></Route>
      </Routes>
      {/* <footer className="footer">
        <p>©2022 Rob's Premier League Football Ground Guide • All Rights Reserved • Design by Robert Bish</p>
      </footer> */}
    </>
  )
}

export default App

