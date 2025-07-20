import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <main>
        {/* header */}
        <Outlet />
    </main>
    // footer
  )
}

export default AppLayout