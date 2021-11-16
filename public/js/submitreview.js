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
    data = { title, city, rating, category, business, businessAddress, recommend, review }
    postReview(data)
};

const postReview = async (data) => {
    console.log(data)
    const response = await fetch(`/api/review/${data.city}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.reload()
    } else {
        // console.log(JSON.stringify(reviewInfo))
        alert("Error")
    }
}

document.querySelector('#review')
document.addEventListener('submit', submitReviewHandler)
