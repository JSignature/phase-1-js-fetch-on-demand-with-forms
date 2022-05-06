const init = () => {
  const inputForm = document.querySelector('form')
//   console.log(inputForm)
inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = e.target.children[1].value
    console.log(input)
fetch(`http://localhost:3000/movies/${input}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.summary)
    const title = document.querySelector("#movieDetails h4")
    console.log(title)
    const summary = document.querySelector("#movieDetails p")
    console.log(summary)
    title.innerText = json.title
    summary.innerText = json.summary
    
    
    })




})
}

document.addEventListener('DOMContentLoaded', init);