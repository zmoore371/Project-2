function init() {
    getReviews();
    getUser();

}
function getReviews() {
    console.log('getReviews console')
    fetch('api/review/user')
        .then(async function (response) {
            console.log(response);
            if (!response.ok) {
                alert(error);
                return;
            };

            await response.json();

        }).then(function (data) {
            userReviews = data;
            console.log(userReviews)
            for (var i = 0; i < userReviews.length; i++) {
                var template = [];

                var title = userReviews[i].title;
                var city = `${userReviews[i].city.city_name}, ${userReviews[i].city.state_id}`;
                var rating = userReviews[i].rating;
                var category = userReviews[i].category;
                var business = userReviews[i].business;
                var address = userReviews[i].businessAddress;
                var recommend = userReviews[i].recommend;
                var review = userReviews[i].review;

                template.push(
                    `<p class="revTitle"><strong>${title}</strong></p><br>
            <p class="revCity"><strong>City: </strong> <span class="cityImport">${city}</span></p>
            <p class="revRating"><strong>Rating: </strong><span class="rateImport">${rating}</span></p>
            <p class="revCat"><strong>Categories: </strong><span class="catImport">${category}</span></p>
            <p class="revPlace"><strong>Business Name: </strong><span class"placeImport">${business}</span></p>
            <p class="revAddrs"><strong>Address: </strong><span class="addrsImport">${address}</span></p>
            <p class="recommend"><strong>Would you recommend this place to a friend? </strong><span class="recImport">${recommend}</span></p>
            <p class="revcomments"><strong>Convince us we should go: </strong> <span class="commentsImport">${review}</span></p>`
                );

                var htmlString = template.join('')
                const d = document.createElement("div")
                d.innerHTML = htmlString
                d.setAttribute('class', 'accReview full-border m-4')
                document.getElementById('rev-body').appendChild(d)
            };
        });
};

function getUser() {
    fetch('/api/user/info')
        .then(function (response) {
            console.log(response);
            if (response.ok) {
                response.json().then(function (data) {
                    userInfo = data[0]
                    document.getElementById('full-name').innerText = `${userInfo.firstName} ${userInfo.lastName}`
                    document.getElementById('username').innerText = `@${userInfo.username}`
                    document.getElementById('location').innerText = userInfo.location
                })
            } else {
                alert(err)
                return
            }
        })
}

init();
