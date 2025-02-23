function CoursePage({ courseId }) {
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-page" data-name="course-page">
            <CourseContent course={course} />
        </div>
    );
}
