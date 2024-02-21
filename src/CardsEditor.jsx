import React, { useState } from "react";
import Accidents from './EScooterAccidents.json';


export default function Multifunction({onAddEvent}) {
    const [acciData, setAcciData] = useState(Accidents); // Set the initial display to full data
    console.log(acciData);

// Project tasks of week 8 
    const handleDelete = (id) => {
      console.log("Delete", id);
    // Filter OUT the card with the given id
      const updatedAcciData = acciData.filter(acci => acci.id !== id);
    // Update the state with the updatedAcciData
    setAcciData(updatedAcciData);
  };

    const handleEdit = (id) => {
      console.log("Edit", id);
      // Find the index of the card to be edited due to batch placed buttons
      const index = acciData.findIndex(acci => acci.id === id);
      // Create a copy of the acciData array
      const updatedAcciData = [...acciData];
      // Set the 'editable' property of the card to true
      updatedAcciData[index].editable = true;
      // Update the state with the updatedAcciData
      setAcciData(updatedAcciData);
    };
    
    const handleSave = (id) => {
        const index = acciData.findIndex(acci => acci.id === id);
        const updatedAcciData = [...acciData];
        updatedAcciData[index].editable = false;
        setAcciData(updatedAcciData);
    };

    const handleCancel = (id) => {
        const index = acciData.findIndex(acci => acci.id === id);
        const updatedAcciData = [...acciData];
        updatedAcciData[index].editable = false;
        setAcciData(updatedAcciData);
    };    

    const handleChange = (id, field, value) => {
        const index = acciData.findIndex(acci => acci.id === id);
        const updatedAcciData = [...acciData];
        updatedAcciData[index][field] = value;
        setAcciData(updatedAcciData);
    };

 //   const onAddEvent = (event) => {}

    return (
        <div className="container mt-3 mb-5">
            <h2>Bochum EScooter Accidents reported on news from year 2022</h2>

            <div className="row">
                {/* A map is the standard JavaScript function and also a type of data collection. It offers a fast searching of data. */}
                {acciData.map((acci) => (
                    <div className = "col-md-auto" key={acci.id}> {/* Take ID as searching key */}
                    <div class="card" >
                        <div class="card-header">
                            <h6>ID {acci.id}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            {acci.editable ? (
                                <>
                                    <li class="list-group-item" ><input type="text" value={acci.gender} onChange={e => handleChange(acci.id, "gender", e.target.value)} /></li>
                                    <li class="list-group-item" >Age <input type="number" value={acci.age} onChange={e => handleChange(acci.id, "age", e.target.value)} /></li>
                                    <li class="list-group-item" ><input type="text" value={acci.month} onChange={e => handleChange(acci.id, "month", e.target.value)} /></li>                            
                                </>
                            ) : (
                                <>
                                <li className="list-group-item">{acci.gender}</li>
                                <li className="list-group-item">Age {acci.age}</li>
                                <li className="list-group-item">{acci.month}</li>
                                </>
                            )}                            
                        </ul>
                        <div>
                            {acci.editable ? (
                                <>
                            <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleSave(acci.id)}>Save</button>
                            <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleCancel(acci.id)}>Cancel</button>                                
                                </>
                            ) : (
                                <>
                                <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleEdit(acci.id)}>Edit</button>
                                <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleDelete(acci.id)}>Delete</button>       
                                </>
                            )}
                        </div>
                    </div>
                </div>

                ))}
            </div>

        </div >
    );
}