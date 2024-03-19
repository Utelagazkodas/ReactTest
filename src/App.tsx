import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="bg-gray-800 min-h-screen flex justify-center items-center text-gray-100 text-xl text-center">
      <div className="*:my-3">
      <div className="flex justify-evenly">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-32" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-32" alt="React logo" />
        </a>
      </div>
      <h1 className="">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}  className="bg-sky-200 text-gray-800 rounded-xl px-2 py-1 hover:text-2xl transition-all">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </body>
  )
}

export default App
