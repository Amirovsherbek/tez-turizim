import { NavLink } from "react-router-dom";
import "./Search.css";
import { Region, city } from "../Data/Region";
import { useState } from "react";
function Search() {
  const [isShowBox,setIsShowBox]=useState(false)
  const [SearchUser, setSearch] = useState({
    city: "",
    state: "",
    date: '',
    deadlineTime: "",
    count: 1,
  })
  function ChangeCount(item) {
    if (item === "prev" && SearchUser.count!== 1) {
      setSearch({ ...SearchUser, count: SearchUser.count - 1 })
    }
    if (item === "next") {
      setSearch({ ...SearchUser, count: SearchUser.count + 1 })
    }
  }
  console.log(SearchUser)
  return (
    <div className="search ">
      <div className="search-header ">

        <NavLink className={"search-header-link"}>
          Подбор тура<span></span>
        </NavLink>
        <NavLink className={"search-header-link"}>
          Отели<span></span>
        </NavLink>
        <NavLink className={"search-header-link"}>
          Авиа<span></span>
        </NavLink>
        <NavLink className={"search-header-link"}>
          Экскурсии<span></span>
        </NavLink>
        <NavLink className={"search-header-link"}>
          Распродажи<span></span>
        </NavLink>
      </div>
      <div className="search-box mt-1 ">
        <select className="form-control"
          onChange={(e) => { setSearch({ ...SearchUser, city: e.target.value }) }}>
          {
            Region.map(item =>
              <option key={item.Id} value={item.city}>{item.city}</option>
            )
          }
        </select>
        <select className="form-control"
          onChange={(e) => { setSearch({ ...SearchUser, state: e.target.value }) }}>
          {
            city.map(item =>
              <option value={item.city} key={item.id}>{item.city}</option>
            )
          }
        </select>
        <input className="form-control" type="date"
          onChange={(e) => { setSearch({ ...SearchUser, date: e.target.value }) }} />
        <select className="form-control"
          onChange={(e) => { setSearch({ ...SearchUser, deadlineTime: e.target.value }) }}>
          {
            city.map(item =>
              <option value={item.id} key={item.id}>{item.id}</option>
            )
          }
        </select>
        <span className=" select" toglle={isShowBox}
        onClick={()=>setIsShowBox(prev=>!prev)}>
              <span>Взрослые: {SearchUser.count}</span>
          {
            isShowBox ? <div className="select_option">
              <div className="w-100 text-right">x</div>
            <span style={{width:'40%'}}>Взрослые</span>
            <div style={{width:'60%',display:'flex',justifyContent:"center",alignItems:"center"}} >
            <button className="select_btn mx-2 bg-light"  onClick={() => ChangeCount('prev')}>-</button>
            <span>{SearchUser.count}</span>
            <button className="select_btn mx-2 bg-light" onClick={() => ChangeCount('next')}>+</button>
            </div>
          </div>:""
          }
        </span>
        <button className="btn search-box_button mx-auto">Найти</button>
      </div>
      <div style={{ width: '80%' }}>
        <NavLink className={'form-link'}>Подбор для частных лиц</NavLink>
      </div>
    </div>
  );
}
export default Search;
