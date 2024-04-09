function drawCard() {
    const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const cardImageUrl = data.cards[0].image;

        const cardImage = document.createElement('img');
        cardImage.setAttribute('src', cardImageUrl);

        const cardDiv = document.getElementById('cardContainer');
        cardDiv.innerHTML = '';
        cardDiv.appendChild(cardImage);
    })
    .catch(err => console.error(err));
}

const drawButton = document.getElementById('drawButton');
drawButton.addEventListener('click', drawCard);
