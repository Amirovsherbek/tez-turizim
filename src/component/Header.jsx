import { NavLink } from "react-router-dom";
import './header.css'
import { IoLocationOutline } from "react-icons/io5";

function Header() {
    function Call() {
        window.location.href = 'tel:8 800 700 78 78';
    }
    return (
        <div className="header-container ">
            <div className="header-logotip mb-2">
                <NavLink to={'/'} className={'header-logotip-image'}><img src="https://r.tez-tour.com/portal/images/main/logo-white.png"
                    alt="tez-tez-tour-logotip" /></NavLink>
            </div>
            <div className="header-navbar ">
                <ul className="header-navbar_ul">
                    <li className="dc-t header-navbar_li">Страны
                        <div className="dropdown-region">

                        </div>
                    </li>
                    <li className="dc-t header-navbar_li">Туристам
                        <div className="dropdown_menu">
                            <div>
                                <p className="dropdown_li px-2">Bilet olish</p>
                                <p className="dropdown_li px-2">Bilet agentligi</p>
                            </div>
                        </div>
                    </li>
                    <li className="dc-t header-navbar_li">Агентствам
                        <div className="dropdown_menu">
                            <div>
                                <p className="dropdown_li px-2">Bilet olish</p>
                                <p className="dropdown_li px-2">Bilet agentligi</p>
                            </div>
                        </div>
                    </li>
                    <li className="dc-t header-navbar_li">где купить
                        <div className="dropdown_menu">
                            <div>
                                <p className="dropdown_li px-2">Bilet olish</p>
                                <p className="dropdown_li px-2">Bilet agentligi</p>
                            </div>
                        </div>
                    </li>
                    <li className="dc-t aloqa px-2 "><span className="mx-1"><IoLocationOutline /></span>
                        <NavLink className={'header-navbar-link'}>Москва</NavLink></li>
                    <li className="dc-t aloqa px-2"><span className="mx-1"><IoLocationOutline /></span>
                        <NavLink className={'header-navbar-link'}>мой кабинет</NavLink></li>
                    <li className="dc-t aloqa px-2"><span className="mx-1"><IoLocationOutline /></span>
                        <span onClick={Call}>8 800 700 78 78</span></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;