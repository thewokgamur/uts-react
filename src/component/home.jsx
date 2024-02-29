import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import semuakelas from '../index'
import Header from './header.jsx';
import { useState } from 'react';

function Home() {
    const [products,setproduct,] = useState(0)
    
    function increaseOrderCount(){
        setproduct(products + 1)
    }

    function decreaseOrderCount(){
        if (products > 0){
            setproduct(products - 1)
        }
    }

    return (
        <>
              <Header />
              <Container>
  
  <Row>
    {semuakelas.map((kelas) => {
      return (
        <>
        <Col>
        <Card style={{width: '18rem' }}>
          <Card.Img style={{  height: '10rem', width: '14rem' }} variant="top" src={kelas.image} />
          <Card.Body>
            <Card.Title>{kelas.title}</Card.Title>
            <Card.Text>
              {kelas.price}
            </Card.Text>
            <div className='Home'>
            <Button onClick={decreaseOrderCount} variant="outline-primary">-</Button>
            <span>{products}</span>
            <Button variant="outline-primary" onClick={increaseOrderCount}>+</Button>
            </div>
            <Link to={{ pathname: `/toko/${kelas.id}`,
          }}>
            <Button >Beli</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
        </>
      );
    })}
  

  
  </Row>
  
  </Container>
        </>
    )

}

export default Home;