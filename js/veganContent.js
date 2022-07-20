//Dips
let dipSection = document.getElementById("dipSection");

let dips = shopItemsData.filter(function (e) {
	return e.section == 'vegan' && e.type == 'dips';
});

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateDips = () => {
	return (dipSection.innerHTML = dips
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
generateDips();

//Meals
let mealSection = document.getElementById("mealSection");

let meals = shopItemsData.filter(function (e) {
	return e.section == 'vegan' && e.type == 'meals';
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


//Snacks
let snackSection = document.getElementById("snackSection");

let snacks = shopItemsData.filter(function (e) {
	return e.section == 'vegan' && e.type == 'snacks';
});

let generateSnacks = () => {
	return (snackSection.innerHTML = snacks
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
generateSnacks();

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