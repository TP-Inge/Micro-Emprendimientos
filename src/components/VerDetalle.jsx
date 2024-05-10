import React, { useEffect, useState } from 'react'
import listaEmprendimientos from '../assets/ListaDeEmprendimientos'
import axios from 'axios'

const VerDetalle = (   ) => {
    
  const [emprendimiento, setEmprendimiento] = useState(null)
  const [id, setId] = useState(1)


  useEffect(() => {
    axios.get("../../data.json")
    .then(function(response){
      const empre = response.data.emprendimientos.find((e)=>e.id === id.toString())
      setEmprendimiento(empre)
    })
    .catch(function(error){
      console.log("error de mierda")
    })
  }, [id])
  


  return (
    <>
      <h1> {emprendimiento? emprendimiento.nombre :" CARGANDO..."} </h1>
    </>
  )
}

export default VerDetalle;
