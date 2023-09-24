import Navbar from '../Components/Navbar'
import Mood from '../Components/Mood'
import Stack from 'react-bootstrap/Stack';
import '../custom.scss';
// import { useContext } from 'react';
// import { MoodContext } from '../Providers/MoodProvider';

function MoodSelected() {
  // const {mood} = useContext(MoodContext);
  const mood = JSON.parse(localStorage.getItem('mood'));
  return (
    <div className='h-100 w-100'>
      <Navbar />
      <Stack gap={3} className='d-flex justify-content-center align-items-center mt-3 w-100 h-100'>
        <div className='h-25 w-25'>
        <Mood cname="mood-active" id={mood} inactive={true} onMoodClick={(e) => e.preventDefault()}/>
        </div>
      </Stack>

    </div>
  );

}

export default MoodSelected;