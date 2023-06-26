// Get all the Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.cart-button');

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle adding items to the cart
function addToCart(event) {
  const product = event.target.parentElement;
  const productName = product.querySelector('h3').innerText;
  const productImage = product.querySelector('img').src;

  // Create a cart item object
  const cartItem = {
    name: productName,
    image: productImage
  };

  // Get the cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the item to the cart
  cartItems.push(cartItem);

  // Save the updated cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Provide visual feedback to the user (optional)
  event.target.textContent = 'Added to Cart';
  event.target.disabled = true;
}


// for login page
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  // Get the entered password
  var passwordInput = document.getElementById('password');
  var password = passwordInput.value;
  
  // Check if the password is correct (e.g., hardcoded password: "password123")
  if (password === 'password123') {
    // Redirect to index.html
    window.location.href = 'index.html';
  } else {
    // Display an error message or take appropriate action
    alert('Incorrect password. Please try again.');
  }
});



// script.js

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform validation checks
  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (email === '') {
    alert('Please enter your email address.');
    return;
  }

  if (message === '') {
    alert('Please enter a message.');
    return;
  }

  // Send the form data to the server (you can use AJAX or fetch to send the data)

  // Reset the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  alert('Form submitted successfully!');
}

// Attach the form submit event listener
const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);
