import React, { useState, useEffect } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-garden-17042.herokuapp.com/events')
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    },[])
    
    return (
        <div>
            <h1>I Grow By Helping People in need</h1>
            <div className="row d-flex justify-content-around">
                {
                    data.map(dt => <Event data={dt} key={dt._id}></Event>)
                }
            </div>
        </div>
    );
};

export default Home;