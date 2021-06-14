import React, {useEffect, useState} from 'react'
import Header from './Header'
import Scoreboard from './Scoreboard'
import Board from './Board'
import Button from './Button'
import {checkGame} from './checkGame.js'
import '../styles/TicTacToe.css'

const TicTacToe = () => {
    const [playerOne, setPlayerOne] = useState(localStorage.getItem('playerOne') ? localStorage.getItem('playerOne') : 'Player one')
    const [playerTwo, setPlayerTwo] = useState(localStorage.getItem('playerTwo') ? localStorage.getItem('playerTwo') : 'Player Two')
    const [playerOneScore, setPlayerOneScore] = useState(localStorage.getItem('playerOneScore') ? parseInt(localStorage.getItem('playerOneScore')) : 0)
    const [playerTwoScore, setPlayerTwoScore] = useState(localStorage.getItem('playerTwoScore') ? parseInt(localStorage.getItem('playerTwoScore')) : 0)
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xPlayer, setXPlayer] = useState('playerOne')
    const [XORO, setXORO] = useState(true)
    const [gameStarted, setGameStarted] = useState(localStorage.getItem('gameStarted') ? localStorage.getItem('gameStarted') : false)
    let winner = checkGame(board)

    const handleName = event => {
        const {name, value} = event.target
        if(name === 'playerOne') {
            setPlayerOne(value)
            localStorage.setItem('playerOne', value)
        } else {
            setPlayerTwo(value)
            localStorage.setItem('playerTwo', value)
        }
    }

    useEffect(() => {
        if((xPlayer === 'playerOne' && winner === 'X') || (xPlayer === 'playerTwo' && winner === 'O')) {
            setPlayerOneScore(playerOneScore + 1)
            localStorage.setItem('playerOneScore', playerOneScore + 1)            
        } else if(((xPlayer === 'playerTwo' && winner === 'X') || (xPlayer === 'playerOne' && winner === 'O'))) {
            setPlayerTwoScore(playerTwoScore + 1)
            localStorage.setItem('playerTwoScore', playerTwoScore + 1)            
        }
    }, [winner])

    const handleMove = i => {
        const boardCopy = [...board]
        if(winner || boardCopy[i]) {
            return
        }        
        boardCopy[i] = XORO ? 'X' : 'O'
        setBoard(boardCopy)
        setXORO(!XORO)        
    }

    const startGame = () => {
        setGameStarted(true)
        localStorage.setItem('gameStarted', 'true')        
    }

    const newGame = () => {
        setBoard(Array(9).fill(null))
        setXPlayer(xPlayer === 'playerOne' ? 'playerTwo' : 'playerOne')
        setXORO(true)
    }

    const reset = () => {
        setBoard(Array(9).fill(null))
        setPlayerOneScore(0)
        setPlayerTwoScore(0)
        setGameStarted(false)
        setXORO(true)
        localStorage.clear()
    }
    
    return (
        <div className="wrapper">
            <Header />
            <Scoreboard playerOne={playerOne} playerTwo={playerTwo} playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} handleName={handleName} xPlayer={xPlayer} />
            {gameStarted ?  <Board fields={board} handleMove={handleMove} /> : <div className="buttons"><Button value={'Start game'} onClick={startGame} /></div>}
            {winner ? <div className="buttons"><Button value={'New game'} onClick={newGame} /><Button value={'Reset'} onClick={reset} /></div> : null}
            
        </div>
    )
}

export default TicTacToe