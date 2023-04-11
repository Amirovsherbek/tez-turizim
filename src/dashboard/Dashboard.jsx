import Carousels from "../Components/Carousel";
import { IoDiamondOutline, IoFootballOutline, IoCalendarNumberOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TbShip, TbMountain, TbBuildingCastle, TbBeach } from "react-icons/tb";
import { BsArrowThroughHeart } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";
import { GiIsland, GiPresent } from "react-icons/gi";
import './dashboard.css'
import { cheapRegion } from "../Data/Region";
import { Akisiya, Hotel, Spes, Conustalting } from "../Data/Data";
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
    const sales = [
        {
            id: 1,
            title: 'Раннее  бронирование',
            type: 'Экономьте',
            sale_price: "до 65%",
            icon: <IoCalendarNumberOutline />
        },
        {
            id: 2,
            title: 'Предложение  дня',
            type: 'Воспользуйтесь',
            sale_price: "сегодня",
            icon: <RxMoon />
        },
        {
            id: 3,
            title: 'Подарки TEZ TOUR',
            type: 'Подарите',
            sale_price: "Отдых",
            icon: <GiPresent />
        },
    ]
    return (
        <div className="dashboard-container text-center">
            <div className={'dashboard-container-box-one'}>
                <div className="dashboard-container-box-one-carousel">
                    <Carousels />
                </div>
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
                        sales.map(item => <div className="dashboard-container-box-three-box-card mx-1" key={item.id}>
                            <div className="card_present_title">
                                <div className="card_present_title1">  {item.title}</div>
                                <div className="card_present_title2 px-2">{item.type}<span>
                                    {item.sale_price}</span></div>
                            </div>
                            <div className="card_present_image">
                                <span> {item.icon}</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className={"dashboard-container-box-four"}>
                <div className="dashboard-container-box-two-title my-3 mx-2">
                    Акции
                    <span></span>
                </div>
                <div className="bonus_cards">
                    {
                        Akisiya.map(item => <div key={item.id} className="bonus_box_card mx-2">
                            <div className="bonus_box_image ">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="bonus_box_title">
                                {item.title}
                            </div>

                        </div>)
                    }
                </div>
            </div>
            <div className="dashboard-container-box-five ">
                <div className="dashboard-container-box-two-title my-3 ">
                    Хиты продаж
                    <span></span>
                </div>
                <div className="dashboard-container-box-cheap-region pb-5">
                    {
                        Hotel.map(item => <div className="cheap-card mx-2 my-2 " >
                            <div key={item.id} className="cheap-card-2 bg-dark" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="cheap-card-total-title-box">
                                    <div className="aksiya-card-title mt-1 mx-2">{item.title}</div>
                                    <div className="aksiya-card-title2 mt-1 mx-2">{item.title2}</div>
                                    <div className="aksiya-card-price mt-1 mx-2">{item.price}</div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
            <div className={"dashboard-container-box-four"}>
                <div className="dashboard-container-box-two-title my-3 mx-2">
                    Специальные предложения
                    <span></span>
                </div>
                <div className="bonus_cards">
                    {
                        Spes.map(item => <div key={item.id} className="bonus_box_card mx-2">
                            <div className="spes_box_image ">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="spes_box_title">
                                <div>{item.title}</div>
                                <div>{item.title2}</div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
            <div className={"dashboard-container-box-six"}>
            {
                    Conustalting.map(item => 
                        <div key={item.id} className="cons_box_card mx-1 my-1">
                            <div className="cons_box_card_image"><img src={item.image} alt={item.title} /></div>
                            <div className="cons_box_card_them">
                                <div>{item.title}</div>
                                <div>{item.page}</div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="dashboard-container-box-seven">
                <div>Лучшие предложения!</div>
                <div>УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ ТОЛЬКО ДЛЯ ИЗБРАННЫХ ПУТЕШЕСТВЕННИКОВ. СТАНЬТЕ ОДНИМ ИЗ НИХ!</div>
                <span></span>
                <div><input type="text"/></div>
            </div>
        </div>
    )
}
export default Dashboard;