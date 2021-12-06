//Declare variables for elements in DOM
const button = document.getElementById("activityButton");
const container = document.getElementById("activityDisplay");
const like = document.getElementById("likeButton");
const likeContainer = document.getElementById("likedActivities");

//Add event listener to execute all other event listeners once DOM is fully parsed
document.addEventListener('DOMContentLoaded', () => {
    addEventListeners()
})

//function defining all event listeners (besides DOMContentLoaded), the activity generator button, and the keep activity button
function addEventListeners() {
    button.addEventListener('click', getActivity)
    like.addEventListener('click', keepActivity)
}

//function that establishes a fetch request to retrieve data from API, a single random activity
function getActivity() {
    fetch("https://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            renderActivity(data)
        })
}

//function that identifies the value needed in fetched data, creates a new element for that value, assigns that value to the new element, and then appends the element to the correct DOM container, displaying one random activity from the API
function renderActivity(randomActivity) {
    container.innerText = ''
    const p = document.createElement("p");
    p.innerText = randomActivity.activity;
    
    container.appendChild(p);
}

//function that identifies the value appended to the DOM from the renderActivity function, creates an element for that value, assigns the value to the element, and then appends the element to the correct DOM container, displaying the activity again, this time in a favorites list
function keepActivity() {
    const li = document.createElement("li");
    li.innerText = container.firstElementChild.innerText;
    likeContainer.append(li);
}