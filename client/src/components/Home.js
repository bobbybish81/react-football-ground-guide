import React from 'react';
import ClubLink from './ClubLink';

function Home({allClubData, fetchClubData}) {
  return (
    <main className="home-container">
      <h1 className="home-heading">Select a club to visit</h1>
        <div className="link-container">
          <ClubLink allClubData={allClubData} fetchClubData={fetchClubData}/>
        </div>
    </main>
  )
}

export default Home