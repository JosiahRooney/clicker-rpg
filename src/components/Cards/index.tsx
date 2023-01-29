import React from "react"

import Strike from "../attacks/Strike"
import PoisonedBlade from "../attacks/PoisonedBlade"

import "./Cards.scss"

const Cards = () => {
  return (
    <div className="Cards">
      <Strike />
      <PoisonedBlade />
    </div>
  )
}

export default Cards
