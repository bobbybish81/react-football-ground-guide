// import Form from './Form';
import Review from './Review';

function Club({clubData}) {
  console.log('clubData:', clubData[0])
  const imageName = clubData[0]?.club.replaceAll(' ', '_');
  const reviews = clubData[0]?.details.reviews;
  console.log('reviews:', reviews)
  return (
    <>
    <main className="club-data-container">
      <h1 className="club-data-name">{clubData[0]?.club}</h1>
      <section className="club-data">
        <article className="club-info">
        <img className="stadium-image" src={require(`../images/${imageName}.png`)} alt={`${clubData[0]?.club} Stadium`} />
          <p className="club-info-text"><b>Club Nickname: </b>{clubData[0]?.details.club_nickname}</p>
          <p className="club-info-text"><b>Stadium: </b>{clubData[0]?.details.Stadium}</p>
          <p className="club-info-text"><b>Capacity: </b>{clubData[0]?.details.capacity}</p>
          <p className="club-info-text"><b>Opened: </b>{clubData[0]?.details.year_ground_opened}</p>
          <p className="club-info-text"><b>Address: </b>{clubData[0]?.details.address}</p>
          <p className="club-info-text"><b>Telephone: </b>{clubData[0]?.details.telephone}</p>
          <p className="club-info-text"><b>Ticket Office: </b>{clubData[0]?.details.ticket_office}</p>
          <p className="club-info-text"><b>Stadium Tours: </b>{clubData[0]?.details.stadium_tours}</p>
          <p className="club-info-text"><b>Pitch Size: </b>{clubData[0]?.details.pitch_size}</p>
          <p className="club-info-text"><b>Pitch Type: </b>{clubData[0]?.details.pitch_type}</p>
          <p className="club-info-text"><b>Shirt Sponsors: </b>{clubData[0]?.details.shirt_sponsors}</p>
          <p className="club-info-text"><b>Kit Manufacturer: </b>{clubData[0]?.details.kit_manufacturer}</p>
          <p className="club-info-text"><b>Home Kit: </b>{clubData[0]?.details.home_kit}</p>
          <p className="club-info-text"><b>Away Kit: </b>{clubData[0]?.details.away_kit}</p>
        </article>
      <aside className="reviews-info">
        <div>
        <h3 className="reviews-title">Fan Reviews</h3>
        <button className="add-reviews-button">Add a review</button>
        </div>
        {/* <Form/> */}
        <Review />
        {/* <Review reviews={reviews}/> */}
      </aside>
      </section>
    </main>
    </>
  )
}

export default Club