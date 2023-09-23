import Navbar from '../Components/Navbar'
import Mood from '../Components/Mood'
import Stack from 'react-bootstrap/Stack';
import SpotifyBtn from '../Components/SpotifyBtn';

function Login() {
  return (
    <>
      <Navbar />
      <Stack gap={3} className='d-flex justify-content-center align-items-center mb-4 w-100 h-100'>
        <div> 
        <p className='text-light text-center'>
          Never experience a boring commute again with
        </p>
        </div>
        <div className='h-25'>
        <Mood cname="mood-active" id="commuters-calm" />
        </div>
        <div className='custom-heading-font text-light fs-3 text-center'>
          MUSIC DIARY
        </div>
        <div>
        <p className='text-light text-center'> a mood-based music recommendation and journaling app</p>
        </div>
        <SpotifyBtn/>
      </Stack>

    </>
  );

}

export default Login;