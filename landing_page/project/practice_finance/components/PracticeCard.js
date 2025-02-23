function PracticeCard({ title, icon, description, thumbnail, onClick }) {
    return (
        <div className="practice-card" onClick={onClick} data-name={`practice-card-${title}`}>
            <img src={thumbnail} alt={title} className="practice-thumbnail" />
            <div className="practice-content">
                <h3 className="practice-title">{title}</h3>
                <p className="practice-description">{description}</p>
            </div>
        </div>
    );
}
