import { Alert, AlertTitle, Snackbar } from "@mui/material"
import { useContext } from "react"
import TodoContext from "../context/todoContext"


const AlertaDone = () =>{

    const {openDone,setOpenDone} = useContext(TodoContext)

    return(
        <Snackbar
            open={openDone}
            autoHideDuration={1000}
            onClose={()=>setOpenDone(false)}
        >
            <Alert severity="success" variant="filled">
                <AlertTitle>La tarea se ha movido a tareas realizadas.</AlertTitle>
            </Alert>
                
        </Snackbar>

    )
}

export default AlertaDone