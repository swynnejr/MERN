import React from 'react';


const Form = () => {
    return (
        <div className = "container">
            <form>
                <div className="form-group">
                    <label htmlFor="">Type of animal:</label>
                    <input type="text" name= "" id= "" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Name of pet:</label>
                    <input type="text" name= "" id= "" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Service Requested:</label>
                    <select name= "" id="" className="form-control">
                        <option value="Regular">Regular Grooming Package</option>
                        <option value="Plus">Grooming Package with Added Value</option>
                        <option value="Deluxe">All the bells and whistles</option>
                    </select>
                </div>
            </form>

        </div>
    );
};

export default Form;