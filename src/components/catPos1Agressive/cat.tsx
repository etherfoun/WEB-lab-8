import "./catStyle.scss"
import cat from "./img/cute-cat.jpg"
import tiger from "./img/angry-tiger.jpg"

export default function CatPos1Agressive() {
  return (
    <div className="image-container">
      <div className="metamorphosis">
        <img src={cat} className="cute-cat" />
        <img src={tiger} className="angry-tiger" />
      </div>
    </div>
  )
}