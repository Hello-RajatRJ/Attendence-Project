import React from 'react'
import { holidays } from './holidays'


const CardHolidays = () => {
  var counter = 0;
  const mappedData = (holiday, ind) => {
    const today = new Date().toString()
    // console.log(ind);
    
    if((new Date(today)) < (new Date(holiday.date))){
      counter++;
      if(counter<4)
    return(
    <div key={ind} style={{marginBottom: "20px"}}>
        <h5 className="cardMain" style={{display: "inline-block",marginLeft:"8px"}}>{holiday.date}&nbsp;</h5>
        <p className="cardInfo" style={{display: "inline-block",marginLeft:"10px"}}>{ holiday.day}</p>
        <p className="cardInfo" style={{marginLeft:"10px"}}>{holiday.name}</p>
      </div> )}
  }
  return (
    <div style={{border:"2px solid white",borderRadius:"20px"}}>
      <h4 className="cardHeading" style={{marginBottom: "30px",marginLeft:"15px"}}>Upcoming Holidays</h4>
      {holidays.map(mappedData)}
    </div>
  )
}

export default CardHolidays