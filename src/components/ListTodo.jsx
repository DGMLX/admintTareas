import {Box, Button, Drawer, Grid, TextField, Typography } from "@mui/material"
import { useContext, useEffect} from "react"
import TodoContext from "../context/todoContext"
import AlertaEliminar from "../helpers/AlertaEliminar"
import AlertaDone from "../helpers/AlertaDone"
import GuardarEdicion from "../helpers/guardarEdicion"
import EditDrawer from "../helpers/EditDrawer"


const ListTodo = () =>{
    
    
    
    const {tareas,setOpenDrawerEdit,openDrawerEdit,setOpenGuardarEdit,eliminarTarea,doneTarea,pendingTarea,cantPendientes,cantRealizado,setCantPendientes,setCantRealizado,setCantEliminados,capturarEdit} = useContext(TodoContext)
    
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
            {/* <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={()=>setOpen(false)}
            >
                <Alert severity="error" variant="filled">
                    <AlertTitle>La tarea se ha eliminado correctamente.</AlertTitle>
                </Alert>
                
            </Snackbar> */}
            <AlertaDone/>
            <AlertaEliminar/>
            <GuardarEdicion/>
            <Drawer
                anchor="bottom"
                open={openDrawerEdit}
                onClose={()=>setOpenDrawerEdit(false)}
            >
                <EditDrawer/>
                
            </Drawer>

            <Grid container sx={{display:"flex",justifyContent:"space-evenly"}}>
                <Grid Item md={5}>
                    <Typography variant="h5">Tareas pendientes: {cantPendientes.length}</Typography>
                    <Grid container sx={{display:"flex",mt:3}}>
                        {tareas.map(tarea=>{
                            if(tarea.done === false && tarea.notDeleted === true){
                                return(
                            <>
                                <Grid Item md={8} sx={{mt:3}}>
                                    <Typography align="left">{tarea.nombre}</Typography>
                                </Grid>
                                <Grid Item md={4} sx={{display:"flex",justifyContent:"space-evenly",mt:3}}>
                                    <Button variant="outlined" color="success" sx={{mr:2}}
                                    onClick={()=>doneTarea(tarea.id)}>Done</Button>
                                    <Button variant="outlined" color="primary" sx={{mr:2}}
                                    onClick={()=>capturarEdit(tarea.id)}>Editar</Button>
                                    <Button variant="outlined" onClick={()=>eliminarTarea(tarea.id)} color="error">X</Button>
                                </Grid>
                            </>
                            )
                        }
                    })}
                    </Grid>
                </Grid>

                <Grid Item md={5} >
                    <Typography variant="h5">Tareas realizadas: {cantRealizado.length}</Typography>
                    <Grid Container sx={{display:"flex",mt:3,flexWrap:"wrap"}}>
                        {tareas.map(tarea=>{
                            if(tarea.done === true && tarea.notDeleted === true){
                                
                                return (
                                    <>
                                    <Grid Item md={8} sx={{mt:3}}>
                                    <Typography align="left">{tarea.nombre}</Typography>
                                        </Grid>
                                        <Grid Item md={4} sx={{display:"flex",justifyContent:"space-evenly",mt:3}}>
                                            <Button variant="outlined" color="warning" sx={{mr:2}}
                                            onClick={()=>pendingTarea(tarea.id)}>Pendiente</Button>
                                            
                                            <Button variant="outlined" onClick={()=>eliminarTarea(tarea.id)} color="error">X</Button>
                                    </Grid>
                                    </>
                                )
                            }
                        })}
            
                    </Grid>
                </Grid>


            </Grid>
        </>

    )
}

export default ListTodo