let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
		<div class="item-info">
			<img height="100" src=${search.img} alt="" />
			<div>
				<h3>${search.name}</h3>
				<p class="cart-item-price">R ${search.price}.00</p>
				<h4>R ${item * search.price}.00</h4>
			</div>
			<i onclick="removeItem(${id})" class="fa-solid fa-trash fa-md"></i>
		</div>
		  <div class="item-btns">
			  <i onclick="decrement(${id})" class="fa-solid fa-arrow-left fa-md"></i>
			  <div id=${id} class="quantity">${item}</div>
			  <i onclick="increment(${id})" class="fa-solid fa-arrow-right fa-md"></i>
		  </div>
          
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
	<div class="empty-cart-content">
		<h2>Your Cart is Empty</h2>
		<button class="cont-shopping" onclick="history.back()">continue shopping</button>
    </div>
	`;
  }
};

generateCartItems();

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

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Total Cart Amount : <span>R ${amount}.00</span></h2>
	<div class="bill-btns">
		<button class="checkout">Checkout</button>
		<button onclick="clearCart()" class="removeAll">Clear Cart</button>
	</div>
    `;
  } else return;
};

TotalAmount();
