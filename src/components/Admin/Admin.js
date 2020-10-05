import React, { useEffect, useState } from 'react';
import EventTable from '../EventTable/EventTable';
import addLogo from '../../logos/plus 1.png'
import './admin.css';
import AdminAdd from '../adminAdd/AdminAdd';

const Admin = () => {
    const [allRegistrations,setAllRegistrations] = useState([]);
    const [add,setAdd] = useState(false);
    useEffect(() => {
        fetch("https://afternoon-garden-17042.herokuapp.com/registration")
        .then(res => res.json())
        .then(data => {
            setAllRegistrations(data);
        })
    },[])
    const toggleControl = () => {
        setAdd(true);
    }
    return (
        <div className="admin">
            <div className="add" >
                <button onClick={toggleControl} className="btn btn-primary"><img src={addLogo} alt="add"/> Add Event</button>
            </div>
            {
                !add && 
                <div className="registration">
                    <h4>All Registrations:</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Registration Date</th>
                                <th scope="col">Event</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRegistrations.map(reg => <EventTable key={reg._id} event={reg}></EventTable>)
                            }
                        </tbody>
                    </table>
                </div>
            }
            {
                add && <AdminAdd></AdminAdd>
            }
        </div>
    );
};

export default Admin;