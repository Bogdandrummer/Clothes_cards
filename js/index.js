const cardsList = document.querySelector('[data-cards_list]');

let clothes = [];
const dot = '...';



//Creating variables of card
const createCards = (card) => {
	const cardsTemplate = document.querySelector('[data-type="card-template"]');
	const newCard = document.importNode(cardsTemplate.content, true);
	
	newCard.querySelector('[data-card_img]').src = 'https://placehold.co/600x400';
	newCard.querySelector('[data-card_title]').innerText = card.title;
	newCard.querySelector('[data-card_description]').innerText = card.description;
	newCard.querySelector('[data-card_price]').innerText = card.price;
	
	const cutDescription = newCard.querySelector('[data-card_description]').innerText;
	
	if (cutDescription.length > 300) {
		newCard.querySelector('[data-card_description]').innerText = `${cutDescription.slice(0, 300)}${dot}`;	
	}
	const cutDesc =  () => {
		if (cutDescription.length > 300) {
			newCard.querySelector('[data-card_description]').innerText = card.description;
		} else {
			newCard.querySelector('[data-card_description]').innerText = `${cutDescription.slice(0, 300)}${dot}`;
		}
		}
		
	return newCard;	
	}

const renderCards = (container, cardsCount) => {
	container.innerHTML = '';
	const fragment = document.createDocumentFragment();
	cardsCount.forEach((card) => {
		const cardItem = createCards(card);
		console.log(cardItem);
		fragment.appendChild(cardItem);
  });
  container.appendChild(fragment);
  return container;
};

async function Recieve() {
let response = await fetch('https://api.escuelajs.co/api/v1/products');
if (response.ok) {
	clothes = await response.json();
	renderCards(cardsList, clothes);
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

