import { Box, Button, Divider, Drawer, Grid, TextField, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"
import TodoContext from "../context/todoContext"
import AlertaEliminar from "../helpers/AlertaEliminar"
import GuardarEdicion from "../helpers/guardarEdicion"

const TareasPendientesPage = () =>{

    const {tareas,setOpenEliminar,setOpenDrawerEdit,openDrawerEdit,setOpenGuardarEdit,eliminarTarea} =useContext(TodoContext)


    const SaveAndCloseEdit = ()=>{
        setOpenGuardarEdit(true)
        setOpenDrawerEdit(false)
    }
    
    return(
        <>
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
            
            <Toolbar/>
            <Typography variant="h2" mb={3}>Tareas pendientes: Amount</Typography>
            <Divider/>
            <Grid Container mt={3}>
                {tareas.map(tarea=>(
                    <Grid Item sx={{display:"flex", justifyContent:"space-between",mb:3}}>
                        <Typography align="left">{tarea.nombre}</Typography>
                        <Grid sx={{display:"flex",justifyContent:"flex-end"}}>
                            <Button variant="outlined"  color="primary" sx={{mr:2}} onClick={()=>setOpenDrawerEdit(true)}>Editar</Button>
                            <Button variant="outlined" onClick={()=>eliminarTarea(tarea.id)} color="error">X</Button>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default TareasPendientesPage