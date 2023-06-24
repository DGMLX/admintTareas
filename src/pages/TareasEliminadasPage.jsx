import { Button, Divider, Grid, Toolbar, Typography } from "@mui/material"
import TodoContext from "../context/todoContext"
import { useContext, useEffect } from "react"
import AlertaEliminar from "../helpers/AlertaEliminar"
import AlertaDone from "../helpers/AlertaDone"
import AlertaPendiente from "../helpers/AlertaPendiente"

const TareasEliminadasPage = () =>{

    const {pendingTarea,doneTarea,tareas,eliminarDefinitivo,cantEliminados,setCantPendientes,setCantRealizado,setCantEliminados} =useContext(TodoContext)

    useEffect(()=>{
        setCantPendientes(tareas.filter(tarea=>{
            if(tarea.done == false && tarea.notDeleted == true){
                return tarea
            }
        }))
        setCantRealizado(tareas.filter(tarea=>{
            if(tarea.done == true && tarea.notDeleted == true){
                return tarea
            }
        }))
        setCantEliminados(tareas.filter(tarea=>{
            if(tarea.deleted == true && tarea.notDeleted == false){
                return tarea
            }
        }))

    },[tareas])
    return(
        <>
            <AlertaDone/>
            <AlertaEliminar/>
            <AlertaPendiente/>
            <Toolbar/>
            <Typography variant="h2" mb={3}>Tareas eliminadas: {cantEliminados.length}</Typography>
            <Divider/>
            <Grid Container mt={3}>
                {tareas.map(tarea=>{
                    if(tarea.deleted === true && tarea.notDeleted === false){
                        return(
                            <>

                    <Grid Item sx={{display:"flex", justifyContent:"space-between",mb:3}}>
                        <Typography align="left">{tarea.nombre}</Typography>
                        <Grid sx={{display:"flex",justifyContent:"flex-end"}}>
                            <Button variant="outlined" color="success" sx={{mr:2}} onClick={()=>doneTarea(tarea.id)}>Realizada</Button>
                            <Button variant="outlined" color="warning" sx={{mr:2}} onClick={()=>pendingTarea(tarea.id)}>Pendiente</Button>
                            <Button variant="outlined" onClick={()=>eliminarDefinitivo(tarea.id)} color="error">X</Button>
                        </Grid>
                    </Grid>
                    </>
                )
            }
        })}
            </Grid>
        </>
    )
}

export default TareasEliminadasPage