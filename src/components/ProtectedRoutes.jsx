import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const userName = useSelector(state => state.UserName)

}; 
export default ProtectedRoutes;