import React from "react";
import { NavLink } from "react-router-dom";
import { sideBarLinks } from "../../data/dummy";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="generate">GENERATE INVOICE</span>

      <div className="sidebar_links">
        {sideBarLinks.map((item) => (
          <div key={item.title} className="links_item">
            <p className="menu_title">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.link}`}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? "active_link" : "side_link"
                }
              >
                <img src={link.icon} alt={link.name} />
                <span className="">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
