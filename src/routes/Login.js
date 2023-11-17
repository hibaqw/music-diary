import Navbar from '../Components/Navbar'
import Mood from '../Components/Mood'
import Stack from 'react-bootstrap/Stack';
import SpotifyBtn from '../Components/SpotifyBtn';
import '../custom.scss';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { redirect } from 'react-router-dom';

function Login() {
  useEffect(() => {
    window.location.hash = "";
  }, [])
  function handleClick(event) {
    // try making a get request to this end point
    event.preventDefault();
    window.location.href = "http://localhost:8888/login"
  }

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
            <Mood cname="mood-active" id="commuters-calm" inactive={true} onMoodClick={(e) => e.preventDefault()} />
          </div>
          <div className='custom-heading-font text-light fs-3 text-center'>
            MUSIC DIARY
          </div>
          <div>
            <p className='text-light text-center'> a mood-based music recommendation and journaling app</p>
          </div>
          <SpotifyBtn onSpotifyLoginClick={(e) => handleClick(e)} />
        </Stack>

      </div>

    </>
  );
}

export default Login;