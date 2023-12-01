import {useEffect, useState} from "react"
import algorithmImage from "../../../images/algorithms/ramified.png"
import NumberInput from "../../utils/customInput/numberInput"

function RamifiedAlgorithm() {
    const [result, setResult] = useState<number | null>(null)
    const [a, setA] = useState<number | null>(null)
    const [b, setB] = useState<number | null>(null)
    const [c, setC] = useState<number |null>(null)
    const [x, setX] = useState<number | null>(null)

    const isDefined = a !== null && b !== null && c !== null && x !== null && b ** 2 >= 4 * a * c

    useEffect(() => {
        if(!isDefined) return
        const conditionStatus = b ** 2 === 4 * a * c
        setResult(conditionStatus ? (c * x ** 2 - a * x + b) : (a * x ** 2 + b * x + c))
    }, [a, b, c, x, isDefined])

    return (<div className={"algorithm-block"}>
        <h1>Розгалужений алгоритм</h1>
        <img alt={""} width={"300"} src={algorithmImage} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число a"} onChange={setA} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число b"} onChange={setB} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число c"} onChange={setC} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число x"} onChange={setX} />
        {isDefined ? <span>Результат функції y = {result}</span> : <span className={"text-danger"}>Корінь має недійсне значення</span>}
    </div>)
}

export default RamifiedAlgorithm