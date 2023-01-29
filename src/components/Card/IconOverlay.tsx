import { TRarity } from "../../utils/types"

interface IProps {
  rarity: TRarity
}

const IconOverlay: React.FC<IProps> = ({ rarity }) => {
  const { rank } = rarity
  const coords = [
    { x: -505, y: -255 },
    { x: -271, y: -255 },
    { x: -36, y: -515 },
    { x: 231, y: -30 },
    { x: 699, y: -30 },
  ][rank - 1]

  return (
    <div
      className="icon-overlay"
      style={{
        backgroundPositionX: coords.x,
        backgroundPositionY: coords.y,
        backgroundSize: "970px auto",
        transform: "scale(1.06)",
      }}
    ></div>
  )
}

export default IconOverlay
