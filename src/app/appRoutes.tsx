import {Route, Routes} from "react-router-dom"
import FirstLab from "../components/lab/lab8"
import ErrorPage from "../components/errorPage/errorPage"

function AppRoutes() {
    return (<Routes>
        <Route path={"/"} element={<FirstLab />} />
        <Route path={"*"} element={<ErrorPage header={"404"} subtext={"Page not found"} />} />
    </Routes>)
}

export default AppRoutes