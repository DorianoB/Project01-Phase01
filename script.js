const menuContainer = document.getElementById("menuContainer");
const aboutUsContainer = document.getElementById("aboutUsContainer");
//these variables are for keeping track of the open menu items
let isBreakyOpen = false;
let isLunchOpen = false;
let isDinnerOpen = false;
let isDessertOpen = false;
let isDrinksOpen = false;

document.querySelector(".aboutus").addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayaboutUs();
});

//displays the about us container and hides the menu container
function displayaboutUs() {
  aboutUsContainer.style.display = "block";
  menuContainer.style.display = "none";
}

// const lopueClick = document.querySelector(".lopue");
// const cart = document.querySelector(".fa");

document.querySelector(".breaky").addEventListener("click", function () {
  isBreakyOpen = true;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("breakfast");
});

document.querySelector(".lunch").addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = true;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("lunch");
});

document.querySelector(".dinner").addEventListener("click", function () {
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = true;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("dinner");
});

document.querySelector(".dessert").addEventListener("click", function () {
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

  //will call the self-created API and return the list of menus
  fetch("http://localhost:3000/menus").then((response) => {
    response.json().then((results) => {
      //filtering the menu
      const menu = results.find((menu) => {
        return menu.menuType === menuType;
      });

      let menuItems = menu.items;

      if (document.getElementById("glutenFreeCheckbox").checked) {
        menuItems = menu.items.filter((mi) => {
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
    });
  });
}

document.querySelector(".drinks").addEventListener("click", function () {
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

  fetch("http://localhost:3000/menus").then((response) => {
    response.json().then((results) => {
      const drinksMenu = results.find((menu) => {
        return menu.menuType === "drinks";
      });

      for (let drink of drinksMenu.items) {
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
        <tr><td><strong>Extras $2</strong>: ${drinksMenu.extras}</td></tr>
        </table>
        `;

      menuContainer.appendChild(extras);
    });
  });
}

//email submiting form
document
  .querySelector("#emailform")
  .addEventListener("submit", function (event) {
    alert("The form was submitted");
    event.preventDefault();
  });

//filtering the gluten free options form the menu
document
  .querySelector("#glutenFreeCheckbox")
  .addEventListener("change", function () {
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
