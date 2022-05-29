import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Home.css';
import{Card,Carousel} from 'react-bootstrap'

function Home() {
  const navi=useNavigate()
  return (
    <div>
      
      <div className='row'>
      <div className='card'>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>PLEASURE TO OUR DOCTORS</Card.Title>
    <Card.Text>
      <img src="https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
    <p>Got the Shot dont make our Doctors so tied</p>
    <button onClick={()=>navi('/vaccine')} className='button'>Go the shot</button>
      </Card.Text>
    
  </Card.Body>
</Card>

      </div>
      <div className='card2'>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="ddf"
      src="https://images.pexels.com/photos/3991311/pexels-photo-3991311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>PANDAMEIC</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="ddf"
      src="https://images.pexels.com/photos/5921725/pexels-photo-5921725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>VACCINATION IS THE ONLY WAY TO SURVIVE</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      <div className='card3'>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Mask up</Card.Title>
    <Card.Text><img src="https://images.pexels.com/photos/4113084/pexels-photo-4113084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
    <p style={{fontSize:'10',fontweight:"bold"}}>CHIN UP DONT LET YOUR MASK DOWN</p>

    </Card.Text>
    
  </Card.Body>
</Card>
      </div>
      </div>
    
      
    </div>
  )
}

export default Home