import { useState } from "react"
import Gate from "./components/Gate/Gate"
import Invitation from "./pages/Invitation"

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered ? (
        <Gate onEnter={() => setEntered(true)} />
      ) : (
        <Invitation />
      )}
    </>
  )
}

export default App