import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import { Card, CardTitle,CardImg,CardImgOverlay } from 'reactstrap';
import Weather from './components/Weather';
function Aboutme() {

  const [name, setdata] = useState(null);
  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=1d2822a6e2fc38ebd9bb825f2dda2cca')
      .then(response => response.json())
      .then(data => setdata(data.name));
  }, []);
  
  const Aboutme = (props) => {
    return (
      <div>
        <Card inverse>
          <CardImg width="500px" height="650px" src="img/pic1.jpg" alt="Card image cap" subTitle="Arseesa Pratannon"/>
          <CardImgOverlay className="bAbout">
            <CardTitle tag="h2" className="title"><Weather/></CardTitle>
          </CardImgOverlay>
          
        </Card>
      </div>
    );
  };
}




export default Aboutme;


