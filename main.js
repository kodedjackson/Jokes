const spinner = document.querySelector('#js-spinner');


const newQoute = document.querySelector("#generate_new_qoute");
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
newQoute.addEventListener('click', getQuote )


async function getQuote(){
    spinner.classList.remove('hidden');
    generate_new_qoute.disabled = false;
    try {
        const responseFromApi = await fetch (endpoint);
        if (!responseFromApi.ok){
            throw Error(responseFromApi.statusText)
        }
        const json = await responseFromApi.json();
        displayQuote(json.message);
    } catch (errorStopScript) {
        console.log(errorStopScript);
        alert("failed to get new Qoute");
    }
    finally {
        generate_new_qoute.disabled = false;
        spinner.classList.add('hidden');
      }
}


function displayQuote(qoute) {
    const quoteText = document.querySelector('#displaythisqoute');
    quoteText.innerHTML = qoute;
  }
  