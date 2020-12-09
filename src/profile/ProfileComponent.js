import React from "react";
//import {handleAlert} from 'react' ;

const myStyle =
{
  color : 'lightblue',
  fontSize : '10px',
  textAlign : 'center'
  
}
const buttonStyle=
{
  color :'red',
  fontSize :'bold'
}
 function ChildComponent(props)
{ 
    return(
       <user style={myStyle} >
        
        <h1 > this is the personal profile of : {props.FullName} <br/> {props.Bio}  <br/>  {props.Profession} </h1>
        {props.children}
        <button onClick={() => this.handleAlert(props.FullName)} style={buttonStyle}>user full name</button>

        </user>
 
    )
}
export default ChildComponent ;

