import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout"
import { User } from "@/pages"

// import { Landing, Login, PostOrEdit, Signup, Todo } from '../../pages'
// import { PAGE } from '../../consts/system'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <User /> },
      // { path: '/', element: <Landing /> },
      // { path: PAGE.SIGNIN, element: <Login /> },
      // { path: PAGE.SIGNUP, element: <Signup /> },
      // { path: PAGE.TODO, element: <Todo /> },
      // { path: PAGE.POST, element: <PostOrEdit /> },
    ],
  },
])

export default router
