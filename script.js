
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Add loading class to container
    document.querySelector('.container').classList.add('loading');
    
    // Submit the form and redirect
    setTimeout(() => {
        this.submit();
        window.location.href = 'success.htm';
    }, 1500);
});
