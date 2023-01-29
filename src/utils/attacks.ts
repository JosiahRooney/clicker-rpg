import { TActor, TEffect } from "./types"

interface IAttack {
  target: TActor
  actor: TActor
  cost: number
  effect: TEffect
}

export const attack = ({ target, actor, cost, effect }: IAttack) => {}
