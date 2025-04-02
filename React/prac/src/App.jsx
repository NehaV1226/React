
import ConditionalRendering from "./Components/ConditionalRendering"
import PropEx1 from "./Components/PropEx1"
import PropEx2 from "./Components/PropEx2"
import UseStateEx1 from "./Components/UseState"


function App() {

  return (
    <>
      <PropEx1 name="Tom" country="india" />
      <PropEx2 name="Jerry" age="23" />
      <UseStateEx1 />
      <ConditionalRendering isLogged={false} />

    </>
  )
}

export default App