const form = document.querySelector('#formid')
const btn = document.querySelector('#btn')
const text = document.querySelector('#text')
const div = document.querySelector('#imageContainer')

const gifSearch = async function(search){
    const results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=BTGNnq4FQSEXmbQC4mFM8e2ACFo7r9tC`)
    const numResults = Math.floor(Math.random() * 33)
    // console.log(results.data.data[0].images.original.url)
    const image = document.createElement('img')
    image.src = results.data.data[numResults].images.original.url
    div.appendChild(image) 
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    let searchValue = e.target[1].value
    gifSearch(searchValue)
    form.reset()
})

div.addEventListener('click', function(){
    div.remove()
})










    








