import { useContext } from "react";
import TodoContext from "../context/todoContext";
import { Alert, AlertTitle, Snackbar } from "@mui/material";


const GuardarEdicion = () =>{

    const {openGuardarEdit,setOpenGuardarEdit} = useContext(TodoContext)

    return(
        <Snackbar
            open={openGuardarEdit}
            autoHideDuration={1000}
            onClose={()=>setOpenGuardarEdit(false)}
        >
            <Alert severity="success" variant="filled">
                <AlertTitle>La tarea se ha editado correctamente.</AlertTitle>
            </Alert>
                
        </Snackbar>
    )
}

export default GuardarEdicion;