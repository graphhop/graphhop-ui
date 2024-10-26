import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetworkGraph from './NetworkGraph';

const nodes = [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' }
];

const links = [
    { source: 'A', target: 'B', value: 1 },
    { source: 'A', target: 'C', value: 1 },
    { source: 'B', target: 'D', value: 1 },
    { source: 'C', target: 'D', value: 1 }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1>Graph Hopper</h1>
          <NetworkGraph nodes={nodes} links={links} />
    </>
  )
}

export default App
