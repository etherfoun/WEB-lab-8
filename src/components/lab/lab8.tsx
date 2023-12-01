import LinearAlgorithm from "./linearAlgorithm/linearAlgorithm"
import RamifiedAlgorithm from "./ramifiedAlgorithm/ramifiedAlgorithm"
import CycleAlgorithm from "./cycleAlgorithm/cycleAlgorithm"
import "./utils.scss"
import "bootstrap/dist/css/bootstrap.css"
import "./main.scss"
import CatPos1Agressive from "../catPos1Agressive/cat"

function FirstLab() {
    return (<div className={"labContainer"}>
        <h1>Babenko Dmytro</h1>
        <CatPos1Agressive />
        <LinearAlgorithm />
        <RamifiedAlgorithm />
        <CycleAlgorithm />
    </div>)
}

export default FirstLab