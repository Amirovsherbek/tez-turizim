import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import './LayOut.css'
function LayOut(){
    return (
        <div>
            <header >
                <Header/>
            </header>
            <main>
                 <Outlet/>
            </main>
            <footer>
                    22.02.2023  
            </footer>
        </div>
    )
}
export default LayOut