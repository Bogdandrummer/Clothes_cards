const cardsList = document.querySelector('data-cards_list');



async function Recieve() {
let response = await fetch('https://api.escuelajs.co/api/v1/products');
if (response.ok) {
	let base = await response.json();
	console.log(base[5]);
	
	return base;
}



else {
	alert('Data error :', response.status);
} 

}

Recieve();
