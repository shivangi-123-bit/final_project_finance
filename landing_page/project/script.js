// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function switchModal(closeModalId, openModalId) {
    closeModal(closeModalId);
    openModal(openModalId);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Form handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Here you would typically make an API call to your authentication service
    console.log('Login attempt:', { email, password });
    
    // Simulate successful login
    alert('Login successful!');
    closeModal('loginModal');
    // Redirect to dashboard or home page
    window.location.href = '/dashboard.html';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Here you would typically make an API call to your authentication service
    console.log('Signup attempt:', { email, password });
    
    // Simulate successful signup
    alert('Account created successfully!');
    closeModal('signupModal');
    // Redirect to dashboard or home page
    window.location.href = '/dashboard.html';
});