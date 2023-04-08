import { NavLink } from "react-router-dom";
import './header.css'
import { IoLocationOutline } from "react-icons/io5";

function Header(){
    return (
        <div className="header-container ">
             <div className="header-logotip">
                 <img src="https://r.tez-tour.com/portal/images/main/logo-white.png" alt="tez-tez-tour-logotip"/>
             </div>
             <div className="header-navbar ">
                <ul>
                    <li>Страны</li>
                    <li>Туристам</li>
                    <li>Агентствам</li>
                    <li>где купить</li>
                    <li><span><IoLocationOutline/></span>Москва</li>
                    <li>мой кабинет</li> 
                    <li>8 800 700 78 78</li> 
                </ul>
             </div>
        </div>
    )
}
export default Header;