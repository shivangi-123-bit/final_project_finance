function Home() {
    const [selectedCourse, setSelectedCourse] = React.useState(null);
    const [enrolledCourses, setEnrolledCourses] = React.useState([]);

    const handleEnroll = () => {
        try {
            if (selectedCourse) {
                setEnrolledCourses(prev => [...prev, selectedCourse.id]);
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleStartLearning = () => {
        try {
            if (selectedCourse) {
                window.location.href = `#/course/${selectedCourse.id}`;
                setSelectedCourse(null);
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="home-page" data-name="home">
            <h1 className="text-2xl font-bold mb-6">Popular Courses</h1>
            <div className="courses-grid">
                {courses.map(course => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onClick={setSelectedCourse}
                    />
                ))}
            </div>

            {selectedCourse && (
                <CourseModal
                    course={selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                    onEnroll={handleEnroll}
                    isEnrolled={enrolledCourses.includes(selectedCourse.id)}
                    onStartLearning={handleStartLearning}
                />
            )}
        </div>
    );
}
