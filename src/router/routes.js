import {createBrowserRouter} from 'react-router-dom'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Profile from '../pages/profile/Profile';
import Home from '../pages/home/Home';

const router = createBrowserRouter ([
    {
    path : "/",
    element: <Login/>,
    },
    {
        path: "/register",
        element : <Register/>,
    },
    {
        path:"/profile",
        element: <Profile/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },

])
export default router;