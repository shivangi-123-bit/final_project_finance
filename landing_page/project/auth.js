document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically validate credentials
            // For demo, we'll just redirect to the quiz
            localStorage.setItem('userEmail', email);
            window.location.href = 'quiz.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically create an account
            // For demo, we'll just redirect to the quiz
            localStorage.setItem('userEmail', email);
            window.location.href = 'quiz.html';
        });
    }
});