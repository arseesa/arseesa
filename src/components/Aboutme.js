import React from 'react';
import Navs from './Navs';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Aboutme = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="500px" height="650px" src="img/pic1.jpg" alt="Card image cap" subTitle="Arseesa Pratannon"/>
        <CardImgOverlay className="bAbout">
          <CardTitle tag="h2" className="title">Arseesa Pratannon</CardTitle>
        </CardImgOverlay>
        
      </Card>
    </div>
  );
};

export default Aboutme;