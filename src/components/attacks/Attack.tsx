import React from "react"

import { getPowerById } from "../../utils/powers"

import Card from "../Card"

interface IProps {
  powerId: number
}

const Attack: React.FC<IProps> = ({ powerId }) => {
  const power = getPowerById(powerId)
  return <Card power={power} />
}

export default Attack
