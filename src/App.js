
import React  from "react" ;
import './App.css';
import UserProfile  from './profile/ChildComponent' ;
import icon from './profile/myphoto.JPEG'
import PropTypes from "prop-types";
//import {handleAlert} from './profile/ChildComponent';

const photoStyle={
  textAlign: 'center', 
  backgroundColor : 'orange',
  borderRadius :'10px'
}
function App(props) { 
 const handleAlert = (name) => alert(`this is the profile of  ${name}`);

  return (
    <UserProfile 
   
    image="myphoto.JPEG"
    FullName="wafaa sakouhi"
    Bio="master in engineering and management of industrial syetems"
    Profession="baby full stack developper" 
    handleAlert={handleAlert}
  
    >
      <div> 
<img src={icon}  alt="profilephoto"  style={photoStyle}/>

</div>

  </UserProfile>
  
  );
}

App.defaultProps = {
  title: "This is the default value"
};

App.propTypes = {
  FullName: PropTypes.string,
  Bio: PropTypes.string.isRequired,
  Profession: PropTypes.number.isRequired,
  handleAlert: PropTypes.func.isRequired
};

export default App;
