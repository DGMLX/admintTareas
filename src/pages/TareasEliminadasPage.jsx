import { Button, Divider, Grid, Toolbar, Typography } from "@mui/material"
import TodoContext from "../context/todoContext"
import { useContext } from "react"
import AlertaEliminar from "../helpers/AlertaEliminar"
import AlertaDone from "../helpers/AlertaDone"
import AlertaPendiente from "../helpers/AlertaPendiente"

const TareasEliminadasPage = () =>{

    const {tareas,setOpenEliminar,setOpenDone,setOpenPendiente} =useContext(TodoContext)

    const eliminarTarea=() =>{
        setOpenEliminar(true)
    }
    const doneTarea = ()=>{
        setOpenDone(true)
    }
    const pendingTarea = ()=>{
        setOpenPendiente(true)
    }
    return(
        <>
            <AlertaDone/>
            <AlertaEliminar/>
            <AlertaPendiente/>
            <Toolbar/>
            <Typography variant="h2" mb={3}>Tareas eliminadas: Amount</Typography>
            <Divider/>
            <Grid Container mt={3}>
                {tareas.map(tarea=>(
                    <Grid Item sx={{display:"flex", justifyContent:"space-between",mb:3}}>
                        <Typography align="left">{tarea.nombre}</Typography>
                        <Grid sx={{display:"flex",justifyContent:"flex-end"}}>
                            <Button variant="outlined" color="success" sx={{mr:2}} onClick={()=>doneTarea()}>Realizada</Button>
                            <Button variant="outlined" color="warning" sx={{mr:2}} onClick={()=>pendingTarea()}>Pendiente</Button>
                            <Button variant="outlined" onClick={()=>eliminarTarea()} color="error">X</Button>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default TareasEliminadasPage