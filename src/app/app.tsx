import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './app.css'

export function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('unknown')

    const fetchName = async () => {
        const response = await fetch('/api/')
        const data: { name: string } = await response.json()
        setName(data.name)
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React + Cloudflare</h1>
            <div className="card">
                <button type="button" onClick={() => setCount(prev => prev + 1)}>
                    count is {count}
                </button>
                <button type="button" onClick={fetchName}>
                    Name from API is: {name}
                </button>
                <p>
                    Edit <code>src/app/app.tsx</code> and save to test HMR, or <code>worker/index.ts</code> for the API
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    )
}
