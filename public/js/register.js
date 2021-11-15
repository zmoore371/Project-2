console.log("Im linked correctly!")

const signupHandler = async (event) => {
  event.preventDefault();
    
  const firstName = document.querySelector('#fname').value.trim();
  const lastName = document.querySelector('#lname').value.trim();
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const location = document.querySelector('#location').value.trim();

  if (firstName && lastName && username && email && password && location) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify( {firstName, lastName, username, email, password, location} ),
      headers: {'Content-Type': 'application/json'}
    }) 
    if (response.ok) {
      document.location.replace('/')
    } else {
      alert(response.statusText)
    }
  }

}

document.querySelector('.reg-input-fields')
document.addEventListener('submit', signupHandler);
