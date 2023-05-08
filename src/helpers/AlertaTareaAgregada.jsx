import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useContext } from "react";
import TodoContext from "../context/todoContext";

const AlertaAgregada = () =>{

    const {openInputTarea,setOpenInputTarea} = useContext(TodoContext)


    return(
        <Snackbar
                open={openInputTarea}
                autoHideDuration={1000}
                onClose={()=>setOpenInputTarea(false)}
                >
                <Alert severity="success" variant="filled">
                    <AlertTitle>
                        La tarea se ha agregado correctamente.
                    </AlertTitle>
                </Alert>
            </Snackbar>
    )
}

export default AlertaAgregada;