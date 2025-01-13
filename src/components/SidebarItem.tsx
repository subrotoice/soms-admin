import { useState } from "react";

interface SidebarItemProps {
  item: {
    title: string;
    icon: string;
    link: string;
    subMenu?: { title: string; icon: string; link: string }[]; // Optional array of submenu items
  };
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false); // State with type boolean

  return (
    <div className="sidebar-item">
      <div
        className="sidebar__first-level"
        onClick={() => item.subMenu && setIsOpen(!isOpen)}
      >
        <a href={item.link} className="sidebar__image-title">
          <span className="sidebar__icon">{item.icon}</span>
          <span className="sidebar__title">{item.title}</span>
        </a>
        {item.subMenu && (
          <span className="sidebar__collapsible-icon">
            {isOpen ? "-" : "+"}
          </span>
        )}
      </div>
      {isOpen && item.subMenu && (
        <div className="sidebar-submenu">
          {item.subMenu.map((subItem, index) => (
            <div key={index} className="sidebar-subitem">
              <a href={subItem.link}>{subItem.title}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
