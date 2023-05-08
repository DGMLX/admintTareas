
import { Alert, AlertTitle, Snackbar } from "@mui/material"
import { useContext } from "react"
import TodoContext from "../context/todoContext"


const AlertaPendiente = () =>{

    const {openPendiente,setOpenPendiente} = useContext(TodoContext)

    return(
        <Snackbar
            open={openPendiente}
            autoHideDuration={1000}
            onClose={()=>setOpenPendiente(false)}
        >
            <Alert severity="warning" variant="filled">
                <AlertTitle>La tarea se ha movido a tareas pendientes.</AlertTitle>
            </Alert>
                
        </Snackbar>

    )
}

export default AlertaPendiente