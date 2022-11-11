import React from 'react'
import '../App.css'

function Review() {

  const reviews = [
    {
      name: "Dimitris",
      date_created: "11 November 2022",
      team: "Chelsea",
      rating: 3,
      comments: "Not the best experince I've had but cenrtainly not the worst"
    },
    {
      name: "Munazar",
      date_created: "10 November 2022",
      team: "Arsenal",
      rating: 5,
      comments: "@anonymous you're just bitter cos we are top of the league!"
    },
    {
    name: "anonymous",
    date_created: "8 November 2022",
    team: "Spurs",
    rating: 1,
    comments: "crap stadium, crap fans, crap team, crap experience"
    },
    {
    name: "no1fan",
    date_created: "3 November 2022",
    team: "Fulham",
    rating: 3,
    comments: "Try the Red Lion pub for pre-match drinks, different class"
    },
    {
      name: "Pawel",
      date_created: "1 November 2022",
      team: "Arsenal",
      rating: 5,
      comments: "@Robert B hahahahahahahaha!!!!!"
    },
    {
    name: "Robert B",
    date_created: "1 November 2022",
    team: "Liverpool",
    rating: 1,
    comments: "we lost, no comment!"
    },
    {
      name: "Catalina",
      date_created: "1 November 2022",
      team: "Liverpool",
      rating: 5,
      comments: "Not a fan of football but had the best time! Thank you Arsenal!"
      },
  ]

  return reviews.map((obj, index) => {
    return (<>
          <div className="review-container" key={index} >
            <p className="review-text"><b>Name: </b>{obj.name}</p>
            <p className="review-text"><b>Date Added: </b>{obj.date_created}</p>
            <p className="review-text"><b>Team: </b>{obj.team}</p>
            <p className="review-text"><b>Rating: </b>{obj.rating}</p>
            <p className="review-comment"><b>Comments: </b>{obj.comments} </p>
          </div>
    </>)
  })
}

export default Review