import React from "react"
import { TStatId } from "../../data/Types"
import Stat from "./Stat"

import "./Stats.scss"

interface IProps {
  gameState: any
  addStats: (stat: TStatId, value: number) => void
}

const Stats: React.FC<IProps> = ({ gameState, addStats }) => {
  return (
    <div>
      <h2>Stats</h2>

      <p>Stat Points: {gameState.skillPoints}</p>

      <div className="stats">
        <Stat statId="attackPower" gameState={gameState} addStats={addStats} />
        <Stat statId="critChance" gameState={gameState} addStats={addStats} />
        <Stat statId="recon" gameState={gameState} addStats={addStats} />
        <Stat statId="speed" gameState={gameState} addStats={addStats} />
      </div>
    </div>
  )
}

export default Stats
