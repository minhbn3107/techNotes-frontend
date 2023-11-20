import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthor from "../../hooks/useAuthor";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const { roles } = useAuthor();

    const content = roles?.some((role) => allowedRoles.includes(role)) ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );

    return content;
};

export default RequireAuth;
