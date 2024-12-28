import { useState } from 'react'
import FatchApi from './FatchApi'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FatchApi/>
    </>
  )
}

export default App
