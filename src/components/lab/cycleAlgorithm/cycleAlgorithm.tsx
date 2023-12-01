import algorithmImage from "../../../images/algorithms/сycle.png"
import {useEffect, useState} from "react"
import NumberInput from "../../utils/customInput/numberInput"
import MultipleNumbersInput from "../../utils/customInput/multipleNumbersInput"

function CycleAlgorithm() {
    const [result, setResult] = useState<number | null>(null)
    const [n ,setN] = useState<number | null>(null)
    const [a, setA] = useState<number[] | null>(null)

    const isDefined = n !== null && a !== null && a.length === n

    useEffect(() => {
        if(!isDefined || a === null) return
        let count = 0
        for(let i = 1; i <= n; i++) count += a.slice(0, i).reduce((previous, current) => previous + current, 0) / n
        setResult(count + n * (n + 1) / 2)
    }, [n, a, isDefined])

    return (<div className={"algorithm-block"}>
        <h1>Циклічний алгоритм</h1>
        <img width={"300"} alt={""} src={algorithmImage} />
        <NumberInput className={"classicInput"} placeholder={"Введіть число n"} onChange={setN} />
        <MultipleNumbersInput className={"classicInput"} placeholder={"Введіть набір чисел a"} onChange={setA} />
        {isDefined ? <span>Результат f = {result}</span> : <span className={"text-danger"}>Невірно задані данні</span> }
    </div>)
}

export default CycleAlgorithm