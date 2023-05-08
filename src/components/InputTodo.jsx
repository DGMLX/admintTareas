import { Alert, AlertTitle, Box, Button, Snackbar, TextField} from "@mui/material"
import {  useState } from "react"


const InputTodo = ({addTarea}) =>{

    const [tarea,setTarea] = useState({
        nombre:""
    })
    const [open,setOpen] = useState(false)

    const onHandleChange = (e) =>{
        const newTodo = {
            nombre : e.target.value,
            done:false,
            deleted:false,
            id: new Date().getTime()
        }
        setTarea(
            newTodo
            )
    }
    console.log(tarea)

    const onHandleClick = (e)=>{
        e.preventDefault();
        
        if (tarea.nombre===""){
            console.log("Ingresa un valor válido")
        }else{
            setOpen(true)
            addTarea(tarea)
            setTarea({
                nombre:""
            })
            
        }
        
    }
    return(
        <>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={()=>setOpen(false)}
                >
                <Alert severity="success" variant="filled">
                    <AlertTitle>
                        La tarea se ha agregado correctamente.
                    </AlertTitle>
                </Alert>
            </Snackbar>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:5,mb:5}}>
                <TextField label="Ingresar tarea" name="nombre" onChange={(e)=>onHandleChange(e)} color="success" sx={{width:500}} value={tarea.nombre} />
                <Button onClick={(e)=>onHandleClick(e)} variant="outlined" sx={{marginLeft:2}} color="success">Agregar</Button>
            </Box>
        </>

    )
}

export default InputTodo