import { Outlet } from "react-router-dom";
//todo: add authentication check and redirect to login if not authenticated
export const PrivateLayout = () =>{
    return (
        <div style={{height: "100vh"}}>
            <Outlet />
        </div>
    );
}