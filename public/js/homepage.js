
//Picture carousel on homepage.handlebars
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

//Login
async function login(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    })

    // if (response.ok) {

    // }

    console.log(response);
}

document.getElementById("login-form").addEventListener('click', login);
