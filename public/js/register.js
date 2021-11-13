console.log("Im linked correctly!")

const signupHandler = async (event) => {
  event.preventDefault();
    
  const firstName = document.querySelector('#fname').value.trim();
  const lastName = document.querySelector('#lname').value.trim();
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (firstName && lastName && username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify( {firstName, lastName, username, email, password} ),
      headers: {'Content-Type': 'application/json'}
    }) 
    if (response.ok) {
      document.location.replace('/')
    } else {
      alert("error")
    }
  }
}

document.querySelector('.reg-input-fields')
document.addEventListener('submit', signupHandler);
