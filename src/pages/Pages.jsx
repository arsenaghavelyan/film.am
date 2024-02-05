import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Search from '../components/Search'
import App from '../App'
import MainLayout from '../components/MainLayout'
import AboutFilm from '../components/AboutFilm'

export default function Pages() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <App />
                },
                {
                    path: "search",
                    element: <Search />,
                    children:[
                        {
                            path:"aboutFilm",
                            element:<AboutFilm />
                        }
                    ]
                },
                {
                    path:"aboutFilm",
                    element:<AboutFilm />
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
