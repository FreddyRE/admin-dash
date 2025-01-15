import { User } from "../Types/User";

let isLoggedIn = false;

const mockUser: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    roles: ["admin", "editor"],
    permissions: ["VIEW_USERS", "VIEW_POSTS", "EDIT_POSTS"],
    avatarUrl: "/avatar.jpg",
  };

export const isAuthenticated = () => {
    return getCurrentUser()
}

export const hasPermission = (user:User, requiredPermission:string) =>{
    if(!user || !user.permissions){
        return false
    }

    return user.permissions.includes(requiredPermission)
}


export const getCurrentUser:()=>User|null = () => {
    return isLoggedIn ? mockUser : null
}