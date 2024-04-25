
import React from 'react'
import Header from '../ui/header/Header'
import { Outlet } from 'react-router-dom'

function MainRoute():JSX.Element {
  return (
    <>
     <Header />
     <Outlet />
    </>
  )
}

export default MainRoute