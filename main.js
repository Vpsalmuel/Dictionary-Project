//get the dictionary api key from the web
const Url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const Result = document.getElementById("result");
const Btn = document.getElementById("search_button");

//get aclick event on the button
Btn.addEventListener("click", function() {
    //get the value of the input
    const Input = document.getElementById("input_word").value;
    //use the fetch api to get the data from the url
    fetch(`${Url}${Input}`).then((response) => response.json()).then((data) => {
        console.log(data);
        let Word = data[0].word.toUpperCase();
        let POS = data[0].meanings[0].partOfSpeech;
        let Phonetic = data[0].phonetic;
        let Definition = data[0].meanings[0].definitions[0].definition;
        let Example1 = data[0].meanings[0].definitions[0].example || "Sorry!, No Examples Present for this word";
        let Example2 = data[0].meanings[0].definitions[1].example || "Sorry!, No Examples Present for this word";


        //check if the word is present in the dictionary
        Result.innerHTML = `
          <div class="word">
                <h3>${Word}</h3>
            </div>
            <div class="details">
                <p>Part of Speech: ${POS},</p>
                <p>Phonetic:  ${Phonetic}</p>
            </div>

                  <p class="word_meaning"> ${Definition}</p>
                  <p class="example">Example 1</p>
                  <p class="word_example">${Example1}</p>
                  <p class="example">Example 2</p>
                 <p class="word_example">${Example2}</p>
        `


    }).catch(() => {
        Result.innerHTML = `<h3 class="error"> Couldn't Find The Word </h3>
        
        `
    })


});