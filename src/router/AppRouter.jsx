import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import TareasRealizadasPage from "../pages/TareasRealizadasPage"
import TareasEliminadasPage from "../pages/TareasEliminadasPage"
import TareasPendientesPage from "../pages/TareasPendientesPage"
import Navbar from "../components/Navbar"

const AppRouter = () =>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/TareasRealizadas" element={<TareasRealizadasPage/>}/>
            <Route path="/TareasEliminadas" element={<TareasEliminadasPage/>}/>
            <Route path="/TareasPendientes" element={<TareasPendientesPage/>}/>
            <Route path="/*" element={<Navigate to={<HomePage/>}/>}/>
        </Routes>

        </>

    )
}

export default AppRouter