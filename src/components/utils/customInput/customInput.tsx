import ICustomInputParams from "./ICustomInputParams"
import {ChangeEvent, useEffect, useState} from "react"
import clsx from "clsx"

interface IParams extends ICustomInputParams {
    onChange?: (value : string) => string | null
    defaultValue ?: string,
    value?: string
}

function CustomInput({onChange, onError, className, placeholder, defaultValue, value} : IParams) {
    const [error, setError] = useState<string | null>(null)

    useEffect(() => onError && onError(error), [onError, error])

    const onTyped = (event : ChangeEvent<HTMLInputElement>) => onChange && setError(onChange(event.target.value) || null)

    return (<input defaultValue={defaultValue} onChange={onTyped} className={clsx(className, error && "errorInput")} placeholder={placeholder} />)
}

export default CustomInput