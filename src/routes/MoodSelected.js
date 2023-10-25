import Navbar from '../Components/Navbar'
import Mood from '../Components/Mood'
import Stack from 'react-bootstrap/Stack';
import '../custom.scss';
import Player from '../Components/Player';
import { useEffect, useState } from 'react';
import { processRecommendations } from '../api/spotify-api-calls';
import axios from "axios";

function MoodSelected() {
  const mood = JSON.parse(localStorage.getItem('mood'));
  const spotifyToken = JSON.parse(localStorage.getItem('spotifyToken'));
  const [trackUris , setTrackUris] = useState([]);
  let trackArray = [];
  useEffect(() => {
    processRecommendations();
    setTrackUris(JSON.parse(localStorage.getItem('trackArray')));
  }, []);
  return (
    <div className='h-100 w-100'>
      <Navbar />
      <Stack gap={3} className='d-flex justify-content-center align-items-center mt-3 w-100 h-100'>
        <div className='h-25 w-25'>
          <Mood cname="mood-active" id={mood} inactive={true} onMoodClick={(e) => e.preventDefault()} />
        </div>
      </Stack>
      <Player accessToken={spotifyToken} trackUri={trackUris}/>
    </div>
  );

}

export default MoodSelected;