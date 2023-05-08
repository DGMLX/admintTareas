import { useState } from "react"
import TodoContext from "./todoContext"

const initialState = [
    {
        nombre:"Realizar tarea numero 1",
        done:false,
        fechaCreacion:new Date().getDate() +"/"+ ((new Date().getUTCMonth())+1) + "/"+ new Date().getFullYear(),
        horaCreacion:new Date().getHours() + ":"+ new Date().getMinutes() + ":" + new Date().getSeconds(),
        fechaEliminacion:"",
        horaEliminacion:"",
        fechaEdicion:"",
        horaEdicion:"",
        deleted:false,
        edited:false,
        id: new Date().getTime()
    },
    {
        nombre:"Realizar tarea numero 2",
        fechaCreacion:new Date().getDate() +"/"+ ((new Date().getUTCMonth())+1) + "/"+ new Date().getFullYear(),
        horaCreacion:new Date().getHours() + ":"+ new Date().getMinutes() + ":" + new Date().getSeconds(),
        fechaEliminacion:"",
        horaEliminacion:"",
        fechaEdicion:"",
        horaEdicion:"",
        done:false,
        deleted:false,
        edited:false,
        id: new Date().getTime()*2
    },
    {
        nombre:"Realizar tarea numero 3",
        fechaCreacion:new Date().getDate() +"/"+ ((new Date().getUTCMonth())+1) + "/"+ new Date().getFullYear(),
        horaCreacion:new Date().getHours() + ":"+ new Date().getMinutes() + ":" + new Date().getSeconds(),
        fechaEliminacion:"",
        horaEliminacion:"",
        fechaEdicion:"",
        horaEdicion:"",
        done:false,
        deleted:false,
        edited:false,
        id: new Date().getTime()*3
    },
]

const ProviderContext = ({children}) =>{

    const [tareas,setTarea] = useState(initialState)
    const [openEliminar,setOpenEliminar] = useState(false)
    const [openPendiente,setOpenPendiente] = useState(false)
    const [openDone,setOpenDone] = useState(false)
    const [openDrawerEdit, setOpenDrawerEdit] = useState(false)
    const [openGuardarEdit, setOpenGuardarEdit] = useState(false)
    

    const addTarea = (nuevaTarea) =>{
        setTarea(
            tareas,
            tareas.push(nuevaTarea)
        )
    }

    const deleteTarea = (tareaDeleted) =>{
        console.log(tareaDeleted)
    }


    return(
        <TodoContext.Provider value={{tareas,addTarea,deleteTarea,openEliminar,setOpenEliminar,openPendiente,setOpenPendiente,openDone,setOpenDone,openDrawerEdit,setOpenDrawerEdit,openGuardarEdit,setOpenGuardarEdit}}>
            {children}
        </TodoContext.Provider>
    )
}

export default ProviderContext