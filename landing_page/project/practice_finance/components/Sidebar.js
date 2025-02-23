function Sidebar({ activeItem, setActiveItem }) {
    const navItems = [
        { id: 'home', icon: 'fa-house', label: 'Home', link: '/landing_page/project/NewHomePageFinance/index.html' },
        { id: 'learn', icon: 'fa-book-open', label: 'Learn', link: '/landing_page/project/LEARNINGGHUB_FINACE/index.html' },
        { id: 'practice', icon: 'fa-brain', label: 'Practice', link: 'index.html' },
        { id: 'dashboard', icon: 'fa-chart-simple', label: 'Dashboard', link: '/landing_page/project/dashboard_finace/index.html' },
        { id: 'settings', icon: 'fa-gear', label: 'Settings', link: 'settings.html' }
    ];

    return (
        <div className="sidebar" data-name="sidebar">
            <div className="sidebar-logo" data-name="sidebar-logo">
                <i className="fas fa-rocket"></i>
                <div className="text-sm">FinLearn</div>
            </div>
            {navItems.map(item => (
                <a
                    key={item.id}
                    href={item.link} // Added link to navigate to different pages
                    className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                    onClick={() => setActiveItem(item.id)}
                    data-name={`nav-item-${item.id}`}
                >
                    <i className={`fas ${item.icon}`}></i>
                    <span>{item.label}</span>
                </a>
            ))}
        </div>
    );
}
