import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <Link to="/">
          <li>
            <i className="fa-solid fa-house-chimney"></i>
            <span className="fw-bold">Bảng điều khiển</span>
          </li>
        </Link>
        <Link to="/backcare">
          <li>
            <i className="fa-solid fa-child"></i>
            <span>Chăm sóc lưng</span>
          </li>
        </Link>
        <Link to="/eyecare">
          <li>
            <i className="fa-solid fa-eye"></i>
            <span>Chăm sóc mắt</span>
          </li>
        </Link>
        <Link to="/earcare">
          <li>
            <i className="fa-solid fa-ear-listen"></i>
            <span>Chăm sóc tai</span>
          </li>
        </Link>
        <Link to="/howtouse">
          <li>
          <i className="fa-solid fa-circle-question"></i>
            <span>Cách sử dụng</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
