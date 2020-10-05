import React from 'react';
import { useForm } from "react-hook-form";
import './adminadd.css';

const AdminAdd = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch("https://afternoon-garden-17042.herokuapp.com/addEvent",{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div className="all">
            <div className="add-event">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="title" type="text" placeholder="Event You Want To Add" ref={register({ required: true })}/>
                    {errors.title && <span>This field is required</span>}
                    <input name="img" className="form-control" type="file"i/>
                    <input type="submit" className="form-control btn btn-primary" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default AdminAdd;