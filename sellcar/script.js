document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sellCarForm');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the default form submission

        // Collect all form data, including new contact fields
        const formData = {
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            make: document.getElementById('make').value,
            name: document.getElementById('name').value,
            year: document.getElementById('year').value,
            price: document.getElementById('price').value,
            quantity: document.getElementById('quantity').value,
            overview: document.getElementById('overview').value,
            imageFileName: document.getElementById('image').files[0] ? document.getElementById('image').files[0].name : 'No file selected'
        };

        // --- SIMULATION OF BACKEND PROCESS ---
        
        console.log("--- Data Captured Locally (Ready to Send to Server) ---");
        console.log(formData);

        // 2. Update the on-page message
        // Success message uses the Accent Color
        messageElement.style.color = '#4caf50'; 
        messageElement.innerHTML = `
            Submission Successful! We have your details and will contact you via email (${formData.email}) soon.
        `;
        
        // 3. Clear the form for a clean slate
        form.reset(); 
    });
});