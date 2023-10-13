import Navbar from '../Components/Navbar'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Mood from '../Components/Mood';
import React, { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoodContext } from '../Providers/MoodProvider';
import { AuthContext } from '../Providers/AuthProvider';
import { SpotifyTokenContext } from '../Providers/SpotifyTokenProvider';


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
function MoodSelection() {
  const {selectMood} = useContext(MoodContext);
  const navigate = useNavigate();
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
    }
  })
  function handleClick (event, userMood){
    event.preventDefault();
    selectMood(userMood);
    navigate("/mood-selected");

  }
  
  return (
    <>
      <Navbar />
      <Stack gap={3} className='mt-4 h-100'>
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