function initTheme() {
    const [isDark, setIsDark] = React.useState(false);
    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className="header-icon" onClick={toggleTheme} data-name="theme-toggle">
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
        </div>
    );
}
