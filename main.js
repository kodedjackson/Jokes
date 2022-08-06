

const newQoute = document.querySelector("#generate_new_qoute");
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function newjoke(){
    newQoute;
    console.log("The button was clicked" + newQoute)
}


async function getQuote(){
    try {
        const responseFromApi = await fetch (endpoint);
        if (!responseFromApi.ok){
            throw Error(responseFromApi.statusText)
        }
        const json = await responseFromApi.json();
        displayQuote(json.message);
    } catch (errorStopScript) {
        console.log(errorStopScript);
        alert("failed to get new Qoute")
    }
}


function displayQuote(qoute) {
    const quoteText = document.querySelector('#displaythisqoute');
    quoteText.innerHTML = qoute;
  }

  function shareBtn(){
    navigator.share(displayQuote);

  }