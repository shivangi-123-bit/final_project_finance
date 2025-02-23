function Module({ module, progress, onToggleCompletion, onProgressUpdate }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCheckboxClick = (moduleId, itemIndex) => {
    try {
      onToggleCompletion(moduleId, itemIndex);
      onProgressUpdate();
    } catch (error) {
      reportError(error);
    }
  };

  return (
    <div className="module" data-name={`module-${module.id}`}>
      <div
        className="module-header"
        onClick={() => setIsExpanded(!isExpanded)}
        data-name={`module-header-${module.id}`}
      >
        <h2 className="text-lg font-semibold">{module.title}</h2>
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
      </div>
      
      {isExpanded && (
        <div className="module-content">
          {module.items.map((item, index) => (
            <div
              key={index}
              className="module-item"
              data-name={`module-item-${module.id}-${index}`}
            >
              <div
                className={`checkbox ${progress[`${module.id}-${index}`] ? 'checked' : ''}`}
                onClick={() => handleCheckboxClick(module.id, index)}
                data-name={`checkbox-${module.id}-${index}`}
              ></div>
              
              {item.type === 'video' && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                  data-name={`video-link-${module.id}-${index}`}
                >
                  <i className="fas fa-play-circle mr-2"></i>
                  {item.title}
                </a>
              )}
              
              {item.type === 'article' && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                  data-name={`article-link-${module.id}-${index}`}
                >
                  <i className="fas fa-book-open mr-2"></i>
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
