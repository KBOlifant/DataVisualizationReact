import Card from 'react-bootstrap/Card';
import HolderImage from '../assets/f-16.jpg';
import Row from "react-bootstrap/esm/Row";

const CardInfo = () => {
    const cardDetails = [
      {image: HolderImage, title: 'Aston Martin'},
      {image: HolderImage, title: 'Alpine'},
      {image: HolderImage, title: 'Ferreri'},
      {image: HolderImage, title: 'Mercedes'},
      {image: HolderImage, title: 'Haas'},
      {image: HolderImage, title: 'Redbull'},
      {image: HolderImage, title: 'MClaren'},
      {image: HolderImage, title: 'MClaren'}
    ];
  
    const displayCard = (card, index) => {
      return(
        <Card className='homeCards' style={{ width: '18rem', borderRadius: '20px', backgroundColor: "#72091F"}} key={index}>
          <Card.Img variant="top" src={card.image} className='mt-3 rounded-4' style={{ height: '180px'}} />
          <Card.Body>
            <Card.Title className='text-white'>{card.title}</Card.Title>
            <Card.Text className='text-white'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  
    return <Row className='Cards justify-content-md-center flex-wrap' style={{gap: '50px'}}>{cardDetails.map(displayCard)}</Row>
  }
  
  export default CardInfo;