import React, {useState} from "react";

export default function AddEvent({ onAddEvent }) {
    const [id, setId] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [month, setMonth] = useState('');

    const handleAdd = () => {
      setId('');
      setGender(''); 
      setAge(''); 
      setMonth('');
    }

    return (
      <>
      <label> Add ID: 
        <input
          placeholder="Year+Numbering"
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </label>
      <label> Add Gender: 
        <input
          placeholder="Male or Female"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
      </label>
      <label> Add Age: 
        <input
          placeholder="Integer Number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <label> Add Month:
        <input
          placeholder="Month Name"
          value={month}
          onChange={e => setMonth(e.target.value)}
        />
      </label>
        <button onClick={() => {const event = { id, gender, age, month };
        handleAdd();
        onAddEvent(event);
        }}>Add</button>
      </>
    );
}

