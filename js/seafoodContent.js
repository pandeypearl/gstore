//Fish
let fishSection = document.getElementById("fishSection");

let fish = shopItemsData.filter(function (e) {
	return e.section == 'seafood' && e.type == 'fish';
});

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateFish = () => {
	return (fishSection.innerHTML = fish
	.map((x) => {
		let { id, section, type, name, desc, img, price} = x;
		let search = basket.find((x) => x.id === id) || [];
		return `
		<div id="product-id-${id}" class="product-container item">
			<div class="product-image"><img src="${img}" height="100"></div>
			<div>
				<h3>${name}</h3>
				<p>${desc}</p>	
				<p class="product-price">R ${price}.00</p>
			</div>
			<div class="product-btns">
				<i class="fa-solid fa-arrow-left fa-lg" onclick="decrement(${id})"></i>
					<div id="${id}" class="quantity">
						${search.item === undefined ? 0 : search.item}
					</div>
				<i class="fa-solid fa-arrow-right fa-lg" onclick="increment(${id})"></i>
			</div>
		</div>
		`;
	})
	.join(""));
};
generateFish();

//Shellfish
let shellfishSection = document.getElementById("shellfishSection");

let shellfish = shopItemsData.filter(function (e) {
	return e.section == 'seafood' && e.type == 'shellfish';
});

let generateShellfish = () => {
	return (shellfishSection.innerHTML = shellfish
	.map((x) => {
		let { id, section, type, name, desc, img, price} = x;
		let search = basket.find((x) => x.id === id) || [];
		return `
		<div id="product-id-${id}" class="product-container item">
			<div class="product-image"><img src="${img}" height="100"></div>
			<div>
				<h3>${name}</h3>
				<p>${desc}</p>	
				<p class="product-price">R ${price}.00</p>
			</div>
			<div class="product-btns">
				<i class="fa-solid fa-arrow-left fa-lg" onclick="decrement(${id})"></i>
					<div id="${id}" class="quantity">
						${search.item === undefined ? 0 : search.item}
					</div>
				<i class="fa-solid fa-arrow-right fa-lg" onclick="increment(${id})"></i>
			</div>
		</div>
		`;
	})
	.join(""));
};
generateShellfish();

//Roe
let roeSection = document.getElementById("roeSection");

let roe = shopItemsData.filter(function (e) {
	return e.section == 'seafood' && e.type == 'roe';
});

let generateRoe = () => {
	return (roeSection.innerHTML = roe
	.map((x) => {
		let { id, section, type, name, desc, img, price} = x;
		let search = basket.find((x) => x.id === id) || [];
		return `
		<div id="product-id-${id}" class="product-container item">
			<div class="product-image"><img src="${img}" height="100"></div>
			<div>
				<h3>${name}</h3>
				<p>${desc}</p>	
				<p class="product-price">R ${price}.00</p>
			</div>
			<div class="product-btns">
				<i class="fa-solid fa-arrow-left fa-lg" onclick="decrement(${id})"></i>
					<div id="${id}" class="quantity">
						${search.item === undefined ? 0 : search.item}
					</div>
				<i class="fa-solid fa-arrow-right fa-lg" onclick="increment(${id})"></i>
			</div>
		</div>
		`;
	})
	.join(""));
};
generateRoe();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined || search.item === 0) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

// Search Functionality for Seafood Items
const seafoodItems = shopItemsData.filter(item => item.section === 'seafood');

// Rendering items based on filtering items in modal
function renderItemsInModal(items) {
	const itemList = document.getElementById('itemList');
	// Clearing previous items
	itemList.innerHTML= '';

	if (items.length === 0) {
		itemList.innerHTML = '<p>No results found.</p>';
	} else {
		items.forEach(item => {
			const li = document.createElement('li');
			li.classList.add('item');

			// Item Image Element
			const img = document.createElement('img');
			img.src = item.img;
			img.alt = item.name;
			img.classList.add('item-image');
			// li.textContent = item.name;
			li.appendChild(img);

			// Item Details Container
			const detailsContainer = document.createElement('div');
			detailsContainer.classList.add('item-details');

			// Add item name
            const name = document.createElement('h3');
            name.textContent = item.name;
            name.classList.add('item-name');
            detailsContainer.appendChild(name);

            // Add item description
            const description = document.createElement('p');
            description.textContent = item.desc;
            description.classList.add('item-description');
            detailsContainer.appendChild(description);

            // Add item price
            const price = document.createElement('p');
            price.textContent = 'R ' + item.price + '.00'; 
            price.classList.add('item-price');
            detailsContainer.appendChild(price);

	
			const addButton = document.createElement('button');
			addButton.textContent = "Add to Basket";
			addButton.classList.add('add-to-basket-btn');
			addButton.addEventListener('click', function() {
				addToBasket(item.id);
			});
			detailsContainer.appendChild(addButton);

			li.appendChild(detailsContainer);
			itemList.appendChild(li);
		});
	}

	

	// Showing the Results Modal
	const modal = document.getElementById('seafoodResultsModal');
	modal.style.display = 'block';
	const overlay = document.getElementById('overlay');
	overlay.style.display = 'block';

	document.getElementById('closeModalBtn').addEventListener('click', function() {
		modal.style.display= 'none';
		overlay.style.display= 'none';
	})
}

// Event Listener for search input
document.getElementById('searchForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const searchTerm= document.getElementById('searchInput').value.toLowerCase();
	const filteredItems= seafoodItems.filter(item => item.name.toLowerCase().includes(searchTerm));
	renderItemsInModal(filteredItems);
});

// Adding item to basket
function addToBasket(itemId) {
	const selectedItem = seafoodItems.find(item => item.id === itemId);
	const basketItemIndex = basket.findIndex(item => item.id === itemId);

	if (basketItemIndex === -1) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		basket[basketItemIndex].item++;
	}

	// Updating UI
	update(itemId);
	localStorage.setItem("data", JSON.stringify(basket));
}
