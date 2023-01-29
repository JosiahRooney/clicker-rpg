import { TRarity } from "../../utils/types"

interface IProps {
  rarity: TRarity
}

const CostOverlay: React.FC<IProps> = ({ rarity }) => {
  const { rank } = rarity
  const coords = [
    { x: 136, y: -6 },
    { x: 103, y: -6 },
    { x: 70, y: -6 },
    { x: 36, y: -6 },
    { x: -7, y: -6 },
  ][rank - 1]

  return (
    <div
      className="cost-overlay"
      style={{
        backgroundPositionX: coords.x,
        backgroundPositionY: coords.y,
        backgroundSize: "210px auto",
        transform: `scale(1.07) rotate(${rank === 5 ? 45 : 0}deg)})`,
      }}
    ></div>
  )
}

export default CostOverlay
