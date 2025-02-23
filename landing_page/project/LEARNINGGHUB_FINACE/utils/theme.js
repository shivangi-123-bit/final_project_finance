function useTheme() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        try {
            const savedTheme = localStorage.getItem('theme');
            setIsDark(savedTheme === 'dark');
            document.body.className = savedTheme || 'light';
        } catch (error) {
            reportError(error);
        }
    }, []);

    const toggleTheme = () => {
        try {
            const newTheme = !isDark ? 'dark' : 'light';
            setIsDark(!isDark);
            document.body.className = newTheme;
            localStorage.setItem('theme', newTheme);
        } catch (error) {
            reportError(error);
        }
    };

    return { isDark, toggleTheme };
}
