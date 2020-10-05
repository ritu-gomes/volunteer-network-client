import React from 'react';
import './activity.css';

const Activity = (props) => {
    const {event,img,date,_id} = props.activity;
    const deleteEvent = (id) => {
        console.log(id);
        fetch(`https://afternoon-garden-17042.herokuapp.com/delete/${id}`,{
            method: "DELETE"
        })
    }
    return (
        <div className=" main col-md-6">
            <div className="row">
                <div className="col-md-4">
                    <img style={{width:"100%"}} src={img} alt="error"/> 
                </div>
                <div className="col-md-8"> 
                    <h3>{event}</h3>
                    <h5>{date}</h5>
                    <button onClick={() => deleteEvent(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;