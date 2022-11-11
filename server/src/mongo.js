const { MongoClient } = require('mongodb');
const env = require('dotenv').config().parsed;

const url = env.mongoURL;
const dbName = 'footballclubs';

let client;
let clubDetails;

const connect = async () => {
  client = await MongoClient.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });
  const db = client.db(dbName);
  clubDetails = db.collection('clubdetails');
  db.on('close', () => {
    console.log('db connection ended');
  });
  db.on('reconnect', () => {
    console.log('db connected');
  });
};

const getClubData = async () => {
  await connect();
  const allClubs = await clubDetails.find().toArray();
  setTimeout(() => client.close(), 1000);
  return allClubs;
};
const postClubData = async (obj) => {
  await connect();
  clubDetails.insertOne(obj);
  setTimeout(() => client.close(), 1000);
};

const postGroundReview = async (clubName) => {
  await connect();
  const allClubs = await clubDetails.find().toArray();
  const club = allClubs.filter(obj => obj.club === 'Arsenal');
  const reviews = club[0].details.reviews;
  reviews.unshift(
    {
      name: "Dimitris",
      date_created: "11 November 2022",
      team: "Chelsea",
      rating: 3,
      comments: "Not the best experince I've had but cenrtainly not the worst"
    });
  return club;
  setTimeout(() => client.close(), 1000);
};

module.exports.getClubData = getClubData;
module.exports.postClubData = postClubData;
module.exports.postGroundReview = postGroundReview;
