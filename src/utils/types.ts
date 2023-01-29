export type TStat = {
  name: string
  min?: number
  max?: number
  value: number
}

export type TActor = {
  id: number
  name: string
  stats: {
    armor: TStat
    attackPower: TStat
    attackSpeed: TStat
    criticalStrike: TStat
    health: TStat
    mana: TStat
    level: TStat
    resists: {
      all: TStat
      arcane: TStat
      blood: TStat
      chaos: TStat
      earth: TStat
      enchantment: TStat
      fire: TStat
      nature: TStat
      power: TStat
      soul: TStat
      unholy: TStat
    }
  }
}

export type TEffect = {
  name: string
  damagePerTurn?: number
  healPerTurn?: number
}

export type TRarity = {
  name: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"
  rank: 1 | 2 | 3 | 4 | 5
}
