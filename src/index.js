console.log('%c HI', 'color: firebrick')

//starts after html loaded

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const allBreeds = document.querySelector("#dog-breeds")

fetch(imgUrl)
.then(resp => resp.json())
.then(json =>    
    json.message.forEach(img => addImage(img)))  //for each image url, we want to add picrureURL

function addImage(pictureURL){
    const imgContainer = document.querySelector("#dog-image-container")
    const newImage = document.createElement("img")
    newImage.src = pictureURL
    imgContainer.appendChild(newImage)
}

fetch(breedUrl)
.then(resp => resp.json())
.then(json =>  
    // console.log(Object.keys(json.message))
    addBreedList(Object.keys(json.message)),
    // breeds = json.message
    breedSelector()
    // json.message.forEach(breed => addBreed(breed))
    )  //for each breed, we want to add to list. breeds is one object here

function addBreed(breed){
    const newLi = document.createElement("li")
    newLi.textContent = breed
    allBreeds.appendChild(newLi)
    // debugger
}

function addBreedList(breeds){
    breeds.forEach(breed => addBreed(breed) )
}

allBreeds.addEventListener("click", (event) => {
    // debugger
    event.target.style.color = "red"
})


//want to iterate through new ul, and check first letter of each word , position[0] to see if it equals what is selected


function breedSelector () {
    //first check the input
    drop = document.querySelector("#breed-dropdown")
    dropValue = drop.options[drop.selectedIndex].value
    //now iterate through li, checking first letter
    debugger
    allBreeds.getElementsByTagName("li").forEach(breedName => firstLetter(breedName))
    
    // [0].innerText[0] //gives first letter first element

}

function firstLetter(word){
// in here we have one word
debugger    
word.innerText
}







