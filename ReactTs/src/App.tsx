import { useState } from 'react'

import Box from './components/Box'
import Generics from "./components/generics"

function App() {
  const [val , setval] = useState<string>("")


  return (
        <>
              <Box heading={"This is heading"} count={10} func1={(a:string)=>{console.log(a)}}>
                <h1>This is a child</h1>
              </Box>
              <br/>
              <Generics label={"Search"} value={val} setter={setval}/>
        </>
  )
}

export default App