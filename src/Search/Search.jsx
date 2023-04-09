import { NavLink } from "react-router-dom";
import "./Search.css";
function Search() {
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
        <select className="form-control">
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
        </select>
        <select className="form-control">
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
        </select>
        <input className="form-control" type="date" />
        <select className="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <select className="form-control">
          <option>jhfjds</option>
        </select>
        <button className="btn mx-auto">Найти</button>
      </div>
      <div style={{width:'80%'}}>
        <NavLink className={'form-link'}>Подбор для частных лиц</NavLink>
      </div>
    </div>
  );
}
export default Search;
