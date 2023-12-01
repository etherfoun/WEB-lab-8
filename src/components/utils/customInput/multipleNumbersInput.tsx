import ICustomInputParams from "./ICustomInputParams"
import CustomInput from "./customInput"

interface IParams extends ICustomInputParams {
    onChange?: (values: number[]) => any,
    defaultValue? : number[]
}

function MultipleNumbersInput(params : IParams) {
    const {defaultValue} = params

    const onTyped = (value : string) => {
        const values = value.split(",").map(value => value.trim()).filter(value => !value.includes(" ") && value !== "").map(Number)
        if(values.some(isNaN)) return "Невірний формат рядка"
        params.onChange && params.onChange(values)
        return null
    }

    return (<CustomInput {...{...params, onChange : onTyped, defaultValue : defaultValue ? defaultValue.join(", ") : ""}} />)
}

export default MultipleNumbersInput