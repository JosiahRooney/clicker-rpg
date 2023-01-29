import React from "react"

import Cards from "./components/Cards"
import Game from "./components/Game"

import "./App.css"

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <div className="App">
      <Game />
      <Cards />
    </div>
  )
}

export default App
