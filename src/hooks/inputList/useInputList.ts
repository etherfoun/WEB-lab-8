import {useEffect, useState} from "react"
import {range} from "../../components/utils/utils"

function useInputList() {
    const [arraysCount, setArraysCount] = useState<number>(100)
    const [values, setValues] = useState<number[][]>([])

    const onTyped = (index : number, typedValues : number[]) => {
        const newValues = [...values]
        newValues[index] = typedValues
        setValues(newValues)
    }

    useEffect(() => {
        setValues((oldValues) => {
            const delta = arraysCount - oldValues.length
            return delta >= 0 ? [...oldValues, ...range(1, delta).map(() => [])] : oldValues.slice(0, delta)
        })
    },  [arraysCount])

    return {arraysCount, setArraysCount, values, setValues, onTyped}
}

export default useInputList
