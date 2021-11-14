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


//For login on main page---------------------------------------------------------

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify( {email, password} ),
            headers: {'Content-Type': 'application/json'}
            
        })
        if (response.ok) {
            document.location.replace('/myaccount')
        } else {
            alert("error")
        }

    }
}

document.querySelector('.login-form')
document.addEventListener('submit', loginFormHandler);

//-----------------------------------------------------------------------------
const submitReviewHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const city = document.querySelector('#city-review-dropdown').value
    const rating = document.querySelector('#dropdown-rating').value
    const category = document.querySelector('#lang').value
    const business = document.querySelector('#place-name').value.trim();
    const businessAddress = document.querySelector('#place-address').value.trim();
    const review = document.querySelector('#review-freeform').value.trim();
    const recommend = document.querySelector('input[type=radio][name="recommend"]:checked').value

    console.log(title, city, rating, category, business, businessAddress, recommend, review)
    data = {title, city, rating, category, business, businessAddress, recommend, review}
    getCityId(data)
}

const getCityId = async (data) => {
    console.log(data.city)
    console.log(data)

    let requestUrl = '/api/review/cityid/' + data.city
    await fetch(requestUrl)
            .then(response => response.json())
            .then(city => console.log(city))
    

}    


document.querySelector('#review')
document.addEventListener('submit', submitReviewHandler)
