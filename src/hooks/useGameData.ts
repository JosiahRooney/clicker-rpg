import { useEffect, useState } from "react"
import levels from "../data/levels"
import { TUnit, TStatId, TUnitId, TGameState } from "../data/Types"

const GameData = () => {
  const [gameState, setGameState] = useState<TGameState>({
    kills: 0,
    killsTotal: 0,
    killsPerSecond: {
      high: 0,
      low: 0,
    },
    killsPerClick: 1,
    experience: 0,
    level: 1,
    skillPoints: 0,
    skillPointsSpent: 0,
    expToNextLevel: levels[2].exp + 1,
    expPerClick: 1,
    stats: {
      attackPower: {
        id: "attackPower",
        displayName: "Attack Power",
        description: "Increases your attack power (increases kills per click)",
        value: 0,
      },
      critChance: {
        id: "critChance",
        displayName: "Critical Chance",
        description:
          "Increases your critical chance (earn triple kills from one attack)",
        value: 0,
      },
      recon: {
        id: "recon",
        displayName: "Recon",
        description: "Increases the amount of experience you earn per click",
        value: 0,
      },
      speed: {
        id: "speed",
        displayName: "Speed",
        description: "Increases the rate at which you earn kills automatically",
        value: 100,
      },
    },
    units: {
      recruit: {
        id: "recruit",
        displayName: "Recruit",
        count: 0,
        cost: 15,
        baseCost: 15,
        displayed: true,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 1,
          high: 1.5,
        },
        critChance: {
          low: 0,
          high: 0,
        },
      } as TUnit,
      marksman: {
        id: "marksman",
        displayName: "Marksman",
        count: 0,
        cost: 100,
        baseCost: 100,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 2,
          high: 5,
        },
        critChance: {
          low: 0.1,
          high: 0.1,
        },
        unitCost: {
          cost: 1,
          unit: "recruit",
        },
      } as TUnit,
      crewWeapon: {
        id: "crewWeapon",
        displayName: "Crew Weapon",
        count: 0,
        cost: 1000,
        baseCost: 1000,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 10,
          high: 20,
        },
        critChance: {
          low: 0.5,
          high: 0.5,
        },
        unitCost: {
          cost: 3,
          unit: "recruit",
        },
      } as TUnit,
      infantryFightingVehicle: {
        id: "infantryFightingVehicle",
        displayName: "Infantry Fighting Vehicle",
        count: 0,
        cost: 4200,
        baseCost: 4200,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 50,
          high: 100,
        },
        critChance: {
          low: 0.5,
          high: 0.5,
        },
        unitCost: {
          cost: 5,
          unit: "recruit",
        },
      } as TUnit,
      specialForcesOperative: {
        id: "specialForcesOperative",
        displayName: "Special Forces Operative",
        count: 0,
        cost: 14000,
        baseCost: 14000,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 100,
          high: 200,
        },
        critChance: {
          low: 10,
          high: 10,
        },
        unitCost: {
          cost: 1,
          unit: "marksman",
        },
      } as TUnit,
      heavyArmor: {
        id: "heavyArmor",
        displayName: "Heavy Armor",
        count: 0,
        cost: 60000,
        baseCost: 60000,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 200,
          high: 400,
        },
        critChance: {
          low: 1,
          high: 1,
        },
        unitCost: {
          cost: 3,
          unit: "crewWeapon",
        },
      } as TUnit,
      f15FighterJet: {
        id: "f15FighterJet",
        displayName: "F-15 Fighter Jet",
        count: 0,
        cost: 300000,
        baseCost: 300000,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 500,
          high: 750,
        },
        critChance: {
          low: 10,
          high: 10,
        },
        unitCost: {
          cost: 1,
          unit: "marksman",
        },
      } as TUnit,
      b1LancerBomber: {
        id: "b1LancerBomber",
        displayName: "B-1 Lancer Bomber",
        count: 0,
        cost: 1000000,
        baseCost: 1000000,
        displayed: false,
        baseCostIncrease: 1.07,
        attackPower: {
          low: 4000,
          high: 5000,
        },
        critChance: {
          low: 10,
          high: 10,
        },
        unitCost: {
          cost: 4,
          unit: "marksman",
        },
      } as TUnit,
    },
  })

  const addKills = (delta?: number) => {
    const kills =
      gameState.kills +
      gameState.killsPerClick +
      gameState.stats.attackPower.value +
      (delta || 0)
    let experience =
      gameState.experience +
      gameState.expPerClick +
      gameState.stats.recon.value +
      (delta || 0)
    let expToNextLevel = levels[gameState.level + 1].exp - gameState.experience
    let level = gameState.level
    let skillPoints = gameState.skillPoints

    if (expToNextLevel <= 0) {
      // add level
      level += 1
      // reset experience
      experience = 0
      // reset expToNextLevel
      expToNextLevel = levels[level + 1].exp + 1
      // add skill points
      skillPoints += 1
    }

    setGameState({
      ...gameState,
      kills,
      experience,
      expToNextLevel,
      level,
      skillPoints,
    })
  }

  const addStats = (stat: TStatId, value?: number) => {
    setGameState({
      ...gameState,
      skillPoints: gameState.skillPoints - 1,
      skillPointsSpent: gameState.skillPointsSpent + 1,
      stats: {
        ...gameState.stats,
        [stat]: {
          ...gameState.stats[stat],
          value: gameState.stats[stat].value + (value || 0),
        },
      },
    })
  }

  const getKPSFromAllUnits = (gameState: TGameState) => {
    let kps = {
      low: 0,
      high: 0,
    }
    for (const [, unit] of Object.entries(gameState.units)) {
      kps.low += unit.count * unit.attackPower.low
      kps.high += unit.count * unit.attackPower.high
    }
    return kps
  }

  const addUnit = (id: TUnitId) => {
    const { kills } = gameState
    const unit = gameState.units[id]
    const { cost, baseCost, baseCostIncrease } = unit

    if (kills >= cost) {
      if (unit.unitCost) {
        if (gameState.units[unit.unitCost.unit].count >= unit.unitCost.cost) {
          setGameState({
            ...gameState,
            kills: kills - cost,
            units: {
              ...gameState.units,
              [id]: {
                ...unit,
                count: unit.count + 1,
                cost: Math.floor(
                  baseCost * Math.pow(baseCostIncrease, unit.count)
                ),
              },
              [gameState.units[unit.unitCost.unit].id]: {
                ...gameState.units[unit.unitCost.unit],
                count:
                  gameState.units[unit.unitCost.unit].count -
                  unit.unitCost.cost,
                cost: Math.floor(
                  gameState.units[unit.unitCost.unit].baseCost *
                    Math.pow(
                      baseCostIncrease,
                      gameState.units[unit.unitCost.unit].count
                    )
                ),
              },
            },
          })
        }
      } else {
        setGameState({
          ...gameState,
          kills: kills - cost,
          units: {
            ...gameState.units,
            [id]: {
              ...unit,
              count: unit.count + 1,
              cost: Math.floor(
                baseCost * Math.pow(baseCostIncrease, unit.count)
              ),
            },
          },
        })
      }
    }
  }

  useEffect(() => {
    const killsPerSecond = getKPSFromAllUnits(gameState)
    setGameState({
      ...gameState,
      killsPerSecond,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.units])

  return {
    gameState,
    setGameState,
    addKills,
    addStats,
    addUnit,
  }
}
export default GameData
