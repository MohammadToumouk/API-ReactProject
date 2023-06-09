import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';

function JustifiedExample() {
  return (
    <nav role="navigation" class="nav">
    <ul class="nav-items">
        <li class="nav-item">
            <a href="#" class="nav-link"><span>Home</span></a>
        </li> 
        <li class="nav-item dropdown">
            <a href="#" class="nav-link"><span>Products</span></a>
            <nav class="submenu">
                <ul class="submenu-items">
                    <li class="submenu-item"><a href="#" class="submenu-link">Product #1</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Product #2</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Product #3</a></li>
                </ul>
            </nav>
        </li> 
        <li class="nav-item">
            <a href="#" class="nav-link"><span>Services</span></a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link"><span>Pricing</span></a>
        </li> 
        <li class="nav-item">
            <a href="#" class="nav-link"><span>News</span></a>
        </li>
        <li class="nav-item dropdown">
            <a href="#" class="nav-link"><span>More</span></a>
            <nav class="submenu">
                <ul class="submenu-items">
                    <li class="submenu-item"><a href="#" class="submenu-link">About</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Contact</a></li>
                    <li class="submenu-item"><hr class="submenu-seperator" /></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Support</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">FAQs</a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link">Careers</a></li>
                </ul>
            </nav>
        </li>  
    </ul>
</nav>
    
  );
}

export default JustifiedExample;




{/* <Nav justify variant="tabs" defaultActiveKey="/home" className='SecondNav'>
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
    </Nav> */}