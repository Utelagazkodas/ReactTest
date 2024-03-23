import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Error404 } from './404.tsx'

const router = createHashRouter([{
  path: "/",
  element: <App/>,
  errorElement: <Error404/> 
},{
  path: "projects",
  element: <div>projects</div>
},{
  path: "languages",
  element: <div>languages</div>
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
