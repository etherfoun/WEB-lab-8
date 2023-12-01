import {HTMLAttributes} from "react"

interface ICustomInputParams extends Pick<HTMLAttributes<HTMLInputElement>, "className" | "placeholder"> {
    onError?: (error: string | null) => any,
}

export default ICustomInputParams
