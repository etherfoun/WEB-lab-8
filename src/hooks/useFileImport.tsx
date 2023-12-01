import {useRef} from "react"

function useFileImport(onFileOpened : (text : string) => any) : [JSX.Element, () => any] {
    const inputRef = useRef<HTMLInputElement>(null)

    const inputElement = inputRef.current

    const openFile = () => {
        if(inputElement) {
            inputElement.click()
        }
    }
    const onChange = () => {
        if(inputElement && inputElement.files) {
            const reader = new FileReader()
            reader.onload = (event : ProgressEvent<FileReader>) => {
                event.target && typeof event.target.result === "string" && onFileOpened(event.target.result)
                inputElement.value = ""
            }
            reader.readAsText(inputElement.files[0])
        }
    }

    return [<input ref={inputRef} type={"file"} hidden={true} onChange={onChange} />, openFile]
}

export default useFileImport