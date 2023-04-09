import { NavLink } from "react-router-dom";
import './header.css'
import { IoLocationOutline } from "react-icons/io5";

function Header(){
    function Call(){
        window.location.href = 'tel:8 800 700 78 78';
    }
    return (
        <div className="header-container ">
             <div className="header-logotip mb-2">
                 <NavLink to={'/'} className={'header-logotip-image'}><img src="https://r.tez-tour.com/portal/images/main/logo-white.png" 
                 alt="tez-tez-tour-logotip"/></NavLink>
             </div>
             <div className="header-navbar ">
                <ul>
                    <li className="dc-t">Страны
                       <div className="dropdown-region">
                        
                       </div>
                    </li>
                    <li className="dc-t">Туристам</li>
                    <li className="dc-t">Агентствам</li>
                    <li className="dc-t bilet-rel">где купить
                    <div className="dropdown_menu">
                        <ul>
                            <li className="dropdown_li">Bilet olish</li>
                            <li className="dropdown_li">Bilet agentligi</li>
                            <li className="dropdown_li">Bilet agentligi</li>
                            <li className="dropdown_li">Bilet agentligi</li>
                            <li className="dropdown_li">Bilet agentligi</li>
                        </ul>
                    </div>
                    </li>
                    <li className="dc-t aloqa px-2 "><span className="mx-1"><IoLocationOutline/></span>
                      <NavLink className={'header-navbar-link'}>Москва</NavLink></li>
                    <li className="dc-t aloqa px-2"><span className="mx-1"><IoLocationOutline/></span>
                     <NavLink className={'header-navbar-link'}>мой кабинет</NavLink></li> 
                    <li className="dc-t aloqa px-2"><span className="mx-1"><IoLocationOutline/></span>
                     <span onClick={Call}>8 800 700 78 78</span></li> 
                </ul>
             </div>
        </div>
    )
}
export default Header;