function ModuleList() {
  const { modules, progress, toggleCompletion, calculateProgress } = useModules();
  const [currentProgress, setCurrentProgress] = React.useState(calculateProgress());

  const handleProgressUpdate = () => {
    try {
      const newProgress = calculateProgress();
      setCurrentProgress(newProgress);
    } catch (error) {
      reportError(error);
    }
  };

  React.useEffect(() => {
    handleProgressUpdate();
  }, [progress]);

  return (
    <div className="module-list" data-name="module-list">
      {modules.map(module => (
        <Module
          key={module.id}
          module={module}
          progress={progress}
          onToggleCompletion={toggleCompletion}
          onProgressUpdate={handleProgressUpdate}
        />
      ))}
    </div>
  );
}
