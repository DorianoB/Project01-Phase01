const aboutusClick = document.querySelector(".aboutus");
const menuContainer = document.getElementById("menuContainer");

aboutusClick.addEventListener("click", function () {
  displayaboutUs(aboutUs);
});
function displayaboutUs(aboutus) {
  menuContainer.innerHTML = "";

  for (let menuItem of aboutus) {
    const listItem = document.createElement("div");

    listItem.innerHTML = `
    ${menuItem.story}  
    `;
    menuContainer.appendChild(listItem);
  }
}

const aboutUs = [
  {
    story:
      "Welcome to The <strong>Green Leaf Cafe</strong>! Nestled in our vibrant cafe now proudly serves freshly brewed coffee sourced directly from the lush landscapes of Colombia. Immerse yourself in the rich flavors and aromatic notes of our carefully selected beans. Join us at our welcoming space, where the essence of Colombian coffee meets the cozy atmosphere of the Green Leaf Cafe. Experience the perfect blend of nature and indulgence in every cup at our latest venture.",
  },
];
const lopueClick = document.querySelector(".lopue");
const cart = document.querySelector(".fa");
const submitClick = document.querySelector("#submit");

const breakfast = document.querySelector(".breaky");
breakfast.addEventListener("click", function () {
  displayBreakyMenu(breakyMenu);
});

function displayBreakyMenu(breaky) {
  menuContainer.innerHTML = "";

  for (let menuItem of breaky) {
    const listItem = document.createElement("div");

    listItem.innerHTML = `
        <table>
        <tr>
       <th><strong>${menuItem.food}</strong></th>
       </tr>
       <tr>
       <tr><td>${menuItem.items.join(", ")}</td></tr>
       <tr><td>Vegan: ${menuItem.isVegan ? "Yes" : "No"}</td></tr>
       <tr><td>Price: $${menuItem.price}</td></tr>
        </tr>
        </table>
      `;
    menuContainer.appendChild(listItem);
  }
}
const breakyMenu = [
  {
    food: "Banana Bread",
    items: ["banana", "flour", "eggs"],
    type: "Breakfast",
    isVegan: false,
    price: 8.5,
  },
  {
    food: "Breaky Roll",
    items: ["eggs", "bacon", "cheese"],
    type: "Breakfast",
    isVegan: false,
    price: 15,
  },
  {
    food: "Acai Bowl",
    items: ["acai", "pineapple", "granola"],
    type: "Breakfast",
    isVegan: true,
    price: 17.5,
  },
];

const lunch = document.querySelector(".lunch");
lunch.addEventListener("click", function () {
  displayLunchMenu(lunchMenu);
});

function displayLunchMenu(lunch) {
  menuContainer.innerHTML = "";

  for (let lunchItem of lunch) {
    const listItem = document.createElement("div");

    listItem.innerHTML = `
    <table>
    <tr>
   <th><strong>${lunchItem.food}</strong></th>
   </tr>
   <tr>
   <tr><td>Ingredients: ${lunchItem.items.join(", ")}</td></tr>
   <tr><td>Vegan: ${lunchItem.isVegan ? "Yes" : "No"}</td></tr>
   <tr><td>Price: $${lunchItem.price}</td></tr>
    </tr>
    </table>
    `;

    menuContainer.appendChild(listItem);
  }
}
const lunchMenu = [
  {
    food: "Pizza",
    items: ["dough", "tomato", "mushrooms", "vegam mozarella"],
    type: "Lunch",
    isVegan: true,
    price: 20,
  },
  {
    food: "Chicken Curry",
    items: ["rice", "currypaste", "chicken"],
    type: "Lunch",
    isVegan: false,
    price: 18,
  },
  {
    food: "Sourdough Sandwich",
    items: ["ham", "cheese", "pumpkin"],
    type: "Lunch",
    isVegan: false,
    price: 14.2,
  },
];

const drinks = document.querySelector(".drinks");
drinks.addEventListener("click", function () {
  displayDrinksMenu(drinksMenu);
});

function displayDrinksMenu(drinks) {
  menuContainer.innerHTML = "";

  for (let drinksMenu of drinks) {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
    <table>
    <tr>
    <th><strong>${drinksMenu.cafe}</strong></th>
    </tr>
    <tr><td>Size: ${drinksMenu.size.join(", ")}</td></tr>
    <tr><td>Vegan: ${drinksMenu.isVegan ? "Yes" : "No"}</td></tr>
    <tr><td>Price: ${drinksMenu.price.join(", ")}</td></tr>
    <tr><td>Extras $2: ${drinksMenu.extras}</td></tr>
    </table>
    `;

    menuContainer.appendChild(listItem);
  }
}

const drinksMenu = [
  {
    cafe: "Flat White",
    size: ["short", "regular", "large"],
    isVegan: false,
    price: [4.5, 5.5, 6.5],
    extras: ["soya milk", " almond milk", " oat milk"],
  },
  {
    cafe: "Cappuccino",
    size: ["short", "regular", "large"],
    isVegan: false,
    price: [4.5, 5.5, 6.5],
    extras: ["soya milk", " almond milk", "oat milk"],
  },
  {
    cafe: "Long Black",
    size: ["short", "regular", "large"],
    isVegan: true,
    price: [4.5, 5.5, 6.5],
    extras: ["soya milk", " almond milk", " oat milk"],
  },
];
