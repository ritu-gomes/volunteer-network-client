import React from 'react';
import deleteLogo from '../../logos/trash-2 9.png';

const EventTable = (props) => {
    const {name,email,event,date,_id} = props.event;
    const deleteEvent = (id) => {
        fetch(`https://afternoon-garden-17042.herokuapp.com/delete/${id}`,{
            method: "DELETE"
        })        
    }
    return (
        <>
            <tr>
                <th scope="row">{name}</th>
                <td>{email}</td>
                <td>{date}</td>
                <td>{event}</td>
                <td onClick={() => deleteEvent(_id)}><img style={{background: "red", width: "20px", borderRadius: "5px"}} src={deleteLogo} alt="delete"/></td>
            </tr>
        </>
    );
};

export default EventTable;