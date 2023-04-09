import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Search from "../Search/Search"
import MyComponent from "../component/Footer"
import './LayOut.css'
function LayOut(){
    return (
        <div>
            <header >
                <Header/>
                <Search/>
            </header>
            <main>
                 <Outlet/>
            </main>
            <footer>
                    22.02.2023  
                    <MyComponent/>
            </footer>
        </div>
    )
}
export default LayOut