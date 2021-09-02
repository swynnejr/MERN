import React, {useState} from 'react';


const Form = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [picLink, setPicLink] = useState("");


    return (
        <div className = "container">
            <form>
                <div className="form-group">
                    <label htmlFor="">Name of Pet:</label>
                    <input onChange = {(e)=>setName(e.target.value)} type="text" name= "" id= "" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type of Animal:</label>
                    <input onChange = {(e)=>setType(e.target.value)} type="text" name= "" id= "" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Service Requested:</label>
                    <select onChange = {(e)=>setService(e.target.value)} name= "" id="" className="form-control">
                        <option value="Regular">Regular Grooming Package</option>
                        <option value="Plus">Grooming Package with Added Value</option>
                        <option value="Deluxe">All the bells and whistles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Select Appointment Date:</label>
                    <input onChange = {(e)=>setDate(e.target.value)} type="date" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Picture Link:</label>
                    <input onChange = {(e)=>setPicLink(e.target.value)} type="text" name="" id="" className="form-control"/>
                </div>
                <input type="submit" value="Reserve Appointment!" className="btn btn-success mt-3"/>
            </form>
            <hr />
            <h1>Your Information:</h1>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <p>Service: {service}</p>
            <p>Date: {date}</p>
            <p>Your Pet: <img src={picLink} alt="" height="300px"/> </p>
        </div>
    );
};

export default Form;