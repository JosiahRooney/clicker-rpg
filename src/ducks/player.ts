import { createSlice } from "@reduxjs/toolkit"

export type TStat = "strength" | "dexterity" | "health" | "mana"
export type TPayload = { stat: TStat; value: number }
export type TStatAction = { type: string; payload: TPayload }

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    energy: 3,
    stats: {
      strength: 0,
      dexterity: 0,
      health: 10,
      mana: 0,
    },
  },
  reducers: {
    setEnergy: (state, action) => {
      state.energy = action.payload
    },
    setStat: (state, action: TStatAction) => {
      state.stats[action.payload.stat] = action.payload.value
    },
  },
})
