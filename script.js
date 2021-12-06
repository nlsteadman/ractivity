const button = document.getElementById("activityButton");
const container = document.getElementById("activityDisplay");
const like = document.getElementById("likeButton");
const likeContainer = document.getElementById("likedActivities");

document.addEventListener('DOMContentLoaded', () => {
    addEventListeners()
})

function addEventListeners() {
    button.addEventListener('click', getActivity)
    like.addEventListener('click', keepActivity)
}

function getActivity() {
        fetch("https://www.boredapi.com/api/activity/")
            .then(response => response.json())
            .then(data => {
                renderActivity(data)
            })
}

function renderActivity(randomActivity) {
    
    container.innerHTML = ''
    const p = document.createElement("p");
    p.innerHTML = randomActivity.activity;
    
    container.appendChild(p);
        
}

function keepActivity() {
    const li = document.createElement("li");
    li.innerText = container.firstElementChild.innerText;
    likeContainer.append(li);
}