const textarea = document.querySelector("#textarea");
const word = document.querySelector("#word");
const char = document.querySelector("#char");
// console.log(textarea)
// console.log(word)
// console.log(char)
textarea.addEventListener("input", function(){
    let textareaValue = this.value;
    char.textContent = textareaValue.length;

    textareaValue = textareaValue.trim();
    const split = textareaValue.split(" ");
    const  filtered = split.filter((one) => {
        return one !== "";
    });
    word.textContent = filtered.length;
});
