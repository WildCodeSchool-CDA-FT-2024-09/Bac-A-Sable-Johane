import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import connexion from "./services/connexion.ts"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import HomePage from './pages/homepage.tsx'
import Detail from './pages/Details.tsx'
import { ApolloProvider } from "@apollo/client";
import client from "./services/connexion.ts";

const router = createBrowserRouter([
  {
    element: <App/>,
    children : [
      {path: "/",
        element: <HomePage/>,
        // loader: () => fetch(`http://localhost:3001/api/langs`)
      },
      {
        path: "/detail/:id",
        element: <Detail/>,
        // loader: async ({params})=> {
        //   const repo = await connexion.get(`/api/repos/${params.id}`);
        //   console.log("Loader", repo)
        //   return repo.data

        // }
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}> 
    <RouterProvider router={router}/>
    </ApolloProvider>
  </StrictMode>,
)
