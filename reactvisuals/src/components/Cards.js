import Card from 'react-bootstrap/Card';
import HolderImage from '../assets/f-16.jpg';
import Row from "react-bootstrap/esm/Row";
import Nim from "../assets/NIM.jpg";
import Beechjet from "../assets/BE40.jpg";
import B747 from "../assets/B742.jpg";
import A400 from "../assets/A400.jpg";
import A225 from "../assets/A225.jpg";
import VulcanAVRO from "../assets/VULC.jpg";
import C210 from "../assets/C10T.jpg";
import P32R from "../assets/P32R.jpg";

const CardInfo = () => {
    const cardDetails = [
      {image: Nim, title: 'BAE SYSTEMS Nimrod', 'text': 'Maritime patrol and ELINT aircraft'},
      {image: Beechjet, title: 'BEECH 400 Beechjet', 'text': 'Light corporate jet'},
      {image: B747, title: 'BOEING 747-200', 'text': 'Long range, high capacity wide-body airliner'},
      {image: A400, title: 'AIRBUS A400M Atlas', 'text': 'Multi-national four-engine turboprop military transport aircraft'},
      {image: A225, title: 'ANTONOV An-225 Mriya', 'text': 'The Antonov An-225 Mriya'},
      {image: VulcanAVRO, title: 'AVRO Vulcan', 'text': 'Jet-powered delta wing strategic bomber'},
      {image: C210, title: 'CESSNA P210 (turbine)', 'text': 'Six-seat, high-performance, retractable-gear single-engined general aviation aircraft'},
      {image: P32R, title: 'PIPER PA-32R', 'text': 'Light aircraft'}
    ];
  
    const displayCard = (card, index) => {
      return(
        <Card className='homeCards' style={{ width: '18rem', borderRadius: '20px', backgroundColor: "#605661"}} key={index}>
          <div className='cardIMG'>
            <img variant="top" src={card.image} className='mt-3 rounded-4' style={{height: '158px', width: '242px'}}></img>
          </div>
          
          <Card.Body>
            <Card.Title className='text-white' style={{fontWeight: "900"}}>{card.title}</Card.Title>
            <Card.Text className='text-white'>
              {card.text}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  
    return <Row className='Cards justify-content-md-center flex-wrap' style={{gap: '50px', textAlign: "start"}}>{cardDetails.map(displayCard)}</Row>
  }
  
  export default CardInfo;