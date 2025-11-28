import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GRID_SIZE = 20
const CELL_SIZE = 20 // px
const BOARD_WIDTH = 15
const BOARD_HEIGHT = 15
const INITIAL_SNAKE = [{ x: 7, y: 7 }, { x: 7, y: 8 }, { x: 7, y: 9 }]
const INITIAL_DIRECTION = { x: 0, y: -1 } // Moving up
const GAME_SPEED = 150

export default function SnakeGame({ onClose }) {
    const [snake, setSnake] = useState(INITIAL_SNAKE)
    const [direction, setDirection] = useState(INITIAL_DIRECTION)
    const [food, setFood] = useState({ x: 5, y: 5 })
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('snakeHighScore') || '0'))

    const directionRef = useRef(INITIAL_DIRECTION)
    const gameLoopRef = useRef(null)

    // Generate random food position
    const generateFood = useCallback(() => {
        let newFood
        let isOnSnake
        do {
            newFood = {
                x: Math.floor(Math.random() * BOARD_WIDTH),
                y: Math.floor(Math.random() * BOARD_HEIGHT)
            }
            isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)
        } while (isOnSnake)
        return newFood
    }, [snake])

    // Handle keyboard input
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isPlaying) return

            const { key } = e
            const currentDir = directionRef.current

            if (key === 'ArrowUp' && currentDir.y !== 1) {
                directionRef.current = { x: 0, y: -1 }
            } else if (key === 'ArrowDown' && currentDir.y !== -1) {
                directionRef.current = { x: 0, y: 1 }
            } else if (key === 'ArrowLeft' && currentDir.x !== 1) {
                directionRef.current = { x: -1, y: 0 }
            } else if (key === 'ArrowRight' && currentDir.x !== -1) {
                directionRef.current = { x: 1, y: 0 }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isPlaying])

    // Game Loop
    const moveSnake = useCallback(() => {
        if (gameOver) return

        setSnake(prevSnake => {
            const newHead = {
                x: prevSnake[0].x + directionRef.current.x,
                y: prevSnake[0].y + directionRef.current.y
            }

            // Check collisions
            if (
                newHead.x < 0 ||
                newHead.x >= BOARD_WIDTH ||
                newHead.y < 0 ||
                newHead.y >= BOARD_HEIGHT ||
                prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
            ) {
                setGameOver(true)
                setIsPlaying(false)
                if (score > highScore) {
                    setHighScore(score)
                    localStorage.setItem('snakeHighScore', score.toString())
                }
                return prevSnake
            }

            const newSnake = [newHead, ...prevSnake]

            // Check food
            if (newHead.x === food.x && newHead.y === food.y) {
                setScore(s => s + 10)
                setFood(generateFood())
            } else {
                newSnake.pop()
            }

            return newSnake
        })
    }, [food, generateFood, gameOver, score, highScore])

    useEffect(() => {
        if (isPlaying && !gameOver) {
            gameLoopRef.current = setInterval(moveSnake, GAME_SPEED)
        } else {
            clearInterval(gameLoopRef.current)
        }
        return () => clearInterval(gameLoopRef.current)
    }, [isPlaying, gameOver, moveSnake])

    const startGame = () => {
        setSnake(INITIAL_SNAKE)
        setDirection(INITIAL_DIRECTION)
        directionRef.current = INITIAL_DIRECTION
        setScore(0)
        setGameOver(false)
        setIsPlaying(true)
        setFood(generateFood())
    }

    // Mobile Controls
    const handleControl = (dir) => {
        const currentDir = directionRef.current
        if (dir === 'UP' && currentDir.y !== 1) directionRef.current = { x: 0, y: -1 }
        if (dir === 'DOWN' && currentDir.y !== -1) directionRef.current = { x: 0, y: 1 }
        if (dir === 'LEFT' && currentDir.x !== 1) directionRef.current = { x: -1, y: 0 }
        if (dir === 'RIGHT' && currentDir.x !== -1) directionRef.current = { x: 1, y: 0 }
    }

    return (
        <motion.div
            className="snake-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="nokia-phone">
                <div className="screen-container">
                    <div className="screen-glass">
                        <div className="game-screen">
                            <div className="game-header">
                                <span>SCORE: {score}</span>
                                <span>HI: {highScore}</span>
                            </div>

                            <div className="game-board" style={{
                                width: BOARD_WIDTH * CELL_SIZE,
                                height: BOARD_HEIGHT * CELL_SIZE
                            }}>
                                {snake.map((segment, i) => (
                                    <div
                                        key={`${segment.x}-${segment.y}-${i}`}
                                        className="snake-segment"
                                        style={{
                                            left: segment.x * CELL_SIZE,
                                            top: segment.y * CELL_SIZE,
                                            width: CELL_SIZE,
                                            height: CELL_SIZE,
                                        }}
                                    />
                                ))}
                                <div
                                    className="food"
                                    style={{
                                        left: food.x * CELL_SIZE,
                                        top: food.y * CELL_SIZE,
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                    }}
                                />
                            </div>

                            {gameOver && (
                                <div className="game-over-msg">
                                    <p>GAME OVER</p>
                                    <button onClick={startGame}>RETRY</button>
                                </div>
                            )}

                            {!isPlaying && !gameOver && (
                                <div className="start-msg">
                                    <p>SNAKE</p>
                                    <button onClick={startGame}>START</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="controls-area">
                    <div className="d-pad">
                        <button className="d-btn up" onClick={() => handleControl('UP')}>▲</button>
                        <div className="d-row">
                            <button className="d-btn left" onClick={() => handleControl('LEFT')}>◀</button>
                            <button className="d-btn right" onClick={() => handleControl('RIGHT')}>▶</button>
                        </div>
                        <button className="d-btn down" onClick={() => handleControl('DOWN')}>▼</button>
                    </div>
                    <div className="action-btns">
                        <button className="close-btn" onClick={onClose}>EXIT</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
