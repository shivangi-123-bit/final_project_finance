function Sidebar() {
    const [activeItem, setActiveItem] = React.useState('Home');

    const menuItems = [
        { icon: "fa-home", label: "Home", link: '/landing_page/project/NewHomePageFinance/index.html' },
        { icon: "fa-book-open", label: "Learn", link: '/landing_page/project/LEARNINGGHUB_FINACE/index.html' },
        { icon: "fa-brain", label: "Practice", link:  '/landing_page/project/practice_finance/index.html' },
        { icon: "fa-bars-progress", label: "Dashboard", link: 'index.html' },
        { icon: "fa-gear", label: "Settings", link: "pages/settings.html" }
    ];

    return (
        <div className="sidebar" data-name="sidebar">
            <div className="sidebar-icon sidebar-logo" data-name="logo">
                <i className="fas fa-rocket"></i>
                <span>FinLearn</span>
            </div>
            <div className="mt-8">
                {menuItems.map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        className={`sidebar-icon ${activeItem === item.label ? 'active' : ''}`}
                        onClick={() => setActiveItem(item.label)}
                        data-name={`menu-item-${item.label.toLowerCase()}`}
                    >
                        <i className={`fas ${item.icon} text-xl`}></i>
                        <span>{item.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
