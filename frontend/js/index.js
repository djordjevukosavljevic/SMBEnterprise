const list = document.getElementById('list')
fetch('http://localhost:8082/api/person')
    .then(rsp => rsp.json())
    .then(data => {
        data.forEach(person => {
            li.innerText = `${person.id} ${person.name} ${person.surrname} ${person.email} ${person.number}`
            list.appendChild(li)
        })
        console.log(data);
    })