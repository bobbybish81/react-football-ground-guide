const express = require('express');
const mongo = require('./mongo');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.route('/api/footballclubs')
  .get(async (req, res) => {
    const allClubs = await mongo.getClubData();
    res
      .json(allClubs)
      .status(200)
      .end();
  })

app.route('/api/footballclubs/:club')
  .get(async (req, res) => {
    const allClubs = await mongo.getClubData();
    const club = allClubs.filter(obj => obj.club === req.params.club);
    res
      .json(club)
      .status(200)
      .end();
  })
  .post(async (req, res) => {
    // await mongo.postReview(req.params.club);
    const club = await mongo.postGroundReview('Arsenal');
    // const club = allClubs.filter(obj => obj.club === req.params.club);
    // const club = allClubs.filter(obj => obj.club === 'Arsenal');
    res
      .json(club)
      .status(201)
      .end();
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
