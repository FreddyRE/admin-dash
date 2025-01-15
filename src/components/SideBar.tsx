import { Logo } from "./Logo"
import "./SideBar.css"
import usersIcon from "../assets/icons/users.png"

export const SideBar = () => {
    return <div className="sidebar">
        <Logo/>
        <div>
            <img src={usersIcon} alt="" />
        </div>
    </div>
}