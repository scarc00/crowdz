function handleLogin() {
    // Get the phone number input
    const phoneInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneInput.value.trim();
    
    // Get the country code
    const countryCode = document.getElementById('countryCode').value;
    
    // Check if phone number is entered
    if (phoneNumber === '') {
        // Show error
        phoneInput.style.borderColor = '#ff3b30';
        phoneInput.placeholder = 'Please enter your phone number';
        setTimeout(() => {
            phoneInput.style.borderColor = '#2a3942';
            phoneInput.placeholder = 'Phone number';
        }, 2000);
        return;
    }
    
    // If phone number is entered, show success
    const fullNumber = countryCode + ' ' + phoneNumber;
    alert('✓ Login successful!\n\nPhone number: ' + fullNumber + '\n\n(Redirecting to WhatsApp...)');
    
    // Optional: Log the number to console
    console.log('Phone number entered:', fullNumber);
    
    // Simulate redirect (remove this if you want)
    // window.location.href = 'https://web.whatsapp.com';
}
