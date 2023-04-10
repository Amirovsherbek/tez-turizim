import Carousel from "../Components/Carousel";
import { IoDiamondOutline, IoFootballOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TbShip, TbMountain, TbBuildingCastle, TbBeach } from "react-icons/tb";
import { BsArrowThroughHeart } from "react-icons/bs";
import { GiIsland } from "react-icons/gi";
import './dashboard.css'
import { cheapRegion } from "../Data/Region";
import { sales } from "../Data/Data";
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
                <div className="dashboard-container-box-two-title my-3 ">
                    Лучшие предложения для отдыха
                    <span></span>
                </div>
                <div className="dashboard-container-box-cheap-region">
                    {
                        cheapRegion.map(item => <div className="cheap-card mx-2 my-2 " >
                            <div key={item.id} className="cheap-card-2 bg-dark" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="cheap-card-total-title-box">
                                    <div className="cheap-card-title mt-1 mx-2">{item.title}</div>
                                    <div className="cheap-card-price mt-1 mx-2">{item.price}</div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
                <div className="see_more my-5">
                    <div>Показать больше</div>
                </div>
            </div>
            <div className="dashboard-container-box-three">
                <div className="dashboard-container-box-three-box">
                    {
                        sales.map(item => <div className="dashboard-container-box-three-box-card" key={item.id}>
                              <div>{item.title}</div>
                              <div>{item.type}</div>
                              <div>{item.sale_price}</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default Dashboard;