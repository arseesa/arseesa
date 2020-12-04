import React from 'react';

import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row,Col, ListGroupItem
} from 'reactstrap';

const Header = (props) => {
  return (
    <div className="portfolio">
<Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>

<Card body outline color="secondary">
        <CardImg top width="100%"   src="img/zee.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4">About me</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">Arseesa Pratannon</CardSubtitle>
          <CardText>นางสาว อาซีซะ ประธานนนท์ อายุ 21 ปี กำลังศึกษาอยู่ปริญญาตรี ชั้นปีที่ 4</CardText>
          <hr/>
          <h4>Contact</h4>
            
                <ListGroupItem>Tel. : 0862794445</ListGroupItem>
               <a href="https://www.facebook.com/arseesa.pratannon"><ListGroupItem>FACEBOOK : Arseessa Pratannon</ListGroupItem></a> 
                <ListGroupItem>LINE : zee200142</ListGroupItem>
                <ListGroupItem>E-mail : 604031721@psu.ac.th</ListGroupItem>
               
           
        </CardBody>
      </Card>
      
      </Col>
      </Row>
      
      
    </div>
  );
};

export default Header;