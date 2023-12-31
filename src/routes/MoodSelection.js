import Navbar from '../Components/Navbar'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Mood from '../Components/Mood';
import React, { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoodContext } from '../Providers/MoodProvider';
import {getRecommendations} from '../api/spotify-api-calls';
import { AuthContext } from '../Providers/AuthProvider';
import { SpotifyTokenContext } from '../Providers/SpotifyTokenProvider';
import {verifyReturingUser } from '../api/db-api-calls';

function MoodSelection() {
  const {selectMood} = useContext(MoodContext);
  const navigate = useNavigate();
  const {addSpotifyToken, addRefreshToken, getRefreshToken } = useContext(SpotifyTokenContext);
  const { updateUserInfo,getUserInfo} = useContext(AuthContext);
  function handleClick (event, userMood){
    event.preventDefault();
    console.log(getUserInfo());
    selectMood(userMood);
    navigate("/mood-selected");


  }
  useEffect(() => {
    window.location.hash = "";
    verifyReturingUser()
    .then(result => {
      const spotifyToken = result[0].spotify_token;
      const refreshToken = result[0].refresh_token;
      const uid = result[0].uid;
      const username = result[0].username;
      const email = result[0].email;
      addSpotifyToken(spotifyToken);
      addRefreshToken(refreshToken);
      updateUserInfo(uid, username, email);
    }).catch(err => console.log(err))
  },[]);
  
  return (
    <>
      <Navbar />
      <Stack gap={5} className='mt-4 h-100'>
        <p className='text-light text-center display-6 mb-4'>
          How are you feeling today?
        </p>
        <Container className='w-100 h-100'>
          <Row className='mb-md-4'>
            <Col className='mb-4' xs={6} md={3}>
              <Mood cname="mood-normal" id="commuters-calm" inactive={false} onMoodClick={(event) => {handleClick(event,"commuters-calm")}}/>
              <p className='text-light custom-heading-font text-center'>COMMUTER'S CALM</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="study-motivation" inactive={false} onMoodClick={(event) => {handleClick(event,"study-motivation")}}/>
            <p className='text-light custom-heading-font text-center'>STUDY MOTIVATION</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="party-vibes" inactive={false} onMoodClick={(event) => {handleClick(event,"party-vibes")}}/>
            <p className='text-light custom-heading-font text-center'>PARTY VIBES</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="workout-boost" inactive={false} onMoodClick={(event) => {handleClick(event,"workout-boost")}}/>
            <p className='text-light custom-heading-font text-center'>WORKOUT BOOST</p>
            </Col>
          </Row>
          <Row>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="mental-uplift" inactive={false} onMoodClick={(event) => {handleClick(event,"mental-uplift")}}/>
            <p className='text-light custom-heading-font text-center'>MENTAL UPLIFT</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="romantic-moments" inactive={false} onMoodClick={(event) => {handleClick(event,"romantic-moments")}}/>
            <p className='text-light custom-heading-font text-center'>ROMANTIC MOMENTS</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="heartbreak-healing" inactive={false} onMoodClick={(event) => {handleClick(event,"heartbreak-healing")}}/>
            <p className='text-light custom-heading-font text-center'>HEARTBREAK HEALING</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="mindfulness-relaxation" inactive={false} onMoodClick={(event) => {handleClick(event,"mindfulness-relaxation")}}/>
            <p className='text-light custom-heading-font text-center'>MINDFULNESS AND RELAXATION</p>
            </Col>
          </Row>
        </Container>
      </Stack>

    </>
  );

}

export default MoodSelection;