import { Box, Button, TextField} from "@mui/material"
import {  useContext, useState } from "react"
import AlertaAgregada from "../helpers/AlertaTareaAgregada"
import TodoContext from "../context/todoContext"


const InputTodo = ({addTarea}) =>{

    const {setOpenInputTarea} = useContext(TodoContext)    

    const [tarea,setTarea] = useState({
        nombre:""
    })

    const onHandleChange = (e) =>{
        const newTodo = {
            nombre : e.target.value,
            done:false,
            deleted:false,
            notDeleted:true,
            id: new Date().getTime(),
            edited:false,
            fechaCreacion:new Date().getDate() +"/"+ ((new Date().getUTCMonth())+1) + "/"+ new Date().getFullYear(),
            horaCreacion:new Date().getHours() + ":"+ new Date().getMinutes() + ":" + new Date().getSeconds(),
            fechaEliminacion:"",
            horaEliminacion:"",
            fechaEdicion:"",
            horaEdicion:"",
        }

        setTarea(
            newTodo
            )
    }
    const onHandleClick = (e)=>{
        e.preventDefault();
        
        if (tarea.nombre===""){
            console.log("Ingresa un valor válido")
        }else{
            setOpenInputTarea(true)
            addTarea(tarea)
            setTarea({
                nombre:""
            })   
        }   
    }
    return(
        <>
            <AlertaAgregada/>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:5,mb:5}}>
                <TextField label="Ingresar tarea" name="nombre" onChange={(e)=>onHandleChange(e)} color="success" sx={{width:500}} value={tarea.nombre} />
                <Button onClick={(e)=>onHandleClick(e)} variant="outlined" sx={{marginLeft:2}} color="success">Agregar</Button>
            </Box>
        </>

    )
}

export default InputTodo