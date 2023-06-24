import {Box, Divider,Toolbar, Typography } from "@mui/material"
import InputTodo from "../components/InputTodo"
import ListTodo from "../components/ListTodo"
import { useContext } from "react"
import TodoContext from "../context/todoContext"


const HomePage = () =>{

    // // console.log(new Date().getDay())

    const {tareas,addTarea} = useContext(TodoContext)
    return(
        <>
            
            <Toolbar/>
            <Typography variant="h2" mb={3}>Lista de tareas</Typography>
            <Divider/>
            <Box mt={3}>
                <InputTodo addTarea={addTarea}/>
            </Box>
            <Box>
                <ListTodo/>
            </Box>
        
        </>
    )
}

export default HomePage