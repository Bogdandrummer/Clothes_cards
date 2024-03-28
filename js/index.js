const cardsList = document.querySelector('data-cards_list');
const cardTitle = document.querySelector('data-card_title');
console.log(cardTitle);


//Creating variables of card
const createCards = (card) => {
	const cardsList = document.querySelector('data-cards-list');
	const cardsTemplate = document.querySelector('[data-type="card-template"]');
	const newCard = document.importNode(cardTemplate.content, true);
	newCard.document.querySelector('data-card_img').src = card.img;
	newCard.document.querySelector('data-card_title').innerText = card.title;
	newCard.document.querySelector('data-card-description').innerText = card.description;
	newCard.document.querySelector('data-card-price').innerText = card.price;
	
	}

async function Recieve() {
let response = await fetch('https://api.escuelajs.co/api/v1/products');
if (response.ok) {
	let base = await response.json();
	createCards(base);
	return base;
}



else {
	alert('Data error :', response.status);
} 

}

Recieve();
