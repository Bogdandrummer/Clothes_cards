const cardsList = document.querySelector('[data-cards_list]');
console.log(cardsList);
let clothes = [];


//Creating variables of card
const createCards = (card) => {
	const cardsTemplate = document.querySelector('[data-type="card-template"]');
	const newCard = document.importNode(cardsTemplate.content, true);
	newCard.querySelector('[data-card_img]').src = card.images[0];
	newCard.querySelector('[data-card_title]').innerText = card.title;
	newCard.querySelector('[data-card-description]').innerText = card.description;
	newCard.querySelector('[data-card-price]').innerText = card.price;
	
	return newCard;	
	}

const renderCards = (container, cardsCount) => {
	container.innerHTML = '';
	const fragment = document.createDocumentFragment();
	cardsCount.forEach((card) => {
		const cardItem = createCards(card);
		console.log(card.price.innerText);
		fragment.appendChild(cardItem);
  });
  container.appendChild(fragment);
  return container;
};

renderCards(cardsList, clothes);



async function Recieve() {
let response = await fetch('https://api.escuelajs.co/api/v1/products');
if (response.ok) {
	// let base = await response.json();
	clothes = await response.json();
	console.log(clothes[0].description);
	
	renderCards(cardsList, clothes.slice(0, 20));
	return clothes;
}



else {
	alert('Data error :', response.status);
} 
return clothes;

}

const init = () => {
	Recieve();
}

window.addEventListener('load', init);

