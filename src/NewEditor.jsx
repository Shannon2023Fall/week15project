import React, {useState} from "react";

export default function EventList({
    events,
    onChangeEvent,
    onDeleteEvent
}) {
    return (
      <ul>
        {events.map(event => (
        <li key={event.id}>
        <Task    // What is this <Task />
          event={event}
          onChange={onChangeEvent}
          onDelete={onDeleteEvent}
        />
        </li>
        ))}
      </ul>
    );
}

function Task({event, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false);
    let eventContent;
    if (isEditing) {
        eventContent = (
            <>
            <input value={event.gender} onChange={e => { onchange({ ...event, gender: e.target.value }); }} />
            <input value={event.age} onchange={e => { onchange({...event, age: e.target.value}); }} />
            <input value={event.month} onchange={e => { onchange({...event, month: e.target.value}); }} />

            <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        eventContent = (
            <>
            {event.gender}
            {event.age}
            {event.month}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
          {eventContent}
          <button onClick={() => onDelete(event.id)}>Delete</button>
        </label>
    );
}
