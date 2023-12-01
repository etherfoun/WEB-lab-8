import React, {useEffect, useRef} from "react";

function useCurrentCallback<CallbackType = ReturnType<any>>(callback : CallbackType) : React.MutableRefObject<CallbackType> {

    const callbackRef = useRef<CallbackType>(callback)
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    return callbackRef
}

export default useCurrentCallback