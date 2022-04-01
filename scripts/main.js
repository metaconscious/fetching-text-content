const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.addEventListener('change', () => {
    const verse = verseChoose.value;
    updateDisplay(verse);
});

function updateDisplay(textContent) {
    textContent = textContent.replace(' ', '').toLowerCase();
    const url = `src/${textContent}.txt`;

    fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.text();
    })
        .then(text => {
            poemDisplay.textContent = text;
        })
        .catch(error => {
            poemDisplay.textContent = `Could not fetch verse: ${error}`
        });
}

updateDisplay(verseChoose.value);