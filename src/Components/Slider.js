import React from 'react'



const Slider = () => {
  return (

    <section>
   
      {/*--------------------collage part------------------------------- */}

      <div class="ro">
  <div class="colum1">
	<img src="https://www.whiskaffair.com/wp-content/uploads/2020/02/Ker-Sangri-1-3.jpg" width="100%" height ="350px"></img>
    <center><br/>
	<h2>Ker Sangri</h2>
	<br/>
    <button class="button">Reciepe</button><br/><br/>
	</center>
  </div>
  <div class="colum1" >
  <img src="https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-jaipuri-aloo-pyaaz-ki-sabzi-potato-onion-curry-video-recipe.jpg" width="100%" height ="350px"></img>
  <center><br/>
	<h2>Aloo Pyaz</h2>
	<br/>
    <button class="button">Reciepe</button><br/><br/>
	</center>
  </div>
  <div class="colum1">
  <img src="https://theculturetrip.com/wp-content/uploads/2017/11/ghevar.jpg" width="100%" height ="350px"></img>
  <center><br/>
	<h2>Malai Paneer Ghewar</h2>
	<br/>
    <button class="button">Reciepe</button><br/><br/>
	</center>
  </div>
  <div class="colum1">
  <img src="https://www.holidify.com/blog/wp-content/uploads/2016/01/Mawa-Kachodi.jpg" width="100%" height ="350px"></img>
    <center><br/>
	<h2>Mawa Ki Kachori</h2>
	<br/>
    <button class="button">Reciepe</button><br/><br/>
	</center>
  </div>
</div>
      

      {/*----------------------aboutpart--------------------------------------------- */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg" class="d-block w-100 " alt="..."  width="100%" height="700px"/>
      
    </div>
    <div className="carousel-item">
      <img src="https://st3.depositphotos.com/16173130/18766/i/600/depositphotos_187664618-stock-photo-rajasthani-maharaja-thaali-pune.jpg" class="d-block w-100" alt="..." width="100%" height="700px"/>
      
    </div>
    <div className="carousel-item">
      <img src="https://wallpaperaccess.com/full/1739009.jpg" class="d-block w-100" alt="..." width="100%" height="700px"/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    


    








<div class="gallery" id="gallery">
<section class="speciality" id="speciality">

<h1 class="heading"> <span> Our Speciality</span> </h1>

<div class="box-container">

    
   
    
</div>

</section>
    <div class="box-container">

       
        <div class="box">
            <img src="http://www.srikrishnasweetsbakery.in/wp-content/uploads/2018/04/rasamalaai-min-600x400.jpg" alt=""/>
            <div class="content">
                
                <a href="#" class="btnt">Ras Malai</a>
            </div>
        </div>
        <div class="box">
            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/08/02131557/Dal_Bati_Choorma-600x400.jpg" alt=""/>
            <div class="content">
              
               
                <a href="#" class="btnt">Dal Batti Churma</a>
            </div>
        </div>
        <div class="box">
            <img src="https://st3.depositphotos.com/5653638/17448/i/600/depositphotos_174481162-stock-photo-carrot-halwa-or-gajar-halwa.jpg" alt=""/>
            <div class="content">
                
                <a href="#" class="btnt">Gajar Halwa</a>
            </div>
        </div>
        <div class="box">
            <img src="https://st4.depositphotos.com/5653638/39299/i/600/depositphotos_392997220-stock-photo-moong-dal-halwa-classic-indian.jpg" alt=""/>
            <div class="content">
                <a href="#" class="btnt">Moong Dal Halwa</a>
            </div>
        </div>
        
       

    </div>
<br/><br/>
</div>


    </section>

  )
}

export default Slider;
