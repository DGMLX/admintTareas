import { Box, Button, Divider, Drawer, Grid, TextField, Toolbar, Typography } from "@mui/material"
import { useContext, useEffect } from "react"
import TodoContext from "../context/todoContext"
import AlertaEliminar from "../helpers/AlertaEliminar"
import GuardarEdicion from "../helpers/guardarEdicion"
import EditDrawer from "../helpers/EditDrawer"

const TareasPendientesPage = () =>{

    const {tareas,setOpenDrawerEdit,openDrawerEdit,setOpenGuardarEdit,eliminarTarea,cantPendientes,setCantEliminados,setCantRealizado,setCantPendientes,capturarEdit} =useContext(TodoContext)


    const SaveAndCloseEdit = ()=>{
        setOpenGuardarEdit(true)
        setOpenDrawerEdit(false)
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
            <AlertaEliminar/>
            <GuardarEdicion/>
            <Drawer
                anchor="bottom"
                open={openDrawerEdit}
                onClose={()=>setOpenDrawerEdit(false)}
            >
                <EditDrawer/>
                
            </Drawer>
            
            <Toolbar/>
            <Typography variant="h2" mb={3}>Tareas pendientes: {cantPendientes.length}</Typography>
            <Divider/>
            <Grid Container mt={3}>
                {tareas.map(tarea=>{
                    if(tarea.done === false && tarea.notDeleted === true){
                        return(
                            <>
                    <Grid Item sx={{display:"flex", justifyContent:"space-between",mb:3}}>
                        <Typography align="left">{tarea.nombre}</Typography>
                        <Grid sx={{display:"flex",justifyContent:"flex-end"}}>
                            <Button variant="outlined"  color="primary" sx={{mr:2}} onClick={()=>capturarEdit(tarea.id)}>Editar</Button>
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

export default TareasPendientesPage