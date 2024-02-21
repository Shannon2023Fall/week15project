import React,{ useState } from 'react'
import './App.css'
import NewEditor from './NewEditor.jsx';
import AddEvent from './AddEvent.jsx';
import accidents from './EScooterAccidents.json';

// let nextId = 13; // Not needed in this case
export default function EventApp() {
    const [events, setEvents] = useState(accidents);

    function handleAddEvent(id, gender, age, month){
        setEvents([
            ...events,
            {
                id: id,
                gender: gender,
                age: age,
                month: month
            }
        ]);
    }

    function handleChangeEvent(nextEvent){
        setEvents(events.map(t => {
            if (t.id === nextEvent.id){
                return nextEvent;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteEvent(eventId) {
        setEvents(
            events.filter(t => t.id !== eventId)
        );
    }

    return (
        <>
        <AddEvent
        onAddEvent={handleAddEvent} 
        />
        <EventList
        events={events}
        onChangeEvent={handleChangeEvent}
        onDeleteEvent={handleDeleteEvent}       
        />
        </>    
    );
}
