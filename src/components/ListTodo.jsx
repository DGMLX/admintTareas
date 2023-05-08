import {Box, Button, Drawer, Grid, TextField, Typography } from "@mui/material"
import { useContext} from "react"
import TodoContext from "../context/todoContext"
import AlertaEliminar from "../helpers/AlertaEliminar"
import AlertaDone from "../helpers/AlertaDone"
import GuardarEdicion from "../helpers/guardarEdicion"


const ListTodo = () =>{
    
    const {tareas,setOpenEliminar,setOpenDone,setOpenDrawerEdit,openDrawerEdit,setOpenGuardarEdit,setTarea,eliminarTarea} = useContext(TodoContext)


    const doneTarea = () =>{
        setOpenDone(true)
    }
    const SaveAndCloseEdit = ()=>{
        setOpenGuardarEdit(true)
        setOpenDrawerEdit(false)
    }
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
                <Typography variant="h5" align="center" mt={3} mb={5}>Editar Tarea : "Nombre de la tarea"</Typography> 
                <Box sx={{display:"flex",justifyContent:"center"}} mb={5}>
                    <TextField sx={{width:"50%"}} label="Nombre de la tarea"/>
                </Box> 
                <Box sx={{display:"flex",justifyContent:"center"}} mb={5}>
                    <Button variant="contained"  sx={{width:"15rem"}} color="primary" onClick={()=>SaveAndCloseEdit()}>Guardar Edición</Button>
                </Box>
                
            </Drawer>

            <Grid container sx={{display:"flex",justifyContent:"space-evenly"}}>
                <Grid Item md={5}>
                    <Typography variant="h5">Tareas pendientes: Amount</Typography>
                    <Grid container sx={{display:"flex",mt:3}}>
                        {tareas.map(tarea=>(
                            <>
                                <Grid Item md={8} sx={{mt:3}}>
                                    <Typography align="left">{tarea.nombre}</Typography>
                                </Grid>
                                <Grid Item md={4} sx={{display:"flex",justifyContent:"space-evenly",mt:3}}>
                                    <Button variant="outlined" color="success" sx={{mr:2}}
                                    onClick={()=>doneTarea()}>Done</Button>
                                    <Button variant="outlined" color="primary" sx={{mr:2}}
                                    onClick={()=>setOpenDrawerEdit(true)}>Editar</Button>
                                    <Button variant="outlined" onClick={()=>eliminarTarea(tarea.id)} color="error">X</Button>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Grid>

                <Grid Item md={5} >
                    <Typography variant="h5">Tareas realizadas: Amount</Typography>
                    <Grid Container sx={{display:"flex",mt:3,flexWrap:"wrap"}}>
            
                    </Grid>
                </Grid>


            </Grid>
        </>

    )
}

export default ListTodo