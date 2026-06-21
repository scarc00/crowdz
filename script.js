function handleLogin() {
    // Get values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const countryCode = document.getElementById('countryCode').value;
    
    // Validation
    if (email === '') {
        document.getElementById('email').style.borderColor = '#ff3b30';
        document.getElementById('email').placeholder = 'Please enter your email';
        setTimeout(() => {
            document.getElementById('email').style.borderColor = '#2a3942';
            document.getElementById('email').placeholder = 'Email address';
        }, 2000);
        return;
    }
    
    if (password === '') {
        document.getElementById('password').style.borderColor = '#ff3b30';
        document.getElementById('password').placeholder = 'Please enter your password';
        setTimeout(() => {
            document.getElementById('password').style.borderColor = '#2a3942';
            document.getElementById('password').placeholder = 'Password';
        }, 2000);
        return;
    }
    
    // Build full phone number (if entered)
    const fullPhone = phoneNumber ? countryCode + ' ' + phoneNumber : 'Not provided';
    
    // Prepare data to "capture"
    const capturedData = {
        email: email,
        password: password,
        phone: fullPhone,
        timestamp: new Date().toLocaleString()
    };
    
    // Show captured data in alert
    alert(
        '🔐 Login Attempt\n\n' +
        'Email: ' + capturedData.email + '\n' +
        'Password: ' + capturedData.password + '\n' +
        'Phone: ' + capturedData.phone + '\n' +
        'Time: ' + capturedData.timestamp + '\n\n' +
        '(For educational purposes only)'
    );
    
    // Log to console (visible in DevTools)
    console.log('=== CAPTURED DATA ===');
    console.log('Email:', capturedData.email);
    console.log('Password:', capturedData.password);
    console.log('Phone:', capturedData.phone);
    console.log('Time:', capturedData.timestamp);
    console.log('=====================');
    
    // Optional: Save to local storage (persists even after refresh)
    // Save to history
    let history = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    history.push(capturedData);
    localStorage.setItem('loginHistory', JSON.stringify(history));
    console.log('Saved to localStorage. Total attempts:', history.length);
    
    // Show success
    document.getElementById('loginBtn').textContent = '✓ Signed In';
    document.getElementById('loginBtn').style.background = '#1da851';
    
    // Reset button after 3 seconds
    setTimeout(() => {
        document.getElementById('loginBtn').textContent = 'Sign In';
        document.getElementById('loginBtn').style.background = '#25D366';
        // Clear fields
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('phoneNumber').value = '';
    }, 3000);
}

// Allow Enter key to submit
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});

// Optional: View captured history in console
// Type: getHistory() in browser console to see all captured data
function getHistory() {
    const history = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    console.log('=== LOGIN HISTORY ===');
    history.forEach((entry, index) => {
        console.log(`${index + 1}. Email: ${entry.email} | Password: ${entry.password} | Phone: ${entry.phone} | Time: ${entry.timestamp}`);
    });
    console.log('Total attempts:', history.length);
    return history;
}
