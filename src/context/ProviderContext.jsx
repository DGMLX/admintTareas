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
    const [cantPendientes,setCantPendientes] = useState([])
    const [cantRealizado,setCantRealizado] = useState([])
    const [cantEliminados,setCantEliminados] = useState([])
    const [tareaEditSeleccionada,setTareaIdSeleccionada] = useState([])


    const addTarea = (nuevaTarea) =>{
        
        setTarea(
            [...tareas,nuevaTarea]
        )
        
    }

    const deleteTarea = (tareaDeleted) =>{
        console.log(tareaDeleted)
    }

    const capturarEdit= (id)=>{
        setOpenDrawerEdit(true)
        const tareaEditar = tareas.map(tarea=>{
            if(tarea.id == id){
                return tarea
            }
        })
        setTareaIdSeleccionada(tareaEditar)
    }
    const SaveAndCloseEdit = ()=>{
        setOpenGuardarEdit(true)
        setOpenDrawerEdit(false)
    }
    const guardarEdicionTarea = (id) =>{
        SaveAndCloseEdit()
        console.log(id)
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

    const eliminarDefinitivo = (id) =>{
        setOpenEliminar(true)
        const nuevasTareas = tareas.filter(tarea=>tarea.id !== id)
        setTarea(nuevasTareas)
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
        setOpenPendiente(true)
        setTarea(tareas.map(tarea=>{
            if(tarea.id === id){
                return{...tarea,done:false,deleted:false,notDeleted:true}
                
            }
            return tarea
        }))
    }

    return(
        <TodoContext.Provider value={{tareas,setTarea,addTarea,deleteTarea,openEliminar,setOpenEliminar,openPendiente,setOpenPendiente,openDone,setOpenDone,openDrawerEdit,setOpenDrawerEdit,openGuardarEdit,setOpenGuardarEdit,openInputTarea,setOpenInputTarea,eliminarTarea,doneTarea,pendingTarea,eliminarDefinitivo,cantPendientes,setCantPendientes,cantRealizado,setCantRealizado,cantEliminados,setCantEliminados,capturarEdit,tareaEditSeleccionada,guardarEdicionTarea}}>
            {children}
        </TodoContext.Provider>
    )
}

export default ProviderContext