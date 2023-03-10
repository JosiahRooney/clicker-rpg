import React from "react"
import { TStatId } from "../../data/Types"
import levels from "../../data/levels"

import { formatNumber } from "../../utils"

import "./Header.scss"

interface IProps {
  gameState: any
  addKills: (delta?: number) => void
  addStats: (stat: TStatId, delta?: number) => void
}

const Header: React.FC<IProps> = ({ gameState, addKills }) => {
  const {
    stats: { attackPower },
    experience,
    expToNextLevel,
    kills,
    killsPerClick,
    killsPerSecond,
    level,
  } = gameState

  const handleAddKills = () => {
    addKills()
  }

  const kpsDisplay =
    killsPerSecond.low !== 0
      ? `${formatNumber(killsPerSecond.low)} - ${formatNumber(
          killsPerSecond.high
        )}`
      : "0"

  return (
    <div className="Header">
      <div className="Header-title">
        <h1>Clicking Spree</h1>
      </div>
      <div className="Header-info">
        <div className="Header-actions">
          <button className="Header-action" onClick={() => handleAddKills()}>
            Attack
          </button>
        </div>
        <div className="Header-stats">
          <div className="Header-stat">
            <span className="Header-stat-label">Kills</span>
            <span className="Header-stat-value">{formatNumber(kills)}</span>
          </div>
          <div className="Header-stat">
            <span className="Header-stat-label">KPS</span>
            <span className="Header-stat-value">{kpsDisplay}</span>
          </div>
          <div className="Header-stat">
            <span className="Header-stat-label">KPC</span>
            <span className="Header-stat-value">
              {formatNumber(killsPerClick + attackPower.value)}
            </span>
          </div>
          <div className="Header-stat">
            <span className="Header-stat-label">Exp</span>
            <span className="Header-stat-value">
              {formatNumber(experience)}
            </span>
          </div>
          <div className="Header-stat">
            <span className="Header-stat-label">Exp to Level</span>
            <span className="Header-stat-value">
              {formatNumber(expToNextLevel)}
            </span>
          </div>
        </div>
      </div>
      <div className="Header-level">
        <span className="Header-level-label">Level {level}</span>
        <progress
          className="Header-level-progress"
          value={experience}
          max={levels[level + 1].exp + 1}
        />
      </div>
    </div>
  )
}

export default Header
