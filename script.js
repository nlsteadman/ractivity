document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("activityButton");
    const container = document.getElementById("activityDisplay");
    

    button.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity/")
            .then(response => response.json())
            .then(data => {
                renderActivity(data)
            })
    })

    function renderActivity(activity) {
        const p = document.createElement("p");
        p.textContent = activity
        container.textContent = ''
        container.appendChild(p)
    
    }

})