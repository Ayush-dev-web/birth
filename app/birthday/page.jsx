import React from 'react'
import Birthcompo from './Birthcompo'

const page = ({useSearchParams}) => {
  const searchParams = useSearchParams;
  const name=searchParams.get('name')
  return (
    <Birthcompo  name={name}/>
  )
}

export default page