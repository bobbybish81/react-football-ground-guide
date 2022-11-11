import React from 'react';
import { Link } from "react-router-dom";

function ClubLink({allClubData, fetchClubData}) {
  return allClubData.map((obj, index) => {
    const imageName = obj.club.replaceAll(' ', '_');
    return (<>
        <Link to="/club" style={{ textDecoration: 'none'}}>
          <div className="club-link" key={index} onClick={() => fetchClubData(obj.club)}>
            <img className="club-badge" src={require(`../badges/${imageName}.png`)} alt={`${obj.club} Badge`} />
            <h3 className="club-name" >{obj.club}</h3>
          </div>
        </Link>
    </>)
  })
}

export default ClubLink