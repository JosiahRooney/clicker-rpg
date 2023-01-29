import { TRarity } from "./types"

export type TSchool =
  | "Arcane"
  | "Blood"
  | "Chaos"
  | "Earth"
  | "Enchantment"
  | "Fire"
  | "Nature"
  | "Power"
  | "Soul"
  | "Unholy"

export type TPowerType = "Attack" | "Skill" | "Power" | "Status" | "Curse"

export type TPower = {
  id: number
  name: string
  school: TSchool
  cost: number
  description: string
  rarity: TRarity
  coords: {
    x: number
    y: number
  }
  type: TPowerType
}

const ROWS = [-213, -299, -385, -618, -704, -790]

const COLUMNS = [
  -27, -113, -198, -285, -410, -496, -582, -667, -794, -879, -964, -1051, -1176,
  -1262, -1349, -1434, -1559, -1645, -1731, -1817,
]

const UNHOLY: TPower[] = [
  {
    id: 0,
    cost: 1,
    name: "Unholy Pick",
    school: "Unholy",
    description: "Unholy Pick",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[0],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 1,
    cost: 1,
    name: "Shatter",
    school: "Unholy",
    description: "Shatter",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[1],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 2,
    cost: 1,
    name: "Shadowfrost Shard",
    school: "Unholy",
    description: "Shadowfrost Shard",
    rarity: {
      name: "Uncommon",
      rank: 2,
    },
    coords: {
      x: COLUMNS[2],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 3,
    cost: 1,
    name: "Shadow Herb",
    school: "Unholy",
    description: "Shadow Herb",
    rarity: {
      name: "Uncommon",
      rank: 2,
    },
    coords: {
      x: COLUMNS[3],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 4,
    cost: 1,
    name: "Unholy Bolt",
    school: "Unholy",
    description: "Unholy Bolt",
    rarity: {
      name: "Uncommon",
      rank: 2,
    },
    coords: {
      x: COLUMNS[0],
      y: ROWS[1],
    },
    type: "Attack",
  },
  {
    id: 5,
    cost: 1,
    name: "Unholy Bulwark",
    school: "Unholy",
    description: "Unholy Bulwark",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[2],
      y: ROWS[1],
    },
    type: "Skill",
  },
  {
    id: 6,
    cost: 1,
    name: "Wave of Darkness",
    school: "Unholy",
    description: "Wave of Darkness",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[3],
      y: ROWS[1],
    },
    type: "Attack",
  },
  {
    id: 7,
    cost: 1,
    name: "Black Hole",
    school: "Unholy",
    description: "Black Hole",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[0],
      y: ROWS[2],
    },
    type: "Attack",
  },
  {
    id: 8,
    cost: 1,
    name: "Touch of Chaos",
    school: "Unholy",
    description: "Touch of Chaos",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[1],
      y: ROWS[2],
    },
    type: "Attack",
  },
  {
    id: 9,
    cost: 1,
    name: "Demon Form",
    school: "Unholy",
    description: "Demon Form",
    rarity: {
      name: "Rare",
      rank: 3,
    },
    coords: {
      x: COLUMNS[2],
      y: ROWS[2],
    },
    type: "Power",
  },
]

const FIRE: TPower[] = [
  {
    id: 10,
    cost: 1,
    name: "Static Strike",
    school: "Fire",
    description: "Static Strike",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[4],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 11,
    cost: 1,
    name: "Target Dummy",
    school: "Fire",
    description: "Target Dummy",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[5],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 12,
    cost: 1,
    name: "Fleet Footed",
    school: "Fire",
    description: "Fleet Footed",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[6],
      y: ROWS[0],
    },
    type: "Power",
  },
  {
    id: 13,
    cost: 1,
    name: "Reload",
    school: "Fire",
    description: "Reload",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[7],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 14,
    cost: 1,
    name: "Trap Trigger",
    school: "Fire",
    description: "Trap Trigger",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[4],
      y: ROWS[1],
    },
    type: "Skill",
  },
  {
    id: 15,
    cost: 1,
    name: "Surge",
    school: "Fire",
    description: "Surge",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[5],
      y: ROWS[1],
    },
    type: "Power",
  },
  {
    id: 16,
    cost: 1,
    name: "Salvo",
    school: "Fire",
    description: "Salvo",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[6],
      y: ROWS[1],
    },
    type: "Attack",
  },
  {
    id: 17,
    cost: 1,
    name: "Bolos",
    school: "Fire",
    description: "Bolos",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[4],
      y: ROWS[2],
    },
    type: "Attack",
  },
  {
    id: 18,
    cost: 1,
    name: "Burning Arrow",
    school: "Fire",
    description: "Burning Arrow",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[5],
      y: ROWS[2],
    },
    type: "Attack",
  },
  {
    id: 19,
    cost: 1,
    name: "Volley",
    school: "Fire",
    description: "Volley",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[6],
      y: ROWS[2],
    },
    type: "Attack",
  },
]

const BLOOD: TPower[] = [
  {
    id: 20,
    cost: 1,
    name: "Blood Feast",
    school: "Blood",
    description: "Blood Feast",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[8],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 21,
    cost: 1,
    name: "Ruby Scepter",
    school: "Blood",
    description: "Ruby Scepter",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[9],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 22,
    cost: 1,
    name: "Comet",
    school: "Blood",
    description: "Comet",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[10],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 23,
    cost: 1,
    name: "Sacred Guardian",
    school: "Blood",
    description: "Sacred Guardian",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[11],
      y: ROWS[0],
    },
    type: "Power",
  },
  {
    id: 24,
    cost: 1,
    name: "Soul Barrier",
    school: "Blood",
    description: "Soul Barrier",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[8],
      y: ROWS[1],
    },
    type: "Power",
  },
  {
    id: 25,
    cost: 1,
    name: "Blood Sacrifice",
    school: "Blood",
    description: "Blood Sacrifice",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[9],
      y: ROWS[1],
    },
    type: "Skill",
  },
  {
    id: 26,
    cost: 1,
    name: "Hymn of Conviction",
    school: "Blood",
    description: "Hymn of Conviction",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[10],
      y: ROWS[1],
    },
    type: "Skill",
  },
  {
    id: 27,
    cost: 1,
    name: "Sovereign Command",
    school: "Blood",
    description: "Sovereign Command",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[8],
      y: ROWS[2],
    },
    type: "Skill",
  },
  {
    id: 28,
    cost: 1,
    name: "Touch of Blood",
    school: "Blood",
    description: "Touch of Blood",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[9],
      y: ROWS[2],
    },
    type: "Skill",
  },
  {
    id: 29,
    cost: 1,
    name: "Heartseeker",
    school: "Blood",
    description: "Heartseeker",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[10],
      y: ROWS[2],
    },
    type: "Attack",
  },
]

const POWER: TPower[] = [
  {
    id: 30,
    cost: 1,
    name: "Whirlwind",
    school: "Power",
    description: "Whirlwind",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[12],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 31,
    cost: 1,
    name: "Slash",
    school: "Power",
    description: "Slash the enemy for [attackPower] damage.",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[13],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 32,
    cost: 1,
    name: "Sunder",
    school: "Power",
    description: "Sunder",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[14],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 33,
    cost: 1,
    name: "Overcharge",
    school: "Power",
    description: "Overcharge",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[15],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 34,
    cost: 1,
    name: "Riposte",
    school: "Power",
    description: "Riposte",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[12],
      y: ROWS[1],
    },
    type: "Attack",
  },
  {
    id: 35,
    cost: 1,
    name: "Vision of Frenzy",
    school: "Power",
    description: "Vision of Frenzy",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[13],
      y: ROWS[1],
    },
    type: "Power",
  },
  {
    id: 36,
    cost: 1,
    name: "Vision of Calm",
    school: "Power",
    description: "Vision of Calm",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[14],
      y: ROWS[1],
    },
    type: "Power",
  },
  {
    id: 37,
    cost: 1,
    name: "Deflect",
    school: "Power",
    description: "Deflect",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[12],
      y: ROWS[2],
    },
    type: "Skill",
  },
  {
    id: 38,
    cost: 1,
    name: "Shatter",
    school: "Power",
    description: "Shatter",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[13],
      y: ROWS[2],
    },
    type: "Skill",
  },
  {
    id: 39,
    cost: 1,
    name: "Imbue Weapon",
    school: "Power",
    description: "Imbue Weapon",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[14],
      y: ROWS[2],
    },
    type: "Power",
  },
]

const NATURE: TPower[] = [
  {
    id: 40,
    cost: 1,
    name: "Verdant Storm",
    school: "Nature",
    description: "Verdant Storm",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[16],
      y: ROWS[0],
    },
    type: "Attack",
  },
  {
    id: 41,
    cost: 1,
    name: "Seed of Regrowth",
    school: "Nature",
    description: "Seed of Regrowth",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[17],
      y: ROWS[0],
    },
    type: "Power",
  },
  {
    id: 42,
    cost: 1,
    name: "Rapid Growth",
    school: "Nature",
    description: "Rapid Growth",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[18],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 43,
    cost: 1,
    name: "Symbiosis",
    school: "Nature",
    description: "Symbiosis",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[19],
      y: ROWS[0],
    },
    type: "Skill",
  },
  {
    id: 44,
    cost: 1,
    name: "Touch of Nature",
    school: "Nature",
    description: "Touch of Nature",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[16],
      y: ROWS[1],
    },
    type: "Attack",
  },
  {
    id: 45,
    cost: 1,
    name: "Verdant Vial",
    school: "Nature",
    description: "Verdant Vial",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[17],
      y: ROWS[1],
    },
    type: "Skill",
  },
  {
    id: 46,
    cost: 1,
    name: "Treespeaker",
    school: "Nature",
    description: "Treespeaker",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[18],
      y: ROWS[1],
    },
    type: "Power",
  },
  {
    id: 47,
    cost: 1,
    name: "Fate Roll",
    school: "Nature",
    description: "Fate Roll",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[16],
      y: ROWS[2],
    },
    type: "Skill",
  },
  {
    id: 48,
    cost: 1,
    name: "Ent",
    school: "Nature",
    description: "Ent",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[17],
      y: ROWS[2],
    },
    type: "Skill",
  },
  {
    id: 49,
    cost: 1,
    name: "Spore Cloud",
    school: "Nature",
    description: "Spore Cloud",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[18],
      y: ROWS[2],
    },
    type: "Attack",
  },
]

const CHAOS: TPower[] = [
  {
    id: 50,
    cost: 1,
    name: "Time Vortex",
    school: "Chaos",
    description: "Time Vortex",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[0],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 51,
    cost: 1,
    name: "Poisoned Blade",
    school: "Chaos",
    description: "Poisoned Blade",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[1],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 52,
    cost: 1,
    name: "Glowing Orb",
    school: "Chaos",
    description: "Glowing Orb",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[2],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 53,
    cost: 1,
    name: "Tendril Bolt",
    school: "Chaos",
    description: "Tendril Bolt",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[3],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 54,
    cost: 1,
    name: "Pool of Mystery",
    school: "Chaos",
    description: "Pool of Mystery",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[0],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 55,
    cost: 1,
    name: "Symbol of Devastation",
    school: "Chaos",
    description: "Symbol of Devastation",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[1],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 56,
    cost: 1,
    name: "Transmutation",
    school: "Chaos",
    description: "Transmutation",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[2],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 57,
    cost: 1,
    name: "Soulshape",
    school: "Chaos",
    description: "Soulshape",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[0],
      y: ROWS[5],
    },
    type: "Power",
  },
  {
    id: 58,
    cost: 1,
    name: "Bombardment",
    school: "Chaos",
    description: "Bombardment",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[1],
      y: ROWS[5],
    },
    type: "Attack",
  },
  {
    id: 59,
    cost: 1,
    name: "Animal Eye",
    school: "Chaos",
    description: "Animal Eye",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[2],
      y: ROWS[5],
    },
    type: "Skill",
  },
]

const ARCANE: TPower[] = [
  {
    id: 60,
    cost: 1,
    name: "Scepter Blast",
    school: "Arcane",
    description: "Scepter Blast",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[4],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 61,
    cost: 1,
    name: "Hallowed Flight",
    school: "Arcane",
    description: "Hallowed Flight",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[5],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 62,
    cost: 1,
    name: "Arcane Hailstorm",
    school: "Arcane",
    description: "Arcane Hailstorm",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[6],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 63,
    cost: 1,
    name: "Blessing of Luck",
    school: "Arcane",
    description: "Blessing of Luck",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[7],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 64,
    cost: 1,
    name: "Guiding Insight",
    school: "Arcane",
    description: "Guiding Insight",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[4],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 65,
    cost: 1,
    name: "Touch of Arcane",
    school: "Arcane",
    description: "Touch of Arcane",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[5],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 66,
    cost: 1,
    name: "Singularity",
    school: "Arcane",
    description: "Singularity",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[6],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 67,
    cost: 1,
    name: "Scry",
    school: "Arcane",
    description: "Scry",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[4],
      y: ROWS[5],
    },
    type: "Skill",
  },
  {
    id: 68,
    cost: 1,
    name: "Pierce",
    school: "Arcane",
    description: "Pierce",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[5],
      y: ROWS[5],
    },
    type: "Attack",
  },
  {
    id: 69,
    cost: 1,
    name: "Focused Will",
    school: "Arcane",
    description: "Focused Will",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[6],
      y: ROWS[5],
    },
    type: "Skill",
  },
]

const EARTH: TPower[] = [
  {
    id: 70,
    cost: 1,
    name: "Boulder",
    school: "Earth",
    description: "Boulder",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[8],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 71,
    cost: 1,
    name: "Entangling Vines",
    school: "Earth",
    description: "Entangling Vines",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[9],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 72,
    cost: 1,
    name: "Claw",
    school: "Earth",
    description: "Claw",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[10],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 73,
    cost: 1,
    name: "Healing Rune",
    school: "Earth",
    description: "Healing Rune",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[11],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 74,
    cost: 1,
    name: "Alchemy Recipe",
    school: "Earth",
    description: "Alchemy Recipe",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[8],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 75,
    cost: 1,
    name: "Touch of Earth",
    school: "Earth",
    description: "Touch of Earth",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[9],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 76,
    cost: 1,
    name: "Forest Spirit",
    school: "Earth",
    description: "Forest Spirit",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[10],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 77,
    cost: 1,
    name: "Healing Flames",
    school: "Earth",
    description: "Healing Flames",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[8],
      y: ROWS[5],
    },
    type: "Skill",
  },
  {
    id: 78,
    cost: 1,
    name: "Stone Shiv",
    school: "Earth",
    description: "Stone Shiv",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[9],
      y: ROWS[5],
    },
    type: "Attack",
  },
  {
    id: 79,
    cost: 1,
    name: "Stone Shot",
    school: "Earth",
    description: "Stone Shot",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[10],
      y: ROWS[5],
    },
    type: "Attack",
  },
]

const ENCHANTMENT: TPower[] = [
  {
    id: 80,
    cost: 1,
    name: "Curse of Bones",
    school: "Enchantment",
    description: "Curse of Bones",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[12],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 81,
    cost: 1,
    name: "Dagger of Fate",
    school: "Enchantment",
    description: "Dagger of Fate",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[13],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 82,
    cost: 1,
    name: "Torch",
    school: "Enchantment",
    description: "Counters darkness",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[14],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 83,
    cost: 1,
    name: "Reinforce",
    school: "Enchantment",
    description: "Reinforce",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[15],
      y: ROWS[3],
    },
    type: "Skill",
  },
  {
    id: 84,
    cost: 1,
    name: "Sprite",
    school: "Enchantment",
    description: "Sprite",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[12],
      y: ROWS[4],
    },
    type: "Power",
  },
  {
    id: 85,
    cost: 1,
    name: "Flash",
    school: "Enchantment",
    description: "Flash",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[13],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 86,
    cost: 1,
    name: "Seal of Protection",
    school: "Enchantment",
    description: "Seal of Protection",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[14],
      y: ROWS[4],
    },
    type: "Power",
  },
  {
    id: 87,
    cost: 1,
    name: "Defend",
    school: "Enchantment",
    description: "Defend",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[12],
      y: ROWS[5],
    },
    type: "Skill",
  },
  {
    id: 88,
    cost: 1,
    name: "Loot",
    school: "Enchantment",
    description: "Loot",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[13],
      y: ROWS[5],
    },
    type: "Skill",
  },
  {
    id: 89,
    cost: 1,
    name: "Surestep",
    school: "Enchantment",
    description: "Surestep",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[14],
      y: ROWS[5],
    },
    type: "Skill",
  },
]

const SOUL: TPower[] = [
  {
    id: 90,
    cost: 1,
    name: "Devastation",
    school: "Soul",
    description: "Devastation",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[16],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 91,
    cost: 1,
    name: "Glowing Mushroom",
    school: "Soul",
    description: "Glowing Mushroom",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[17],
      y: ROWS[3],
    },
    type: "Power",
  },
  {
    id: 92,
    cost: 1,
    name: "Ray of Spirits",
    school: "Soul",
    description: "Ray of Spirits",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[18],
      y: ROWS[3],
    },
    type: "Attack",
  },
  {
    id: 93,
    cost: 1,
    name: "Apparition",
    school: "Soul",
    description: "Apparition",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[19],
      y: ROWS[3],
    },
    type: "Power",
  },
  {
    id: 94,
    cost: 1,
    name: "Spectral Seer",
    school: "Soul",
    description: "Spectral Seer",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[16],
      y: ROWS[4],
    },
    type: "Power",
  },
  {
    id: 95,
    cost: 1,
    name: "Spectral Staff",
    school: "Soul",
    description: "Spectral Staff",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[17],
      y: ROWS[4],
    },
    type: "Power",
  },
  {
    id: 96,
    cost: 1,
    name: "Urn of Poison",
    school: "Soul",
    description: "Urn of Poison",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[18],
      y: ROWS[4],
    },
    type: "Skill",
  },
  {
    id: 97,
    cost: 1,
    name: "Globules of Mana",
    school: "Soul",
    description: "Globules of Mana",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[16],
      y: ROWS[5],
    },
    type: "Power",
  },
  {
    id: 98,
    cost: 1,
    name: "Soulgem",
    school: "Soul",
    description: "Soulgem",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[17],
      y: ROWS[5],
    },
    type: "Power",
  },
  {
    id: 99,
    cost: 1,
    name: "Cascade of Infinite Darkness",
    school: "Soul",
    description: "Cascade of Infinite Darkness",
    rarity: {
      name: "Common",
      rank: 1,
    },
    coords: {
      x: COLUMNS[18],
      y: ROWS[5],
    },
    type: "Attack",
  },
]

export const POWERS: TPower[] = [
  ...UNHOLY,
  ...FIRE,
  ...BLOOD,
  ...POWER,
  ...NATURE,
  ...CHAOS,
  ...ARCANE,
  ...EARTH,
  ...ENCHANTMENT,
  ...SOUL,
]

export function getPowerById(powerId: number) {
  return POWERS.find((power) => power.id === powerId)!
}
