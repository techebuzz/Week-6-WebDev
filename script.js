// Event Handling
document.addEventListener('DOMContentLoaded', () => {
    // Button click event
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
    document.body.appendChild(button);

    // Hover effect
    const hoverElement = document.createElement('div');
    hoverElement.textContent = 'Hover over me!';
    hoverElement.style.padding = '10px';
    hoverElement.style.backgroundColor = 'lightblue';
    hoverElement.addEventListener('mouseover', () => {
        hoverElement.style.backgroundColor = 'lightgreen';
    });
    hoverElement.addEventListener('mouseout', () => {
        hoverElement.style.backgroundColor = 'lightblue';
    });
    document.body.appendChild(hoverElement);

    // Keypress detection
    document.addEventListener('keypress', (event) => {
        console.log('Key pressed:', event.key);
    });

    // Double-click secret action
    const secretElement = document.createElement('div');
    secretElement.textContent = 'Double-click for a secret!';
    secretElement.style.padding = '10px';
    secretElement.style.backgroundColor = 'lightcoral';
    secretElement.addEventListener('dblclick', () => {
        alert('You found the secret!');
    });
    document.body.appendChild(secretElement);

    // Form Validation
    const form = document.getElementById('validationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (!email || !password) {
            alert('All fields are required!');
            return;
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email address!');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        alert('Form submitted successfully!');
    });
}); 