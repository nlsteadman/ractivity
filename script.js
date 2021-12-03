document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("activityButton");
    const container = document.getElementById("activityDisplay");
    const like = document.getElementById("likeButton");
    const likeContainer = document.getElementById("likedActivities")
    

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
        button.addEventListener('click', () => {
            
            container.innerHTML = ''
            const p = document.createElement("p");
            p.classname = "activity"
            p.innerHTML = randomActivity.activity;
            
            container.appendChild(p);

        })
    }

    function keepActivity(p) {
        like.addEventListener('click', () => {

            const li = document.createElement("li");
            li.classname = "liked"
            li.innerHTML = p;

            likeContainer.appendChild(li);

        })
    }
    keepActivity();
})

