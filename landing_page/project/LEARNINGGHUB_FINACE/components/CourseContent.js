function CourseContent({ course }) {
    const [expandedChapter, setExpandedChapter] = React.useState(null);
    const [progress, setProgress] = React.useState({});

    const toggleChapter = (index) => {
        setExpandedChapter(expandedChapter === index ? null : index);
    };

    const handleComplete = (chapterIdx, contentIdx) => {
        try {
            const key = `${chapterIdx}-${contentIdx}`;
            setProgress(prev => ({
                ...prev,
                [key]: !prev[key]
            }));
        } catch (error) {
            reportError(error);
        }
    };

    const getIcon = (type) => {
        switch(type) {
            case 'article': return 'fa-file-alt';
            case 'video': return 'fa-video';
            case 'assignment': return 'fa-tasks';
            default: return 'fa-file';
        }
    };

    return (
        <div className="course-content p-6" data-name="course-content">
            <h2 className="text-2xl font-bold mb-6">{course.title}</h2>
            {course.chapters.map((chapter, chapterIdx) => (
                <div key={chapterIdx} className="mb-4">
                    <div
                        className="flex items-center justify-between p-4 bg-gray-100 rounded cursor-pointer"
                        onClick={() => toggleChapter(chapterIdx)}
                    >
                        <h3 className="font-bold">{chapter.title}</h3>
                        <i className={`fas fa-chevron-${expandedChapter === chapterIdx ? 'up' : 'down'}`}></i>
                    </div>
                    {expandedChapter === chapterIdx && (
                        <div className="p-4 border rounded mt-2">
                            {chapter.content.map((item, contentIdx) => (
                                <div key={contentIdx} className="flex items-center mb-3">
                                    <input
                                        type="checkbox"
                                        checked={progress[`${chapterIdx}-${contentIdx}`] || false}
                                        onChange={() => handleComplete(chapterIdx, contentIdx)}
                                        className="mr-3"
                                    />
                                    <i className={`fas ${getIcon(item.type)} mr-3`}></i>
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
