const lang = document.querySelector("#lang");
const getEnglishWords = document.querySelectorAll(".en");
const getCroatianWords = document.querySelectorAll(".hr");

lang.addEventListener("mousedown", handleChangeLanguage);

function handleChangeLanguage(e) {
    console.log(e.target);
    getEnglishWords.forEach((el) => {
        el.classList.toggle("hide");
    });
    getCroatianWords.forEach((el) => {
        el.classList.toggle("hide");
    });
    e.target.innerHTML == "HRV"
        ? (e.target.innerHTML = "ENG")
        : (e.target.innerHTML = "HRV");
}

// Cleaning whitespaces
function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if (
            child.nodeType === 8 ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}

clean(document);
