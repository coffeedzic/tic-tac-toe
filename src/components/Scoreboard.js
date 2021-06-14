import React from 'react'
import '../styles/Scoreboard.css'

const Scoreboard = ({playerOne, playerTwo, playerOneScore, playerTwoScore, handleName, xPlayer}) => {
    return (
        <div className="scoreboard">
            <div className="item">
                <span>{xPlayer === 'playerOne' ? 'X' : 'O'}</span>
                <input className="player-name" type="text" name="playerOne" value={playerOne} onChange={handleName} />
                <div className="score red">{playerOneScore}</div>
            </div>
            <div className="item">
                <span>{xPlayer === 'playerTwo' ? 'X' : 'O'}</span>
                <input className="player-name" type="text" name="playerTwo" value={playerTwo} onChange={handleName} />
                <div className="score green">{playerTwoScore}</div>
            </div>            
        </div>
    )
}

export default Scoreboard