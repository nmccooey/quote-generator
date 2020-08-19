const quoteButton = document.querySelector("#quote-button");
const quoteDiv = document.querySelector("#quote-div");
const quotes = ["hello1", "hello2", "hello3", "hello4"];
let quoteText = "If they don't like you for being yourself, be yourself even more.";

function render() {
  quoteDiv.innerHTML = "";
  let quote = document.createElement("p");
  quote.innerText = `"${quoteText}"`;
  quoteDiv.appendChild(quote);
}

const getQuote = () => {
  axios.get('https://api.taylor.rest/')
  .then(function (response) {
    quoteText = response.data.quote;
    render();
  })
  .catch(function (error) {
    console.log(error);
  });
}

quoteButton.addEventListener("click", getQuote);