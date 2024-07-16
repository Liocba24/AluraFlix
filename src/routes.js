import NuevoVideo from "pages/NuevoVideo/nuevoVideo"
import Inicio from "../src/pages/inicio/index"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "pages/NotFound"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicio />}></Route>
                <Route path="nuevovideo" element={<NuevoVideo/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes