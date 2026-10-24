import { useState } from 'react'
import reactLogo from '../assets/react.svg'

const link = 'text-sky-600 hover:text-sky-400'
const logo = 'inline-block h-24 p-6 transition-[filter] duration-300 will-change-[filter]'
const button =
    'cursor-pointer rounded-lg border border-transparent bg-blue-800 px-2.5 py-5 font-medium text-slate-300 transition-colors hover:border-sky-600 focus-visible:outline-4 dark:bg-lime-500 dark:text-slate-900'

export function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('unknown')

    const fetchName = async () => {
        const response = await fetch('/api/')
        const data: { name: string } = await response.json()
        setName(data.name)
    }

    return (
        <main className="mx-auto max-w-7xl p-8 text-center">
            <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer" className={link}>
                    <img src="/vite.svg" className={`${logo} hover:drop-shadow-[0_0_2em_#646cffaa]`} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer" className={link}>
                    <img
                        src={reactLogo}
                        className={`${logo} hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]`}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="text-5xl">Vite + React + Cloudflare</h1>
            <div className="space-y-3.5 p-4">
                <button type="button" className={button} onClick={() => setCount(prev => prev + 1)}>
                    count is {count}
                </button>
                <button type="button" className={button} onClick={fetchName}>
                    Name from API is: {name}
                </button>
                <p>
                    Edit <code>src/app/app.tsx</code> and save to test HMR, or <code>worker/index.ts</code> for the API
                </p>
            </div>
            <p className="text-slate-500">Click on the Vite and React logos to learn more</p>
        </main>
    )
}
