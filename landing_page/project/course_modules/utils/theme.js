function useTheme() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    try {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      reportError(error);
    }
  };

  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (error) {
      reportError(error);
    }
  }, []);

  return { theme, toggleTheme };
}
