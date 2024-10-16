import React, { useState } from "react";
import "./sidebar.scss";
import { CiViewList } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa6";

import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  const handleNav = (id) => {
    setActive(id);
    console.log(id);
  };
  return (
    <div className="sidebarSection">
      <Link to="/"
        className={active === 1 ? "addItem active" : "addItem"}
        onClick={() => handleNav(1)}
      >
        <IoMdAddCircleOutline />
        <span>Add Items</span>
      </Link>
      <Link to="/list"
        className={active === 2 ? "listItem active" : "listItem"}
        onClick={() => handleNav(2)}
      >
        <CiViewList />

        <span>List Items</span>
      </Link>
      <Link to ="/orders"
        className={active === 3 ? "orders active" : "orders"}
        onClick={() => handleNav(3)}
      >
        <FaClipboardList />

        <span>Orders</span>
      </Link>
    </div>
  );
};

export default Sidebar;
