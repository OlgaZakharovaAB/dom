import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Navibar() {

  
  return (
      <Navbar className='bg'>
        <Container className='cont'>

          <Button className='btn btn-cat' href='catalog'><Link to='/catalog'></Link></Button>

          <Button className='btn btn-brand' href="/"><Link to='/'></Link></Button>

          <Button className='btn btn-hum' href="profile"><Link to='/profile'></Link></Button>

          <Button className='btn btn-cart' href="cart"><Link to='/cart'></Link></Button>

        </Container>
      </Navbar>
    
  );
}

export default Navibar;