import React from 'react';
import { ListGroup, ListGroupItem ,Card} from 'reactstrap';

const Example = (props) => {
  return (
    <div >
      <p>Contact</p>
      
      <ListGroup horizontal >
      <ListGroupItem>Tel. : 0862794445</ListGroupItem>
        <ListGroupItem tag="a" href="https://www.facebook.com/arseesa.pratannon">FACEBOOK : Arseessa Pratannon</ListGroupItem>
        <ListGroupItem >LINE : zee200142</ListGroupItem>
        <ListGroupItem >E-mail : 604031721@psu.ac.th</ListGroupItem>
        <ListGroupItem >Vestibulum at eros</ListGroupItem>
      </ListGroup>
      
    </div>

  );
}

export default Example;