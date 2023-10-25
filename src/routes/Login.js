import Navbar from '../Components/Navbar'
import Mood from '../Components/Mood'
import Stack from 'react-bootstrap/Stack';
import SpotifyBtn from '../Components/SpotifyBtn';
import '../custom.scss';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { SpotifyTokenContext } from '../Providers/SpotifyTokenProvider';
import {Navigate} from "react-router-dom";


const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial,item) => {
  let parts = item.split("=");
  initial[parts[0]]= decodeURIComponent(parts[1]);
  return initial;
  }, {});
};
function Login() {
  const { setLoginStatus} = useContext(AuthContext);
  const {addSpotifyToken} = useContext(SpotifyTokenContext);
  useEffect(() => {
    console.log("This is what we derived from the URL: ", getTokenFromUrl());
    const spotifyToken = getTokenFromUrl().access_token
    window.location.hash = "";
    console.log("this is our spotify token");

    if (spotifyToken) {
      addSpotifyToken(spotifyToken);
      console.log(spotifyToken);
      setLoginStatus();
      window.location.href = "http://localhost:3000/mood-selection"
    
    }
  })
  return (
    <>
    <div className='h-100 w-100'>
      <Navbar />
      <Stack gap={3} className='d-flex justify-content-center align-items-center w-100 h-100'>
        <div>
          <p className='text-light text-center'>
            Never experience a boring commute again with
          </p>
        </div>
        <div className='h-25'>
          <Mood cname="mood-active" id="commuters-calm" inactive={true} onMoodClick={(e) => e.preventDefault()}/>
        </div>
        <div className='custom-heading-font text-light fs-3 text-center'>
          MUSIC DIARY
        </div>
        <div>
          <p className='text-light text-center'> a mood-based music recommendation and journaling app</p>
        </div>
        <SpotifyBtn />
      </Stack>

    </div>

    </>
  );

}

export default Login;