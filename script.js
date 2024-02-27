const aboutusClick = document.querySelector(".aboutus");
const menuContainer = document.getElementById("menuContainer");
const aboutUsContainer = document.getElementById("aboutUsContainer");
let isBreakyOpen = false;
let isLunchOpen = false;
let isDrinksOpen = false;

aboutusClick.addEventListener("click", function () {
  displayaboutUs();
});
function displayaboutUs() {
  aboutUsContainer.style.display = "block";
  menuContainer.style.display = "none";
  // for (let menuItem of aboutus) {
  //   const listItem = document.createElement("div");
  //   listItem.innerHTML = `
  //   ${menuItem.story}
  //   `;
  //   menuContainer.appendChild(listItem);
  // }
}

const lopueClick = document.querySelector(".lopue");
const cart = document.querySelector(".fa");

const breakfast = document.querySelector(".breaky");
breakfast.addEventListener("click", function () {
  displayBreakyMenu();
});

function displayBreakyMenu() {
  menuContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  menuContainer.innerHTML = "";

  for (let menuItem of breakyMenu) {
    const listItem = document.createElement("div");

    listItem.innerHTML = `
        <table>
        <tr>
       <th><strong>${menuItem.food}${
      menuItem.isVegan ? "(V)" : ""
    }</strong></th>
       </tr>
       <tr>
       <tr><td>${menuItem.items.join(", ")}</td></tr>
       <tr><td>$${menuItem.price}</td></tr>
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
    isGlutenfree: true,
    price: 8.5,
  },
  {
    food: "Breaky Roll",
    items: ["eggs", "bacon", "cheese"],
    type: "Breakfast",
    isVegan: false,
    isGlutenfree: false,
    price: 15,
  },
  {
    food: "Acai Bowl",
    items: ["acai", "pineapple", "granola"],
    type: "Breakfast",
    isVegan: true,
    isGlutenfree: true,
    price: 17.5,
  },
];

const lunch = document.querySelector(".lunch");
lunch.addEventListener("click", function () {
  displayLunchMenu();
});

function displayLunchMenu() {
  menuContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  menuContainer.innerHTML = "";

  for (let lunchItem of lunchMenu) {
    const listItem = document.createElement("div");

    listItem.innerHTML = `
    <table>
    <tr>
    <th><strong>${lunchItem.food}${
      lunchItem.isVegan ? " (V)" : ""
    }</strong></th>
   </tr>
   <tr>
   <tr><td>${lunchItem.items.join(", ")}</td></tr>
   <tr><td>$${lunchItem.price}</td></tr>
    </tr>
    </table>
    `;

    menuContainer.appendChild(listItem);
  }
}
const lunchMenu = [
  {
    food: "Pizza",
    items: ["dough", "tomato", "mushrooms", "vegan mozarella"],
    type: "Lunch",
    isVegan: true,
    isGlutenfree: false,
    price: 20,
  },
  {
    food: "Chicken Curry",
    items: ["rice", "currypaste", "chicken"],
    type: "Lunch",
    isVegan: false,
    isGlutenfree: true,
    price: 18,
  },
  {
    food: "Sourdough Sandwich",
    items: ["ham", "cheese", "pumpkin"],
    type: "Lunch",
    isVegan: false,
    isGlutenfree: false,
    price: 14.2,
  },
];

const drinks = document.querySelector(".drinks");
drinks.addEventListener("click", function () {
  displayDrinksMenu();
});

function displayDrinksMenu() {
  menuContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  menuContainer.innerHTML = "";

  for (let drink of drinksMenu) {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
    <table>
    <tr>
    <th><strong>${drink.cafe}</strong></th>
    </tr>
    <tr><td>${drink.size.join(", ")}</td></tr>
    <tr><td>$${drink.price.join(" / $")}</td></tr>
    <tr><td>Extras $2: ${drink.extras}</td></tr>
    </table>
    `;

    menuContainer.appendChild(listItem);
  }
}

const drinksMenu = [
  {
    cafe: "Flat White",
    size: ["small", "medium", "large"],
    price: [4.5, 5.5, 6.5],
    extras: ["soya milk", " almond milk", " oat milk"],
  },
  {
    cafe: "Cappuccino",
    size: ["small", "medium", "large"],
    price: [4.5, 5.5, 6.5],
    extras: ["soya milk", " almond milk", "oat milk"],
  },
  {
    cafe: "Long Black",
    size: ["small", "medium", "large"],
    price: [4.5, 5.5, 6.5],
    extras: ["soya milk", " almond milk", " oat milk"],
  },
];

//email submiting form
const submitClick = document.querySelector("#submit");
function submitForm(event) {
  alert("The form was submitted");
  event.preventDefault();
}

//filtering the gluten free options form the menu
const glutenFree = document.querySelector("#glutenFree");
glutenFree.addEventListener("change", function () {
  displayGlutenFree(breakyMenu, lunchMenu);
});

function displayGlutenFree(menu) {
  const glutenFreeOptions = menu.filter(function (element) {
    return element.isGlutenfree;
  });
}
