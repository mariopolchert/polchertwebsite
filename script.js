const linkImage = document.getElementsByClassName("linkImage");

const linkImages = [...linkImage];

linkImages.forEach((item) => {
    item.addEventListener("mouseenter", handleMouseOn);
    item.addEventListener("mouseleave", handleMouseOff);
});

function handleMouseOn(event) {
    event.target.classList.add("active");
}

function handleMouseOff(event) {
    event.target.classList.remove("active");
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
