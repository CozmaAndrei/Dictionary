const saveWord = document.querySelector("#saveWord");
const buttonSaveWord = document.querySelector("#buttonSaveWord");
const searchWord = document.querySelector("#searchWord");
const buttonSearchWord = document.querySelector("#buttonSearchWord");
const wordList = [];

buttonSaveWord.addEventListener("click", saveTheWord);

function saveTheWord() {
    const saveTheWordFromInput = document.getElementById("saveWord").value;
    wordList.push(saveTheWordFromInput);
    saveWord.value = "";
}

buttonSearchWord.addEventListener("click", searchTheWord);

function searchTheWord() {
    const searchTheWordFromInput = document.getElementById("searchWord").value;
    if (wordList.includes(searchTheWordFromInput)) {
        alert("The searched word is in the dictionary");
    } else {
        alert("The searched word is not in the dictionary");
    }
    searchWord.value = "";
}
