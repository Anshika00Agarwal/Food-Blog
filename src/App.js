import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import About from './Components/About';

import Slider from './Components/Slider';

import "./App.css"

class App extends Component {
render() {
 
	const myStyle={
		backgroundImage:
"url('/food5.jpg')",
		height:'700px',
		
		fontSize:'10px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
    
	};
	return (
	<div style={myStyle}>
  <Header/>
  <Card1/>
  <Card2/>
  <About/>
  
  <Slider/>

  <Footer/>
 
	</div>
	);

 
}
}

export default App;
