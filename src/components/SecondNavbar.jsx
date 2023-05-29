import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';

function JustifiedExample() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className='SecondNav'>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">About us </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default JustifiedExample;