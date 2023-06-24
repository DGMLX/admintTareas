import { Box, Button, TextField, Typography } from "@mui/material"
import { useContext } from "react"
import TodoContext from "../context/todoContext"


const EditDrawer = () =>{

    const {tareaEditSeleccionada,guardarEdicionTarea}=useContext(TodoContext)
    
    return(
        <>
            <Typography variant="h5" align="center" mt={3} mb={5}>Editar Tarea : {tareaEditSeleccionada[0].nombre}</Typography> 
            <Box sx={{display:"flex",justifyContent:"center"}} mb={5}>
                <TextField sx={{width:"50%"}} label="Nombre de la tarea" value={tareaEditSeleccionada[0].nombre} />
            </Box> 
            <Box sx={{display:"flex",justifyContent:"center"}} mb={5}>
                <Button variant="contained"  sx={{width:"15rem"}} color="primary" onClick={()=>guardarEdicionTarea(tareaEditSeleccionada[0].id)}>Guardar Edición</Button>
            </Box>
        </>
    )
}

export default EditDrawer