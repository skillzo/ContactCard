
import React from "react";

function ImageCard (props) {
    return (
        <div  onClick= {props.onClick} className="contact-image">
          <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="" />
        </div>
    )
}

export default ImageCard;