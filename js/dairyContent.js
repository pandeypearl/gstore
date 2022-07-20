//butter
let butterSection = document.getElementById("butterSection");

let butter = shopItemsData.filter(function (e) {
	return e.section == 'dairy' && e.type == 'butter';
});

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateButter = () => {
	return (butterSection.innerHTML = butter
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
generateButter();

//cheese
let cheeseSection = document.getElementById("cheeseSection");

let cheese = shopItemsData.filter(function (e) {
	return e.section == 'dairy' && e.type == 'cheese';
});

let generateCheese = () => {
	return (cheeseSection.innerHTML = cheese
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
generateCheese();

//cream
let creamSection = document.getElementById("creamSection");

let cream = shopItemsData.filter(function (e) {
	return e.section == 'dairy' && e.type == 'cream';
});

let generateCream = () => {
	return (creamSection.innerHTML = cream
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
generateCream();

//ice-cream
let icecreamSection = document.getElementById("icecreamSection");

let icecream = shopItemsData.filter(function (e) {
	return e.section == 'dairy' && e.type == 'ice-cream';
});

let generateIcecream = () => {
	return (icecreamSection.innerHTML = icecream
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
generateIcecream();

//milk
let milkSection = document.getElementById("milkSection");

let milk = shopItemsData.filter(function (e) {
	return e.section == 'dairy' && e.type == 'milk';
});

let generateMilk = () => {
	return (milkSection.innerHTML = milk
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
generateMilk();

//yogurt
let yogurtSection = document.getElementById("yogurtSection");

let yogurt = shopItemsData.filter(function (e) {
	return e.section == 'dairy' && e.type == 'yogurt';
});

let generateYogurt = () => {
	return (yogurtSection.innerHTML = yogurt
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
generateYogurt();

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