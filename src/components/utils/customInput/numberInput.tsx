import ICustomInputParams from "./ICustomInputParams"
import CustomInput from "./customInput"

interface IParams extends ICustomInputParams {
    onChange?: (value: number) => any,
    min?: number,
    max?: number,
    value?: number
}
function NumberInput(params : IParams) {

    const {onChange, min, max, value} = params

    const onTyped = (value : string) => {
        const num = Number(value)
        if(isNaN(num) || value === "") return "Невірний тип числа"
        if(min && num < min) return "Число менше, ніж мінімальне"
        if(max && num > max) return "Число більше, ніж максимальне"
        onChange && onChange(num)
        return null
    }

    return (<CustomInput {...{...params, onChange : onTyped, value: value !== undefined ? value.toString() : undefined}} />)
}

export default NumberInput