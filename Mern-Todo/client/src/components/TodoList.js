import { HStack, IconButton, Text } from '@chakra-ui/react'
import React, {  useState } from 'react'
import {DeleteIcon , EditIcon} from '@chakra-ui/icons'
import { updateTodo } from '../api/HandleApi'
const TodoList = ({todo, onUpdate , onDelete ,setText , setTodo  ,setIsUpdating }) => {
    const [todoUpdate, setTodoUpdate] = useState({
        ...todo,
        isActive: !todo.isActive
    })
    const [isActive, setIsActive] = useState(!todo.isActive)
  return (
    <HStack  w='100%' justifyContent={'space-between'} boxShadow={'0px 0px 5px rgba(0,0,0,0.1)'} borderRadius={'7px'} p={'5px 13px'} opacity={todo.isActive? ".2":"1"}>
        <Text
        cursor={'pointer'}
         fontSize={'14px'} 
         fontWeight={'500'} 
         opacity={'.9'}
         onClick={()=>
            {
            setIsActive(!isActive)
            setTodoUpdate({
            ...todo,
            isActive: !isActive})
            updateTodo( todoUpdate._id,todoUpdate.isActive,todoUpdate.text , setText ,setTodo , setIsUpdating)
        }
        
        }
         >{todo.text}</Text>
        <HStack >
            <IconButton icon={<EditIcon/>} onClick={onUpdate} backgroundColor={'transparent'} size={'sm'}/>
            <IconButton icon={<DeleteIcon/>} onClick={onDelete} color='red' backgroundColor={'transparent'} size={'sm'}/>
        </HStack>
    </HStack>
  )
}

export default TodoList