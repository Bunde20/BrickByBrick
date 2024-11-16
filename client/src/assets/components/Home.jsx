import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <>
      <div className="titleContainer">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="titleScript">Track your Workout with precision.</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button href="#" type="submit" className="titleButton" size="lg">
              Get Started
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
