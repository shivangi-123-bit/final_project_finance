function CourseProgress({ progress }) {
  return (
    <div className="course-progress" data-name="course-progress">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium">Course Progress</span>
        <span className="text-sm font-semibold">{progress}% Complete</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        {progress < 100 ? "Keep going! You're doing great!" : "Congratulations! You've completed the course!"}
      </div>
    </div>
  );
}
