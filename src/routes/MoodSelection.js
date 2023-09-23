import Navbar from '../Components/Navbar'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Mood from '../Components/Mood';

function MoodSelection() {
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
              <Mood cname="mood-normal" id="commuters-calm" />
              <p className='text-light custom-heading-font text-center'>COMMUTER'S CALM</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="study-motivation"/>
            <p className='text-light custom-heading-font text-center'>STUDY MOTIVATION</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="party-vibes"/>
            <p className='text-light custom-heading-font text-center'>PARTY VIBES</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="workout-boost"/>
            <p className='text-light custom-heading-font text-center'>WORKOUT BOOST</p>
            </Col>
          </Row>
          <Row>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="mental-uplift"/>
            <p className='text-light custom-heading-font text-center'>WORKOUT BOOST</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="romantic-moments"/>
            <p className='text-light custom-heading-font text-center'>ROMANTIC MOMENTS</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="heartbreak-healing"/>
            <p className='text-light custom-heading-font text-center'>HEARTBREAK HEALING</p>
            </Col>
            <Col className='mb-4' xs={6} md={3}>
            <Mood cname="mood-normal" id="mindfulness-relaxation"/>
            <p className='text-light custom-heading-font text-center'>MINDFULNESS AND RELAXATION</p>
            </Col>
          </Row>
        </Container>
      </Stack>

    </>
  );

}

export default MoodSelection;