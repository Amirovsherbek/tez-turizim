import Carousel from "../Components/Carousel";
import { IoDiamondOutline } from "react-icons/io5";
import './dashboard.css'
function Dashboard(){
    const limit=[
        {
            id:1,
            title:"VIP-отдых и услуги",
            image:<IoDiamondOutline/>
        },
        {
            id:2,
            title:" Пляжи",
            image:<IoDiamondOutline/>
        },
        {
            id:3,
            title:" Экскурсионный отдых и круизы",
            image:<IoDiamondOutline/>
        },
        {
            id:4,
            title:" Горнолыжные курорты~",
            image:<IoDiamondOutline/>
        },
        {
            id:5,
            title:"Острова",
            image:<IoDiamondOutline/>
        },
        {
            id:6,
            title:"Свадебные пакеты",
            image:<IoDiamondOutline/>
        },
        {
            id:7,
            title:" Отдых без детей",
            image:<IoDiamondOutline/>
        },
        {
            id:8,
            title:" СПА и термы",
            image:<IoDiamondOutline/>
        },
        {
            id:9,
            title:" Спортивные проекты",
            image:<IoDiamondOutline/>
        },
        {
            id:10,
            title:"Корпоративный отдых и проекты",
            image:<IoDiamondOutline/>
        }
    ]
    return (
        <div className="dashboard-container text-center">
              <div  className="limit mx-auto" >
                  {
                    limit.map(item=><div key={item.id}>
                       <div  className="limit-card mx-1">
                          <span className="limit-card-image">{item.image}</span>
                          <div className="limit-card-title">{item.title}</div>
                       </div>
                    </div>)
                  }
              </div>
        </div>
    )
}
export default Dashboard;