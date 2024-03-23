import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Error404 } from './404.tsx'
import { Index } from './index.tsx'
import { Projects } from './projects.tsx'
import { Languages } from './languages.tsx'

 const router = createHashRouter([{
  path: "/",
  element: <App content={Index()}/>,
  errorElement: <App content={Error404()}/> 
},{
  path: "projects",
  element: <App content={Projects()}/>
},{
  path: "languages",
  element: <App content={Languages()}/>
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
) 

