import React from 'react'
import "../../Spinner.css"


const Spinner = () => {
  return (
    <div>
      {/* <div className="fullpage-wrapper"> */}
  <div className="reactor-container">

    <div className="reactor-container-inner circle abs-center"></div>

    <div className="tunnel circle abs-center"></div>

    <div className="core-wrapper circle abs-center"></div>
    <div className="middle-core">

    <div className="core-outer circle abs-center">
    <div className="inner-colis inner-coil-container">
      <div className="inner-coil coil-9"></div>
      <div className="inner-coil coil-10"></div>
      <div className="inner-coil coil-11"> </div>
      <div className= "inner-coil coil-12"></div>
      <div className="inner-coil coil-13"></div>
      <div className="inner-coil coil-14"></div>
      <div className="inner-coil coil-15"></div>
      <div className="inner-coil coil-16"></div>
    </div>
    </div>
    </div>
    
 
    <div className="core-inner circle abs-center"></div>

    <div className="outer-colis outer-coil-container">
      <div className="outer-coil coil-1"></div>
      <div className="outer-coil coil-2"></div>
      <div className="outer-coil coil-3"></div>
      <div className="outer-coil coil-4"></div>
      <div className="outer-coil coil-5"></div>
      <div className="outer-coil coil-6"></div>
      <div className="outer-coil coil-7"></div>
      <div className="outer-coil coil-8"></div>
    </div>
    
  </div>
{/* </div> */}
</div>
   
  )
}

export default Spinner
