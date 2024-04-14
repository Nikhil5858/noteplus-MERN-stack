import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/noteContext'

const About = () => {
  const data=useContext(noteContext)
  return (
    <div>This data about is {data.name} and his class was {data.class}</div>

  )
}

export default About