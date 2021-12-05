document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("activityButton");
    const container = document.getElementById("activityDisplay");
    const like = document.getElementById("likeButton");
    const likeContainer = document.getElementById("likedActivities");

    function getActivity() {
        button.addEventListener('click', () => {
            fetch("https://www.boredapi.com/api/activity/")
                .then(response => response.json())
                .then(data => {
                    renderActivity(data)
                })
        })
    }

    getActivity();


    function renderActivity(randomActivity) {
        
        container.innerHTML = ''
        const p = document.createElement("p");
        p.innerHTML = randomActivity.activity;
        
        container.appendChild(p);
        keepActivity(p.innerHTML);
    }

    function keepActivity(currentActivity) {
        debugger;
        const li = document.createElement("li");
        li.innerHTML = currentActivity;

        like.addEventListener('click', () => {
            likeContainer.appendChild(li);
        })
    }
})

