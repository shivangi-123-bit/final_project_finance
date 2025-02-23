function CourseCard({ course, onClick }) {
    return (
        <div 
            className="course-card"
            onClick={() => onClick(course)}
            data-name={`course-${course.id}`}
        >
            <img
                src={course.image}
                alt={course.title}
                className="course-image"
            />
            <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <div className="flex items-center">
                    <span className="text-yellow-400">⭐ {course.rating}</span>
                    <span className="ml-2 text-sm">({course.duration})</span>
                </div>
            </div>
        </div>
    );
}
