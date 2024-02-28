const aboutusClick = document.querySelector(".aboutus");
const menuContainer = document.getElementById("menuContainer");
const aboutUsContainer = document.getElementById("aboutUsContainer");
let isBreakyOpen = false;
let isLunchOpen = false;
let isDinnerOpen = false;
let isDessertOpen = false;
let isDrinksOpen = false;

let menus = [
  {
    menuType: "breakfast",
    openingHours: "7am - 11am",
    items: [
      {
        food: "Banana Bread",
        items: ["banana", "flour", "eggs"],
        isVegan: false,
        isGlutenfree: true,
        price: 8.5,
      },
      {
        food: "Breaky Roll",
        items: ["eggs", "bacon", "cheese"],
        isVegan: false,
        isGlutenfree: false,
        price: 15,
      },
      {
        food: "Acai Bowl",
        items: ["acai", "pineapple", "granola"],
        isVegan: true,
        isGlutenfree: true,
        price: 17.5,
      },
    ],
  },
  {
    menuType: "lunch",
    openingHours: "11am - 3pm",
    items: [
      {
        food: "Pizza",
        items: ["dough", "tomato", "mushrooms", "vegan mozarella"],
        isVegan: true,
        isGlutenfree: false,
        price: 20,
      },
      {
        food: "Chicken Curry",
        items: ["rice", "currypaste", "chicken"],
        isVegan: false,
        isGlutenfree: true,
        price: 18,
      },
      {
        food: "Sourdough Sandwich",
        items: ["ham", "cheese", "pumpkin"],
        isVegan: false,
        isGlutenfree: false,
        price: 14.2,
      },
    ],
  },
  {
    menuType: "dinner",
    openingHours: "6pm - 10pm",
    items: [
      {
        food: "Pizza",
        items: ["dough", "tomato", "mushrooms", "vegan mozarella"],
        isVegan: true,
        isGlutenfree: false,
        price: 20,
      },
      {
        food: "Pesto Prawns Pasta",
        items: ["prawns", "spaghetti", "pesto"],
        isVegan: false,
        isGlutenfree: true,
        price: 26,
      },
      {
        food: "Chicken Parmy",
        items: ["ham", "cheese", "chicken", "fries"],
        isVegan: false,
        isGlutenfree: false,
        price: 21,
      },
    ],
  },
  {
    menuType: "dessert",
    openingHours: "6pm - 10pm",
    items: [
      {
        food: "Choccolate Cacke",
        items: ["choccolate", "strawberries"],
        isVegan: true,
        isGlutenfree: false,
        price: 12,
      },
      {
        food: "Ice Cream",
        items: ["vanilla", "choccolate", "strawberries"],
        isVegan: false,
        isGlutenfree: true,
        price: 6.5,
      },
      {
        food: "Banana Split",
        items: ["banana", "vanilla ice", "choccolate ice"],
        isVegan: false,
        isGlutenfree: false,
        price: 12.5,
      },
    ],
  },
  {
    menuType: "drinks",
    openingHours: "All day",
    items: [
      {
        cafe: "Flat White",
        size: ["small", "medium", "large"],
        price: [4.5, 5.5, 6.5],
      },
      {
        cafe: "Cappuccino",
        size: ["small", "medium", "large"],
        price: [4.5, 5.5, 6.5],
      },
      {
        cafe: "Long Black",
        size: ["small", "medium", "large"],
        price: [4.5, 5.5, 6.5],
      },
    ],
    extras: ["soya milk", " almond milk", " oat milk"],
  },
];

aboutusClick.addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayaboutUs();
});

function displayaboutUs() {
  aboutUsContainer.style.display = "block";
  menuContainer.style.display = "none";
}

// const lopueClick = document.querySelector(".lopue");
// const cart = document.querySelector(".fa");

const breakfast = document.querySelector(".breaky");
breakfast.addEventListener("click", function () {
  isBreakyOpen = true;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("breakfast");
});

const lunch = document.querySelector(".lunch");
lunch.addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = true;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("lunch");
});

const dinner = document.querySelector(".dinner");
dinner.addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = true;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("dinner");
});

const dessert = document.querySelector(".dessert");
dessert.addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = true;
  isDrinksOpen = false;
  displayMenu("dessert");
});

function displayMenu(menuType) {
  menuContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  menuContainer.innerHTML = "";

  const menu = menus.filter((menu) => {
    return menu.menuType === menuType;
  });

  let menuItems = menu[0].items;

  if (document.getElementById("glutenFreeCheckbox").checked) {
    menuItems = menu[0].items.filter((mi) => {
      return mi.isGlutenfree === true;
    });
  }

  for (let menuItem of menuItems) {
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

const drinks = document.querySelector(".drinks");
drinks.addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = true;
  displayDrinksMenu();
});

function displayDrinksMenu() {
  menuContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  menuContainer.innerHTML = "";

  const drinksMenu = menus.filter((menu) => {
    return menu.menuType === "drinks";
  });

  for (let drink of drinksMenu[0].items) {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
    <table>
    <tr>
    <th><strong>${drink.cafe}</strong></th>
    </tr>
    <tr><td>${drink.size.join(", ")}</td></tr>
    <tr><td>$${drink.price.join(" / $")}</td></tr>
    </table>
    `;

    menuContainer.appendChild(listItem);
  }

  const extras = document.createElement("div");
  extras.innerHTML = `
    <table>
    <tr><td><strong>Extras $2</strong>: ${drinksMenu[0].extras}</td></tr>
    </table>
    `;

  menuContainer.appendChild(extras);
}

//email submiting form
const submitClick = document.querySelector("#submit");
function submitForm(event) {
  alert("The form was submitted");
  event.preventDefault();
}

//filtering the gluten free options form the menu
const glutenFree = document.querySelector("#glutenFreeCheckbox");
glutenFree.addEventListener("change", function () {
  if (isBreakyOpen) {
    displayMenu("breakfast");
  }

  if (isLunchOpen) {
    displayMenu("lunch");
  }

  if (isDinnerOpen) {
    displayMenu("dinner");
  }

  if (isDessertOpen) {
    displayMenu("dessert");
  }

  if (isDrinksOpen) {
    displayDrinksMenu();
  }
});

function displayGlutenFree(menu) {
  const glutenFreeOptions = menu.filter(function (element) {
    return element.isGlutenfree;
  });
}
