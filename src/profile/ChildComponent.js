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
  padding : '12px 20px',
  color :'red',
  background:'',
  borderRadius: '5px',
  textTransform: 'uppercase' ,
  cursor :'pointer',
}

 function ChildComponent(props)
{ 
    return(
       <user style={myStyle} >
        
        <h1 > This is the personal profile of : {props.FullName} <br/> {props.Bio}  <br/>  {props.Profession} </h1>
        {props.children}
        <button onClick={() => props.handleAlert(props.FullName)} style={buttonStyle}>user full name</button>
      
        </user>
 
    )
}
export default ChildComponent ;

