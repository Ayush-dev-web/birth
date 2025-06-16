import React from 'react'
import Birthcompo from './Birthcompo.jsx'

const page =async ({searchParams}) => {
  const prm= await searchParams.name
 
  return (
   <> <Birthcompo  name={prm}/> </>
 
  )
}

export default page