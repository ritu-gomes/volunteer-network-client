import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { eventContext } from '../../App';
import './event.css';

const Event = (props) => {
    const history = useHistory();
    const {title,img,_id} = props.data;
    const [eventId,setEventId] = useContext(eventContext);
    const handleEvent = (id) => {
        setEventId(id);
        history.push("/register");
    }
    return (
        <div className="md-col-3">
                <div>
                    <div onClick={() => handleEvent(_id)} className="card">
                        <img src={img} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="card-text">{title}</p>
                        </div>
                    </div>
                </div>            
        </div>
    );
};

export default Event;