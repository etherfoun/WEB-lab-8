interface IParams {
    header: string,
    subtext : string
}

function ErrorPage({header, subtext} : IParams) {
    return (<div className={"w-100 h-100 d-flex justify-content-center align-items-center flex-column gap-2 text-white"}>
        <h1 className={"display-1"}>{header}</h1>
        <span>{subtext}</span>
    </div>)
}

export default ErrorPage