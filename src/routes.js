// import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import Portfolio from './Components/Portfolio'
import Register from './Components/Register'
import UserDetails from './Components/UserDetails'

export const appRoutes=[
    // {
    //     path:'/',
    //     element:<LandingPage/>
    // },
   
    {
        path:'/login',
        element:<Login/>
    },
    
    {
        path:'/Portfolio',
        element:<Portfolio/>
    },
    {
        path:'/UserDetails',
        element:<UserDetails/>
    },
    {
        path:'/Register',
        element:<Register/>
    }
]
