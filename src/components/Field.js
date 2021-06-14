import React from 'react'
import '../styles/Field.css'

const Field = ({value, handleMove}) => (
    <button onClick={handleMove}>
        {value}
    </button>
);

export default Field