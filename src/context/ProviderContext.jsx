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
            [...tareas,nuevaTarea]
        )
        console.log(tareas)
    }

    const deleteTarea = (tareaDeleted) =>{
        console.log(tareaDeleted)
    }

    const eliminarTarea = (id) =>{
        
        setOpenEliminar(true)
        setTarea(tareas.map(tarea=>{
            if (tarea.id === id){
                return {...tarea,deleted:true,notDeleted:false}
            }
            return tarea
    }))
    }

    const doneTarea = (id) =>{
        setOpenDone(true)
        setTarea(tareas.map(tarea=>{
            if (tarea.id === id){
                return {...tarea,done:true,deleted:false,notDeleted:true}
            }
            return tarea
    }))
    }
    const pendingTarea = (id)=>{
        setTarea(tareas.map(tarea=>{
            if(tarea.id === id){
                return{...tarea,done:false,deleted:false,notDeleted:true}
            }
            return tarea
        }))
    }

    return(
        <TodoContext.Provider value={{tareas,setTarea,addTarea,deleteTarea,openEliminar,setOpenEliminar,openPendiente,setOpenPendiente,openDone,setOpenDone,openDrawerEdit,setOpenDrawerEdit,openGuardarEdit,setOpenGuardarEdit,openInputTarea,setOpenInputTarea,eliminarTarea,doneTarea,pendingTarea}}>
            {children}
        </TodoContext.Provider>
    )
}

export default ProviderContext