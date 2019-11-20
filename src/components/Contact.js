import React from 'react';
import './style.css';


const Contact= props =>{
    console.log(props);
    return(
    <div className="Contact">
    <img className="avatar" src={props.avatar}/>
        <div className ="status">
        <h3 className="name">{props.name}</h3>
            <div className="status-text">
            <span className={props.status? 'status-online' :'status-offline'}></span>
            {props.status?'online': 'offline'}
            </div>
        </div>
    </div>
    );
};

export default Contact;
