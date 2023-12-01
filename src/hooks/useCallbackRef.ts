import {useCallback, useState} from "react"

function useCallbackRef<Type>(initialValue : Type | null) : [Type | null, (value : Type | null) => any] {
    const [ref, setRef] = useState<Type | null>(initialValue)
    const callbackRef = useCallback((value : Type | null) => setRef(value), [])
    return [ref, callbackRef]
}

export default useCallbackRef
