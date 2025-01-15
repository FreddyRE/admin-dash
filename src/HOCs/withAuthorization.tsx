import { ComponentType, FC } from "react";
import { hasPermission, isAuthenticated } from "../services/authService";
import { Navigate } from "react-router-dom";
import { User } from "../Types/User";

export const withAuthorization = <P extends object> (
    WrappedComponent:ComponentType<P>,
    requiredPermission:string
) : FC<P> => {
    const WithAuthorization:FC<P> =  (props) => {

        const user: User|null =  isAuthenticated()
        const canView: boolean = user? hasPermission(user, requiredPermission) : false
        
        if(!user) {
            return<Navigate to="/login" replace  />
        }

        if(!canView) {
            return <div>You do not have permission to view this page</div>
        }

        return <WrappedComponent {...props}/>
    }

    return WithAuthorization
}