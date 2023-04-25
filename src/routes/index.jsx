import { Children, lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Registration = lazy(() => import("../pages/auth/registration"));
const Login = lazy(() => import("../pages/auth/login"));
const News = lazy(()=>import("../pages/news"))
const New = lazy(()=>import("../pages/new"))


const authRoutes = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/registration",
    element: <Registration />,
  },
];

const privateRoutes = [
    {
      index:true,
      element:<Home/>,
    },
    {
      path:'news',
      element:<News/>,
      children:[
        {
          path:'news/:id',
          element:<New/>
        }
      ]
    }
]

export {authRoutes, privateRoutes}