import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material"
import {Link as LinkRouter} from "react-router-dom"

const Navbar = () =>{
    return(
        <AppBar>
            <Toolbar sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                
                <Button to="/" component={LinkRouter} color={"inherit"}> <Typography variant="h6">Inicio</Typography></Button>

                <Button to="/tareasRealizadas" component={LinkRouter} color={"inherit"}> <Typography variant="h6">Tareas Realizadas</Typography></Button>

                <Button to="/tareasPendientes" component={LinkRouter} color={"inherit"}> <Typography variant="h6">Tareas Pendientes</Typography></Button>

                <Button to="/tareasEliminadas" component={LinkRouter} color={"inherit"}> <Typography variant="h6">Tareas Eliminadas</Typography></Button>
            
            </Toolbar>
        </AppBar>
    )
}

export default Navbar