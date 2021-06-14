import React from 'react'
import Field from './Field'
import '../styles/Board.css'

const Board = ({fields, handleMove}) => {
    return (
        <div className="board">
            {fields.map((field, i) => (
                <Field key={i} value={field} handleMove={() => handleMove(i)} />
            ))}
        </div>
    )
}

export default Board