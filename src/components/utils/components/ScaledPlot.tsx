import {Data} from "plotly.js"
import Plot from "react-plotly.js"

interface IParams {
    data: Data[],
    title: string
}

function ScaledPlot({data, title} : IParams) {
    return <Plot
        className={"py-4"}
        data={data}
        layout={{width: 700, height: 300, title}}
    />
}

export default ScaledPlot