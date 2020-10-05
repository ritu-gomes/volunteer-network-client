import React, { useContext, useEffect, useState } from 'react';
import { eventContext, userContext } from '../../App';
import { useForm } from "react-hook-form";
import './register.css';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [user,setUser] = useContext(userContext);
    const {name,email} = user;
    const [eventId,setEventId] = useContext(eventContext);
    const [eventInfo,setEventInfo] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    useEffect(() => {
        fetch("https://afternoon-garden-17042.herokuapp.com/events/"+eventId)
        .then(res => res.json())
        .then(data => {
            setEventInfo(data);
        })
    },[]);
    const onSubmit = (data) => {
        const userEvent = {...data,img: eventInfo.img}
        console.log(userEvent);
        fetch('https://afternoon-garden-17042.herokuapp.com/yourEvents',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userEvent)
        })
        history.push("/yourevents");
    }
    return (
        <div className="reg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={name} className="form-control" type="text" name="name" placeholder="your name" ref={register({ required: true })}/><br/>
                {errors.name && <span>This field is required</span>}
                <input className="form-control" defaultValue={email} type="email" name="email" placeholder="your email" ref={register({ required: true })}/><br/>
                {errors.email && <span>This field is required</span>}
                <input className="form-control" type="date" name="date" ref={register({ required: true })}/><br/>
                {errors.date && <span>This field is required</span>}
                <input defaultValue={eventInfo.title} className="form-control" type="text" name="event" id="event" placeholder="event" ref={register({ required: true })}/><br/>
                <input className="btn btn-primary form-control" type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;
