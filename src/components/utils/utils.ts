import {randomInt} from "./math"

function range(startIndex: number, endIndex: number): number[] {
    return rangeWithStep(startIndex, endIndex + 1, 1)
}

function rangeWithStep(startIndex: number, endIndex: number, step: number = 1): number[] {
    let result = []
    for(let index = startIndex; index < endIndex; index += step) result.push(index)
    return result
}

function countExecutionTime(callback: () => any): number {
    const start = performance.now()
    callback()
    return performance.now() - start
}

function randomArray(min: number, max: number, length: number): number[] {
    return range(1, length).map(() => randomInt(min, max))
}

function sum(array: number[]): number {
    return array.reduce((previous, current) => previous + current, 0)
}

function multiple(array: number[]): number {
    return array.reduce((previous, current) => previous * current, 1)
}

export {range, countExecutionTime, randomArray, sum, multiple, rangeWithStep}