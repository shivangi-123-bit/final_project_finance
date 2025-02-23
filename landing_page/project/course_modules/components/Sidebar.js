function Sidebar() {
  const [active, setActive] = React.useState('learn');

  const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home', link: '/landing_page/project/NewHomePageFinance/index.html' },
    { id: 'learn', icon: 'fa-book-open', label: 'Learn', link: '/landing_page/project/LEARNINGGHUB_FINACE/index.html' },
    { id: 'practice', icon: 'fa-brain', label: 'Practice', link: '/landing_page/project/practice_finance/index.html' },
    { id: 'dashboard', icon: 'fa-chart-simple', label: 'Dashboard', link: '/landing_page/project/dashboard_finace/index.html' },
    { id: 'settings', icon: 'fa-gear', label: 'Settings', link: 'settings.html' }
  ];

  return (
    <div className="sidebar" data-name="sidebar">
      <div className="logo-section">
        <i className="fas fa-rocket text-2xl text-indigo-600"></i>
        <h1 className="text-xl font-bold">FinLearn</h1>
      </div>
      
      <nav>
        {navItems.map(item => (
          <a
            key={item.id}
            href={item.link} // Added link to respective HTML file
            className={`nav-item ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
            data-name={`nav-item-${item.id}`}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
