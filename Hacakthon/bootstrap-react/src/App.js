import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import { Container, Row, Col } from 'react-bootstrap';

import { Cart} from './Components/Cart'
import {Confirmation} from './Components/Confirmation'
import serve from './data';
function App() {
  const [ordered,setOrdered]= useState(false);
  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);

    }, 3000)
  }
  return (
   
  <Container>
    {ordered && <Confirmation toggle={setOrdered} />}
    <Row>
    {serve.map(data =>(
      <Col xs={3} className="mb-5"key={'$(data.id)'}>
        <Cart data={data} setOrdered={displayConfirmation} />
      </Col>
    ))}
   </Row>
  </Container>
   
  );
}

export default App;
