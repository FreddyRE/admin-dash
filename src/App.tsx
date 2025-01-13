import './App.css'
import { NavigationBar } from './components/NavigationBar'
import { Outlet } from './components/Outlet'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <div className='app'>
      <SideBar/>
      <div className='app__outlet'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
