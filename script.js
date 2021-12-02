document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("activityButton");
    const container = document.getElementById("activityDisplay");
    
    

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

            container.fadeIn(500);
        })
    }
})

