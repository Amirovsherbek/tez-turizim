import Carousel from "../Components/Carousel";
import { IoDiamondOutline,IoFootballOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TbShip,TbMountain,TbBuildingCastle,TbBeach } from "react-icons/tb";
import { BsArrowThroughHeart } from "react-icons/bs";
import { GiIsland } from "react-icons/gi";
import './dashboard.css'
function Dashboard() {
    const limit = [
        {
            id: 1,
            title: "VIP-отдых и услуги",
            image: <IoDiamondOutline />
        },
        {
            id: 2,
            title: " Пляжи",
            image: <TbBeach />
        },
        {
            id: 3,
            title: " Экскурсионный отдых и круизы",
            image: <TbShip />
        },
        {
            id: 4,
            title: " Отдых без детей",
            image: <TbBuildingCastle />
        },
        {
            id: 5,
            title: " Горнолыжные курорты~",
            image: <TbMountain />
        },
        {
            id: 6,
            title: "Острова",
            image: <GiIsland />
        },
        {
            id: 7,
            title: "Свадебные пакеты",
            image: <BsArrowThroughHeart />
        },
        {
            id: 8,
            title: " Отдых без деть",
            image: <TbBuildingCastle />
        },
        {
            id: 9,
            title: " СПА и термы",
            image: <IoDiamondOutline />
        },
        {
            id: 10,
            title: " Спортивные проекты",
            image: <IoFootballOutline />
        },
        {
            id: 11,
            title: "Корпоративный отдых и проекты",
            image: <IoDiamondOutline />
        }
    ]
    return (
        <div className="dashboard-container text-center">
            <div className={'dashboard-container-box-one'}>
                <Carousel />
                <div className="limit mx-auto mt-5" >
                    {
                        limit.map(item => <div key={item.id}>
                            <NavLink className="limit-card mx-1">
                                <span className="limit-card-image text-center">{item.image}</span>
                                <div className="limit-card-title">{item.title}</div>
                            </NavLink>
                        </div>)
                    }
                </div>
            </div>
            <div className="dashboard-container-box-two">
              
            </div>
        </div>
    )
}
export default Dashboard;