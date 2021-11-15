var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }

        })
        if (response.ok) {
            alert('Logged in successfully!');
            document.location.replace('/myaccount');
        } else {
            alert("error")
        }

    }
}

document.querySelector('.login-form')
document.addEventListener('submit', loginFormHandler);


function setLocalStorage() {
    // city = selectedCityfromdropdown

    var city = "San Francisco"
    localStorage.setItem("city", JSON.stringify(city))
    
}

setLocalStorage();