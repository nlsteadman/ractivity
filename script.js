document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("activityButton");
    const container = document.getElementById("activityDisplay");

    button.addEventListener('click', () => {
        fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {
            renderEvent(data)
        })
    })
    function renderEvent(data) {
        container.append(data)
    }


})