import Bye from "./components/Bye"
import Hello from "./components/Hello"
import Operation from "./components/Operation"
import Prop from "./components/Prop"
import PropDest from "./components/PropDest"
import Variable from "./components/Variable"
import Funreturn from "./Funreturn"


function App() {

  return (
    <>
    <Hello />
    <Bye />
    <Variable />
    <Operation />
    <Funreturn />
    <Prop name='Chan'/>  <PropDest mobile="8526868928" />
    <Prop name='Balu'/>
    </>
  )
}

export default App
