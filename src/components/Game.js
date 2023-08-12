import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import onebhk from "./img/1bhk.jpg"
import twobhk from "./img/2bhk.jpg"
import threebhk from "./img/3bhk.jpg"
import villa from "./img/villa.jpg"
import bunglow from "./img/bunglow.jpg"


const Game = () => {
  return (
    <div className='container'>
    <div class="row height d-flex justify-content-center align-items-center">

<div class="col-md-8">

  <div class="search">
  {/* <BiSearchAlt2  className='searchbtn'/> */}

    
    <div className='row row1'>
  <div className='col-3'>
  <select class="form-select form-select-lg mb-3 filter" aria-label=".form-select-lg example" style={{fontSize:"15px"}}>
  
  <option selected>Type ↓</option>
  <option value="1">1 BHK</option>
  <option value="2">2 BHK</option>
  <option value="3">3 BHK</option>
  <option value="3">VILLA</option>
  <option value="3">BUNGALOW</option>
  
  </select>
  </div>
  <div className='col-3'>
  <select class="form-select form-select-lg mb-3 filter" aria-label=".form-select-lg example" style={{fontSize:"15px"}}>
  
  <option selected>Location ↓</option>
  <option value="1">UTTAR PRADESH</option>
  <option value="2">KARNATAKA</option>
  <option value="3">DELHI</option>
  <option value="4">MAHARASHTRA</option>
  
  </select>
  </div>

  <div className='col-3'>
  <select class="form-select form-select-lg mb-3 filter" aria-label=".form-select-lg example" style={{fontSize:"15px"}}>
  
  <option selected>Date ↓</option>
  <option value="1">OCT 2023</option>
  <option value="2">DEC 2023</option>
  <option value="3">MARCH 2024</option>
  <option value="4">JUNE 2024</option>
  
  </select>
  </div>

 <div className='col-3'>
  <select class="form-select form-select-lg mb-3 filter" aria-label=".form-select-lg example" style={{fontSize:"15px"}}>
  
  <option selected>Price ↓</option>
  <option value="1">{"<"} 10k</option>
  <option value="2">{"<"} 20k</option>
  <option value="3">{"<"} 30k</option>
  <option value="4">{"<"} 40k</option>
  <option value="5">{"<"} 50k</option>
  <option value="6">{"<"} 100K</option>
  
</select>
 </div>

 </div>
    <button class="btn btn-success">Search</button>
  </div>
  



  
</div>

</div>
    <div class="row" style={{paddingTop:"4%", marginTop:"2%"}}>
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={onebhk} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>₹9k</h5>
        <p class="card-text" style={{fontWeight:"500"}}>1 BHK Flat  <a href="#" class="btn btn-outline-dark" style={{marginLeft:"100px"}}>BOOK NOW!</a></p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={bunglow} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>₹80k</h5>
        <p class="card-text" style={{fontWeight:"500"}}>BUNGALOW  <a href="#" class="btn btn-outline-dark" style={{marginLeft:"100px"}}>BOOK NOW!</a></p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={twobhk} alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>₹18k</h5>
        <p class="card-text" style={{fontWeight:"500"}}>2 BHK  <a href="#" class="btn btn-outline-dark" style={{marginLeft:"100px"}}>BOOK NOW!</a></p>
    
      </div>
    </div>
  </div>
</div>
 <div class="row" style={{paddingTop:"2%", marginBottom:"2%"}}>
 <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={threebhk} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>₹35k  <a href="#" class="btn btn-outline-dark" style={{marginLeft:"100px"}}>BOOK NOW!</a></h5>
        <p class="card-text" style={{fontWeight:"500"}}>3 BHK</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={villa} alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>₹70k</h5>
        <p class="card-text" style={{fontWeight:"500"}}>VILLA  <a href="#" class="btn btn-outline-dark" style={{marginLeft:"100px"}}>BOOK NOW!</a></p>
   
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={bunglow} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>₹90k</h5>
        <p class="card-text" style={{fontWeight:"500"}}>BUNGALOW  <a href="#" class="btn btn-outline-dark" style={{marginLeft:"100px"}}>BOOK NOW!</a></p>
        
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Game