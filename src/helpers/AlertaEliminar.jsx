import { Alert, AlertTitle, Snackbar } from "@mui/material"
import { useContext } from "react"
import TodoContext from "../context/todoContext"


const AlertaEliminar = () =>{

    const {openEliminar,setOpenEliminar} = useContext(TodoContext)

    return(
        <Snackbar
            open={openEliminar}
            autoHideDuration={1000}
            onClose={()=>setOpenEliminar(false)}
        >
            <Alert severity="error" variant="filled">
                <AlertTitle>La tarea se ha eliminado correctamente.</AlertTitle>
            </Alert>
                
        </Snackbar>

    )
}

export default AlertaEliminar