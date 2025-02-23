function Sidebar() {
    const [activeItem, setActiveItem] = React.useState('home');

    const navItems = [
        { id: 'home', icon: 'fa-house', label: 'Home', link: '/landing_page/project/NewHomePageFinance/index.html' },
        { id: 'learn', icon: 'fa-book-open', label: 'Learn', link: 'index.html' },
        { id: 'practice', icon: 'fa-brain', label: 'Practice', link: '/landing_page/project/practice_finance/index.html' },
        { id: 'dashboard', icon: 'fa-chart-simple', label: 'Dashboard', link: '/landing_page/project/dashboard_finace/index.html' },
        { id: 'settings', icon: 'fa-gear', label: 'Settings', link: 'pages/settings.html' }
    ];

    return (
        <div className="sidebar" data-name="sidebar">
            <div className="logo-container" data-name="logo">
                <i className="fas fa-rocket logo-icon"></i>
                <span className="logo-text">FinLearn</span>
            </div>
            <nav>
                {navItems.map(item => (
                    <a 
                        key={item.id} 
                        href={item.link} 
                        className={`nav-item ${activeItem === item.id ? 'active' : ''}`} 
                        onClick={() => setActiveItem(item.id)}
                        data-name={`nav-${item.id}`}
                    >
                        <i className={`fas ${item.icon} text-xl`}></i>
                        <span className="nav-text">{item.label}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
}
