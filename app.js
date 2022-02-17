const form = document.querySelector("#formid");
const btn = document.querySelector("#btn");
const removeButton = document.querySelector("#remove");
const div = document.querySelector("#imageContainer");

const apiKey = "BTGNnq4FQSEXmbQC4mFM8e2ACFo7r9tC";

const gifSearch = async function (search) {
  const results = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}`
  );
  const numResults = Math.floor(Math.random() * 33);
  return results.data.data[numResults].images.original.url;
};

function createImage(src) {
  const image = document.createElement("img");
  image.src = src;
  return image;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector("#text");
  let searchValue = input.value;
  const imageSrc = gifSearch(searchValue);
  const img = createImage(imageSrc);
  div.appendChild(img);
  form.reset();
});

removeButton.addEventListener("click", function () {
  div.innerHTML = "";
});
