function App() {
  const { calculateProgress } = useModules();
  const progress = calculateProgress();

  return (
    <div className="layout" data-name="app-layout">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="main-content">
          <h1 className="text-3xl font-bold mb-4">📖 Course: Basics of Financial Knowledge</h1>
          <CourseProgress progress={progress} />
          <ModuleList />
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
