
import { Box, Button, FormControl, HStack, Input, Text, VStack, useToast} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import { addTodo, deleteTodo, getAllTodo, updateTodo } from './api/HandleApi'


const App = () => {
  const toast = useToast()
  const [isUpdating, setIsUpdating] = useState(false)
  const [todo, setTodo] = useState([])
  const [text, setText] = useState('')
  const [todoUpdate, setTodoUpdate] = useState('')

  const onAdd = (e)=>{
    e.preventDefault()
    if(text !== ''){
      addTodo(text ,setText ,setTodo)
    
    toast(
      {
        description: "Add Successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme:'blue'
      }
    )
    }else{
        toast(
            {
              description: "Please Enter Text",
              status: 'warning',
              duration: 3000,
              isClosable: true,
              colorScheme:'yellow'
              }
      )}

  }

  const onDelete = (e)=>{

    deleteTodo(e, setTodo)
    toast(
      {
        description: "Deleted Successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme:'blue'
      }
    )
  }

  const onUpdate = (e)=>{
    e.preventDefault()
    if(text !== ''){
      updateTodo( todoUpdate._id,todoUpdate.isActive, text  ,setText ,setTodo , setIsUpdating)
    
    toast(
      {
        description: "Updating Successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme:'blue'
      }
    )
    }else{
        toast(
            {
              description: "Please Enter Text",
              status: 'warning',
              duration: 3000,
              isClosable: true,
              colorScheme:'yellow'
              }
      )}

  }

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])
  return (
    <Box m='50px 0'  w='100%' alignItems={'center'} display={'flex'} justifyContent={'center'} p={'0 30px'}>
        <VStack w='370px' boxShadow={'0px 0px 10px rgba(0,0,0,0.2)'} borderRadius={'25px'} p={'30px 25px'} spacing={'20px'}> 
            <Text fontSize={'27px'} fontWeight={'700'} color={'blue.500'} mb={'40px'}>Todo App</Text>
            <Box alignItems={'start'} w='100%'>
        
                    <HStack spacing={'10px'}  w='100%' >
                    <FormControl isRequired>
                        <Input   
                        type='text' 
                        placeholder={isUpdating?"Update..":'Add..'} 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        />
                    </FormControl>
          
                    <Button p='0 5px' w='25%' type='submit' colorScheme='blue' onClick={ isUpdating?onUpdate : onAdd}>
                      {isUpdating ? "Update" : "Add"}
                      </Button>
                    </HStack>

            </Box>
            <VStack w='100%'>
            {todo.map(e=>(
              <TodoList 
              key={e._id} 
              todo={e} 
              onDelete={()=>onDelete(e._id)} 
              onUpdate={()=>{
                setIsUpdating(!isUpdating)
                setTodoUpdate(e)
              }}
              setTodoUpdate={setTodoUpdate}
              setText={setText}
              setTodo={setTodo}
              setIsUpdating={setIsUpdating}
              />
              
            ))}
            </VStack>
        </VStack>
    </Box>
  )
}

export default App