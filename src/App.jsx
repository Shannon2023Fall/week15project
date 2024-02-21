import React,{ useState } from 'react'
import './App.css'
import Editor from './CardsEditor.jsx';
import AddEvent from './AddEvent.jsx';

export default function App() {

    return(
        <>
        <AddEvent />
        <Editor />
        </>
    )
}
