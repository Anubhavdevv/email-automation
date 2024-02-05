import React from "react";
import { sendMail } from "../services/sendMail";


function HomePage() {

  async function handleOnClick (){
    let response = await sendMail('https://craftcode.design/');
    console.log(response);
  }

  const buttonWrapperStyle = {
    color: "white",
    display: "inline-block",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return(<div style={buttonWrapperStyle}>
      {/* <input type="text" value="https://craftcode.design/" /> */}
      <input type="name" placeholder="Enter Your Name" required/>
      <input type="email" placeholder="Enter Your Mail" required />
      <button  onClick={ () => handleOnClick()}>Submit</button>
    </div>)
}

export default HomePage;