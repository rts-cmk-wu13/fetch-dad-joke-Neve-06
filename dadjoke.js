
fetch("https://icanhazdadjoke.com/", {
    headers:{
        "Accept": "application/json"
    }
})
    .then(response =>response.json())
    
    .then(data => {
        let bodyElm = document.querySelector("body")
        let jokeElm = document.createElement("p")
        jokeElm.classList.add("joke")
        jokeElm.innerHTML = `
            ${data.joke}
        `
        bodyElm.append(jokeElm)
    });