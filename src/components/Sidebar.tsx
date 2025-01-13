import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const menuItems = [
    { title: "ড্যাশবোর্ড", icon: "📊", link: "/" },
    {
      title: "বদলি ব্যবস্থাপনা",
      icon: "🔄",
      link: "#", // Add link for the main menu item
      subMenu: [
        { title: "নিজের বদলি", icon: "🔄", link: "/transfer-own" },
        { title: "বদলির অনুমোদন", icon: "🔄", link: "/transfer-approval" },
      ],
    },
    { title: "ট্রাসফার প্লানিং টুল", icon: "📍", link: "/" },
    {
      title: "ছুটি ব্যবস্থাপনা",
      icon: "🗓️",
      link: "#", // Add link for the main menu item
      subMenu: [
        { title: "ছুটির অনুরোধ", icon: "🗓️", link: "/leave-application" },
        { title: "ছুটির তালিকা", icon: "🗓️", link: "/leave-list" },
      ],
    },
    { title: "দপ্তর ব্যবস্থাপনা", icon: "🏢", link: "/" },
    { title: "সাপোর্ট", icon: "🛠️", link: "/" },
  ];

  return (
    <div className="sidebar">
      <img src="https://soms.gov.bd/images/SOMS.gif" alt="" />
      {menuItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
