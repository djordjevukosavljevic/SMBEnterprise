const applist = document.getElementById("applist")
fetch('http://localhost:8082/api/appointment')
    .then(rsp => rsp.json())
    .then(data => {
        data.forEach(appointment => {
            console.log(data)
        })
    })