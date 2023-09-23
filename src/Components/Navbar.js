import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="body-bg"> 
        <Container>
          <div className='custom-heading-font text-light fs-1'> MUSIC DIARY</div>
        </Container>
      </Navbar>
     </>
  );
}

export default BrandExample;