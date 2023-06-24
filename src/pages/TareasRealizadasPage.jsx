import { Button, Divider, Grid, Toolbar, Typography } from "@mui/material"
import TodoContext from "../context/todoContext"
import { useContext, useEffect } from "react"
import AlertaEliminar from "../helpers/AlertaEliminar"
import AlertaPendiente from "../helpers/AlertaPendiente"

const TareasRealizadasPage = () =>{

    const {tareas,setOpenEliminar,setOpenPendiente,eliminarTarea,pendingTarea,cantRealizado,setCantEliminados,setCantPendientes,setCantRealizado} =useContext(TodoContext)
    
    const pendienteTarea = ()=>{
        setOpenPendiente(true)
    }

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
            <AlertaPendiente/>
            <AlertaEliminar/>
            <Toolbar/>
            <Typography variant="h2" mb={3}>Tareas realizadas: {cantRealizado.length}</Typography>
            <Divider/>
            <Grid Container md={8} mt={3}>
                {tareas.map(tarea=>{
                    if(tarea.done == true && tarea.notDeleted === true){
                        return(
                            <>
                    <Grid Item sx={{display:"flex", justifyContent:"space-between",mb:3}}>
                        <Grid Item md={8}>
                            <Typography align="left">{tarea.nombre}</Typography>
                        </Grid>
                        <Grid Item md={4} sx={{display:"flex",justifyContent:"flex-end"}}>
                            <Button variant="outlined" color="warning" onClick={()=>pendingTarea(tarea.id)} sx={{mr:2}}>Pendiente</Button>
                            <Button variant="outlined" onClick={()=>eliminarTarea(tarea.id)} color="error">X</Button>
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

export default TareasRealizadasPage