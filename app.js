// fetch("https://dog.ceo/api/breeds/list/all")
// .then(data => data.json())
// .then(data => console.log(data));


async function fetchBreeds() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all") 
    const data = await response.json()
    createBreedList(data.message)
}   


fetchBreeds();

function createBreedList(breedList){

    document.getElementById("breed").innerHTML = `
    <select onchange="loadBreedImages(this.value)">
        <option>Choose a Dog Breed</option>
        ${Object.keys(breedList).map( el => `<option>${el}</option>`).join('')}
    </select>
    
    `
}


async function loadBreedImages(breed) {
    if (breed != "Choose a dog breed"){
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    createSlideshow(data.message)
    }
}

function createSlideshow(images) {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image : url('${images[0]}')"></div>
    <div class="slide" style="background-image : url('${images[1]}')"></div>

    `
}