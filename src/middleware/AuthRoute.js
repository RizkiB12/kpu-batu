import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


export const GuestRoute = () => {
    const {authUser} = useSelector(state => state.authUser)
    if (authUser===null){
        return <Outlet/>
    } 
    if (authUser!==null){
        if(authUser.role === 'admin'){
            return <Navigate to="/dashboard"/>
        }
        return <Navigate to="/"/>
    }

}

export const AdminRoute = () => {
    const {authUser} = useSelector(state => state.authUser)
    console.log({authUser});
    if (authUser===null){
        return <Navigate to="/login" />
    } 
    if (authUser!==null){
        return <Outlet/>
    }
}