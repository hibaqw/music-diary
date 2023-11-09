import Navbar from '../Components/Navbar'
import Mood from '../Components/Mood'
import Stack from 'react-bootstrap/Stack';
import SpotifyBtn from '../Components/SpotifyBtn';
import '../custom.scss';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { SpotifyTokenContext } from '../Providers/SpotifyTokenProvider';
import { loginUser,verifyReturingUser } from '../api/db-api-calls';

function Login() {
  const { setLoginStatus } = useContext(AuthContext);
  const { addSpotifyToken } = useContext(SpotifyTokenContext);
  useEffect(() => {
    window.location.hash = "";
      // loginUser()
      //   .then(getCredentials()
      //     .then(result => {
      //       let token = result[0].spotify_token;
      //       addSpotifyToken(token);
      //       console.log({ message: 'Request received!', token })
      //       // window.location.href = "http://localhost:3000/mood-selection"
      //     }
      //     ).catch
      //     (err => console.log(err)))
      //   .catch(err => console.log(err))
      verifyReturingUser()
      .then(result => {
        console.log(result);
        window.location.href = "http://localhost:3000/mood-selection";
      })
      .catch(error => {
        console.log(error.response.data)
        loginUser()
        .then(result => 
          { console.log(result);
            window.location.href = "http://localhost:3000/mood-selection";
          })
        .catch(error => {console.log(error.response.data)})
      })
       

  }, [])
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
          <SpotifyBtn />
        </Stack>

      </div>

    </>
  );

}

export default Login;