import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { PageContent } from './PageContent'

export const AppLayout = () => {
  return (
    <>
        <Navbar />
        <PageContent />
    </>
  )
}
