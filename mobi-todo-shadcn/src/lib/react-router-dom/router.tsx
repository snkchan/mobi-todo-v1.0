import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout"
// import { Landing, Login, PostOrEdit, Signup, Todo } from '../../pages'
// import { PAGE } from '../../consts/system'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <h1>여기가 로그인 페이지가 될것이다.</h1> },
      // { path: '/', element: <Landing /> },
      // { path: PAGE.SIGNIN, element: <Login /> },
      // { path: PAGE.SIGNUP, element: <Signup /> },
      // { path: PAGE.TODO, element: <Todo /> },
      // { path: PAGE.POST, element: <PostOrEdit /> },
    ],
  },
])

export default router
