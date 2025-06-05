document.addEventListener("DOMContentLoaded", function() {
    fetch("http://127.0.0.1:8082/api/appointment")
    .then(response => {
        if(!response)
            {
                throw new Error('Network error was not resolved');
            }
        return response.json();
    })
    .then(data =>{
        
    })
})