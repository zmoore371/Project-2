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
    let city_id = 1

    console.log(title, city, rating, category, business, businessAddress, recommend, review)
    data = {title, city, rating, category, business, businessAddress, recommend, review, city_id}
    getCityId(data)
}

const getCityId = async (reviewInfo) => {
    
    let requestUrl = '/api/review/cityid/' + data.city

    fetch(requestUrl)
    .then(function(response) {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(response)
        }
    })
    .then(function (data) {
        cityInfo = data
        reviewInfo.city_id = cityInfo[0].id

        postReview(reviewInfo)
    })
}    

const postReview = async(data) => {
    const response = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    if(response.ok) {
        document.location.reload()
    } else {
        console.log(JSON.stringify(reviewInfo))
        alert("Error")
    }
}

document.querySelector('#review')
document.addEventListener('submit', submitReviewHandler)
