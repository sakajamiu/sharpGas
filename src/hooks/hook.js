import axios from 'axios'
import {useState} from 'react'

 export const useResources = (baseUrl) =>{
 const [resources, setResources] = useState(null)

 const create = async (resource) =>{
     const response = await axios.post(baseUrl,resource)

     setResources(response.data)
 

 }
 const service ={
     create
 }

 return[
     resources, service
 ]
}
export const useField = (type) =>{
  const [value , setValue] =useState('')
  const onChange = (event) =>{
      setValue(event.target.value)

  }
  return{
      type,
      value,
      onChange
  }
}