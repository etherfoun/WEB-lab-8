import algorithmImage from "../../../images/algorithms/linear.png"
import NumberInput from "../../utils/customInput/numberInput"
import {useEffect, useState} from "react"
import "../utils.scss"

function LinearAlgorithm() {
    const [result, setResult] = useState<number | null>(null)
    const [a, setA] = useState<number | null>(null)
    const [b, setB] = useState<number | null>(null)

    const isFunctionDefined = a !== null && b !== null && Math.abs(a) > Math.abs(b) && a !== 0

    useEffect(() => {
        if(!isFunctionDefined) return
        setResult(Math.log10(Math.sqrt(a ** 2 + b ** 2)) - Math.log(Math.sqrt(a ** 2 - b ** 2)))
    }, [a, b, isFunctionDefined])

    return (<div className={"algorithm-block"}>
        <h1>Лінійний алгоритм</h1>
        <img width={"300"} alt={""} src={algorithmImage} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число a"} onChange={setA} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число b"} onChange={setB} />
        {isFunctionDefined ? <span>Результат Y1 = {result}</span> : <span className={"text-danger"}>Функція не існує при ціх значеннях</span> }
    </div>)
}

export default LinearAlgorithm