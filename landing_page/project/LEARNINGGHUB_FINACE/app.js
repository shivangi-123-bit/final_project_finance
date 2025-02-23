function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [currentCourseId, setCurrentCourseId] = React.useState(null);

    React.useEffect(() => {
        try {
            const handleHashChange = () => {
                const hash = window.location.hash;
                if (hash.startsWith('#/course/')) {
                    const courseId = parseInt(hash.split('/')[2]);
                    setCurrentPage('course');
                    setCurrentCourseId(courseId);
                } else {
                    setCurrentPage('home');
                    setCurrentCourseId(null);
                }
            };

            window.addEventListener('hashchange', handleHashChange);
            handleHashChange();

            return () => window.removeEventListener('hashchange', handleHashChange);
        } catch (error) {
            reportError(error);
        }
    }, []);

    const renderContent = () => {
        if (currentPage === 'course' && currentCourseId) {
            return <CoursePage courseId={currentCourseId} />;
        }
        return <Home />;
    };

    return (
        <div className="main-container" data-name="app">
            <Sidebar />
            <div className="content-area">
                <Topbar />
                {renderContent()}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
