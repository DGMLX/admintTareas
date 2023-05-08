import { useState } from "react"
import TodoContext from "./todoContext"


     /*   nombre:"Realizar tarea numero 1",
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
        */ 


const ProviderContext = ({children}) =>{

    const [tareas,setTarea] = useState([])
    const [openEliminar,setOpenEliminar] = useState(false)
    const [openPendiente,setOpenPendiente] = useState(false)
    const [openDone,setOpenDone] = useState(false)
    const [openDrawerEdit, setOpenDrawerEdit] = useState(false)
    const [openGuardarEdit, setOpenGuardarEdit] = useState(false)
    const [openInputTarea,setOpenInputTarea] = useState(false)
    

    const addTarea = (nuevaTarea) =>{
        setTarea(
            tareas,
            tareas.push(nuevaTarea)
        )
    }

    const deleteTarea = (tareaDeleted) =>{
        console.log(tareaDeleted)
    }

    const eliminarTarea = (id) =>{
        
        const nuevoArray = tareas.filter(tarea=>tarea.id!=id)
        setTarea(nuevoArray)
        setOpenEliminar(true)
    }

    return(
        <TodoContext.Provider value={{tareas,setTarea,addTarea,deleteTarea,openEliminar,setOpenEliminar,openPendiente,setOpenPendiente,openDone,setOpenDone,openDrawerEdit,setOpenDrawerEdit,openGuardarEdit,setOpenGuardarEdit,openInputTarea,setOpenInputTarea,eliminarTarea}}>
            {children}
        </TodoContext.Provider>
    )
}

export default ProviderContext