import React from "react"

import { TPower } from "../../utils/powers"

import CostOverlay from "./CostOverlay"
import IconOverlay from "./IconOverlay"

import "./Card.scss"

interface IProps {
  power: TPower
}

const Card: React.FC<IProps> = ({ power }) => {
  const { name, cost, description = "", rarity } = power

  return (
    <div className="Card">
      <div className="header">
        <div className="cost">
          {cost}
          <CostOverlay rarity={rarity} />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="icon-container">
        <div
          className="icon"
          style={{
            backgroundPositionX: `${power.coords.x}px`,
            backgroundPositionY: `${power.coords.y}px`,
            borderRadius: "10px",
          }}
        ></div>
        <IconOverlay rarity={rarity} />
      </div>
      <div className="body">{description}</div>
    </div>
  )
}

export default Card
