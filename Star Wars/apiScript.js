function getApi() {
    const characterNameInput = document.getElementById('characterName').value;
    const fullUri = `https://www.swapi.tech/api/people/?name=${characterNameInput}`;

    fetch(fullUri)
    .then(res => res.json())
    .then(data => {
        if(data.result && data.result.length > 0) {
            const character = data.result[0];
            const { height, mass, gender, hair_color } = character.properties;
            const outputTextarea = document.getElementById('output');
            const biometricData = `Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair Color: ${hair_color}`;
            outputTextarea.textContent = biometricData;
        } else {
            const outputTextarea = document.getElementById('output');
            outputTextarea.textContent = "No character found with that name.";
        }
    })
    .catch(err => console.error(err));
}

const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', getApi);
