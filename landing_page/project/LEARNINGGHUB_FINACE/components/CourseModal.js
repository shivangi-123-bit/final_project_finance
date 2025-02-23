function CourseModal({ course, onClose, onEnroll, isEnrolled, onStartLearning }) {
    return (
        <div className="modal-overlay" data-name="course-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="course-details space-y-6">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded"
                    />
                    <p className="text-gray-600">{course.description}</p>
                    <div className="info-grid grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <i className="fas fa-clock mb-2"></i>
                            <p>{course.duration}</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-star text-yellow-400 mb-2"></i>
                            <p>{course.rating}/5.0</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-users mb-2"></i>
                            <p>{course.enrolled}+ enrolled</p>
                        </div>
                    </div>
                    <div className="syllabus">
                        <h3 className="text-lg font-bold mb-3">Syllabus</h3>
                        {course.chapters.map((chapter, idx) => (
                            <div key={idx} className="mb-4">
                                <h4 className="font-bold">{chapter.title}</h4>
                                <ul className="list-disc ml-6">
                                    {chapter.content.map((item, i) => (
                                        <li key={i} className="text-gray-600">
                                            {item.title} ({item.type})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="testimonials">
                        <h3 className="text-lg font-bold mb-3">What Learners Say</h3>
                        {course.testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-gray-100 p-4 rounded mb-2">
                                <p className="italic">"{testimonial.text}"</p>
                                <p className="text-right text-gray-600">- {testimonial.user}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={isEnrolled ? onStartLearning : onEnroll}
                        className={`w-full py-3 rounded ${
                            isEnrolled 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-blue-500 hover:bg-blue-600'
                        } text-white font-bold`}
                    >
                        {isEnrolled ? 'Start Learning' : 'Enroll Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}
