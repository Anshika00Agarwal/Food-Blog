import React from 'react'
import propsType from "prop-types"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Header(props) {
  return (

    <section className='navbar-bg' >


      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">todos list</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className=" btn-style" type="submit">sign up</button>
              <button className=" btn-style btn-style-border" type="submit">login</button>
            </form>

          </div>
        </div>
      </nav>
      <hr />
      <div className='banner-content'>


        <div className='banner-container'>
          <div className='banner-description'>
            <h1>
              Food blog
            </h1>
            <br />
            <h4>International food blog </h4>
            <br />
            <h6>Food blogs have always been very popular. This is not only because
              <br /> food is something we all need, but also because blogging about it has turned<br /> out to be quite lucrative for those who have a lot of tasty content to offer.</h6>
          </div>
          <Card style={{ width: '18rem' }}>

            <Card.Body className='   card-container f-s 20px'>
              <Card.Img variant="top" src="food.jpg" />
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>




    </section>

  )

}


Header.propsType = {
  title: propsType.string

}