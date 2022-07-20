//Greens
let greenSection = document.getElementById("greenSection");

let greens = shopItemsData.filter(function (e) {
	return e.section == 'frozen' && e.type == 'greens';
});

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateGreens = () => {
	return (greenSection.innerHTML = greens
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
generateGreens();

//Meals
let mealSection = document.getElementById("mealSection");

let meals = shopItemsData.filter(function (e) {
	return e.section == 'frozen' && e.type == 'meals';
});

let generateMeals = () => {
	return (mealSection.innerHTML = meals
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
generateMeals();

//Meats
let meatSection = document.getElementById("meatSection");

let meats = shopItemsData.filter(function (e) {
	return e.section == 'frozen' && e.type == 'meats';
});

let generateMeats = () => {
	return (meatSection.innerHTML = meats
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
generateMeats();

//Seafood
let seafoodSection = document.getElementById("seafoodSection");

let seafood = shopItemsData.filter(function (e) {
	return e.section == 'frozen' && e.type == 'seafood';
});

let generateSeafood = () => {
	return (seafoodSection.innerHTML = seafood
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
generateSeafood();

//Potatoes
let potatoSection = document.getElementById("potatoSection");

let potatoes = shopItemsData.filter(function (e) {
	return e.section == 'frozen' && e.type == 'potatoes';
});

let generatePotatoes = () => {
	return (potatoSection.innerHTML = potatoes
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
generatePotatoes();

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