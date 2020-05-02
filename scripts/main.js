function repeat(string, times) {
    let output = "";
    for (let i = 0; i < times; i++) {
        output += string;
        output += " ";
    }
    return output;
}

const yeetParagraph = document.querySelector('p');
yeetParagraph.textContent = repeat("swag", 5);