const form = document.querySelector('#formid')
const btn = document.querySelector('#btn')
const removeButton = document.querySelector('#remove')
const div = document.querySelector('#imageContainer')

const gifSearch = async function(search){
    const results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=BTGNnq4FQSEXmbQC4mFM8e2ACFo7r9tC`)
    const numResults = Math.floor(Math.random() * 33)
    const image = document.createElement('img')
    image.src = results.data.data[numResults].images.original.url
    div.appendChild(image) 
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const input = document.querySelector('#text')
    let searchValue = input.value
    gifSearch(searchValue)
    form.reset()
})

removeButton.addEventListener('click', function(){
    div.innerHTML = ''
})










    








