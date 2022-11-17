import React from "react";
import { sideBarLinks } from "../../data/dummy";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="generate">GENERATE INVOICE</span>

      <div className="sidebar_links">
        {sideBarLinks.map((item) => (
          <div key={item.title} className="links_item">
            <p className="">{item.title}</p>
            {item.links.map((link) => (
              <a href={link.link} key={link.name} className="side_link">
                <img src={link.icon} alt={link.name} />
                <span className="">{link.name}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
