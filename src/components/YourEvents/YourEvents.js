import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Activity from '../Activity/Activity';

const YourEvents = () => {
    const [user,setUser] = useContext(userContext);
    const [activities,setActivities] = useState([]);
    useEffect(() => {
        fetch("https://afternoon-garden-17042.herokuapp.com/yourEvents?email="+user.email)
        .then(res => res.json())
        .then(data => {
            setActivities(data);
        })
    })
    return (
        <div style={{width: "70%",margin: "auto"}}>
            <div className="row">
                {
                    activities.map(ac => <Activity activity={ac}></Activity>)
                }
            </div>
        </div>
    );
};

export default YourEvents;