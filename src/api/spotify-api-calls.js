
import SpotifyWebApi from "spotify-web-api-js"
const spotifyApi = new SpotifyWebApi();
const commutersCalmGenres = ["chill","road-trip", "trance", "ambient"];
const studyMotivationGenres = ["chill", "study", "ambient", "classical"];
const partyVibesGenres = ["dance","house", "hip-hop","party", "reggae" ];
const workoutBoostGenres = ["work-out"];
const mentalUpliftGenres = [ "happy", "comedy","disney","holidays", "power-pop"];
const romanticMomentsGenres = ["romance", "latin"];
const heartbreakHealingGenres = ["sad", "romance", "guitar","rainy-day"];
const mindfulRelaxationGenres = ["ambient", "new-age", "sleep"];
const initSpotifyApi = () => {
  const spotifyToken = JSON.parse(localStorage.getItem('spotifyToken'));
  spotifyApi.setAccessToken(spotifyToken);
  return spotifyToken;
}

const getRecommendations = () => {
  const spotifyToken = initSpotifyApi();
  if (spotifyToken){
    const mood = JSON.parse(localStorage.getItem('mood'));
  let seedGenres = ""
  switch(mood) {
    case "commuters-calm":
      seedGenres += commutersCalmGenres.toString()
      break;
    case "study-motivation":
      seedGenres += studyMotivationGenres.toString()
      break;
    case "party-vibes":
      seedGenres += partyVibesGenres.toString()
      break;
    case "workout-boost":
        seedGenres += workoutBoostGenres.toString()
        break;
    case "mentalUpliftGenres":
      seedGenres += mentalUpliftGenres.toLocaleString();
      break;
    case "romantic-moments":
      seedGenres += romanticMomentsGenres.toString()
      break;
    case "heartbreak-healing":
      seedGenres += heartbreakHealingGenres.toString()
      break;
    case "mindfulness-relaxtion":
      seedGenres += mindfulRelaxationGenres.toString()
      break;
  }
  // const options = {limit: 15, seed_genres: seedGenres}
  // spotifyApi.getRecommendations(options).then((response)=> {
  //   localStorage.setItem('recObject', JSON.stringify(response));
  // });
  }
}

const processRecommendations = () => {
  const recObject = getRecommendations();
  console.log(recObject);
  const recommendationObj = JSON.parse(localStorage.getItem('recObject'));
  let trackArray = [];
  recommendationObj["tracks"].map((obj) => {
 
    trackArray.push(obj["uri"]);
  })
  localStorage.removeItem("recObject");
  localStorage.setItem('trackArray', JSON.stringify(trackArray));
  console.log(trackArray);
  return trackArray;
}
export {processRecommendations};