import React, {useState} from "react";
import ImageCard from "./imageCard";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function ContactPage(props) {
  const [display, setDisplay] = useState(false)



  function displayHandler () {
    if(display === true ){
      setDisplay(false)
    }else if ( display === false){
      setDisplay(true)
    }
  }
    
  return (
    <div className="one-contact">
      <ImageCard  onClick= {displayHandler} />
      <div style={{display: display? "block" : "none" }} className="contact-details">
        <div className="contact-maindetails">
          <div className="contact-name">
            <h2>{props.name}</h2>
            <p> <span className="contact-name-icon"> <WorkIcon /> </span> {props.company}</p>
          </div>
          <div className="contact-city">
            <p> <LocationOnIcon /> {props.address}</p>
          </div>
        </div>

        <div className="contact-catchprase">
          <p>
           {props.catchPhrase  || <Skeleton count={1} />}
          </p>
          <p>{props.bs  || <Skeleton count={1} />}</p>
        </div>

        <div className="details">
          <div className="contact phone-number">
            <p>
              <span>
                {" "}
                <SmartphoneIcon />{" "}
              </span>{" "}
              {props.phone}
            </p>
          </div>
          <div className="contact Email">
            <p>
              <span>
                {" "}
                <EmailIcon />
              </span>
              {props.email}
            </p>
          </div>
          <div className="contact address">
            <p>
              <span>
                {" "}
                <HomeIcon />{" "}
              </span>
              {props.suite}, {props.street}
            </p>
          </div>
          <div className="contact website">
            <p>
              <span>
                {" "}
                <LanguageIcon />{" "}
              </span>
              {props.website}
            </p>
          </div>
          <button className="button">See Location</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
