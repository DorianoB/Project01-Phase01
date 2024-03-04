const menuContainer = document.getElementById("menuContainer");
const aboutUsContainer = document.getElementById("aboutUsContainer");

//these variables are for keeping track of the open menu items
let aboutUsOpen = false;
let isBreakyOpen = false;
let isLunchOpen = false;
let isDinnerOpen = false;
let isDessertOpen = false;
let isDrinksOpen = false;

document.body.addEventListener("click", function () {
  homeScreen();
});
function homeScreen() {
  const aboutUsContainer = document.getElementById("aboutUsContainer");
  const menuContainer = document.getElementById("menuContainer");

  if (aboutUsOpen && aboutUsContainer) {
    aboutUsContainer.style.display = "none";
    aboutUsOpen = false;
  }
  if (isBreakyOpen && menuContainer) {
    menuContainer.style.display = "none";
    isBreakyOpen = false;
  }
  if (isLunchOpen && menuContainer) {
    menuContainer.style.display = "none";
    isLunchOpen = false;
  }
  if (isDinnerOpen && menuContainer) {
    menuContainer.style.display = "none";
    isDinnerOpen = false;
  }
  if (isDessertOpen && menuContainer) {
    menuContainer.style.display = "none";
    isDessertOpen = false;
  }
  if (isDrinksOpen && menuContainer) {
    menuContainer.style.display = "none";
    isDrinksOpen = false;
  }
}

document.querySelector(".aboutus").addEventListener("click", function (event) {
  aboutUsOpen = true;
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayaboutUs();
  event.stopPropagation();
});

//displays the about us container and hides the menu container
function displayaboutUs() {
  aboutUsContainer.style.display = "block";
  menuContainer.style.display = "none";
}

// const lopueClick = document.querySelector(".lopue");
// const cart = document.querySelector(".fa");

document.querySelector(".breaky").addEventListener("click", function (event) {
  aboutUsOpen = false;
  isBreakyOpen = true;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("breakfast");
  event.stopPropagation();
});

document.querySelector(".lunch").addEventListener("click", function (event) {
  aboutUsOpen = false;
  isBreakyOpen = false;
  isLunchOpen = true;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("lunch");
  event.stopPropagation();
});

document.querySelector(".dinner").addEventListener("click", function (event) {
  aboutUsOpen = false;
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = true;
  isDessertOpen = false;
  isDrinksOpen = false;
  displayMenu("dinner");
  event.stopPropagation();
});

document.querySelector(".dessert").addEventListener("click", function (event) {
  aboutUsOpen = false;
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = true;
  isDrinksOpen = false;
  displayMenu("dessert");
  event.stopPropagation();
});

function displayMenu(menuType) {
  menuContainer.style.display = "block";
  aboutUsContainer.style.display = "none";
  menuContainer.innerHTML = "";

  //will call the self-created API and return the list of menus
  fetch("http://localhost:3000/menus").then((response) => {
    response.json().then((results) => {
      //finding the menu
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

document.querySelector(".drinks").addEventListener("click", function (event) {
  aboutUsOpen = false;
  isBreakyOpen = false;
  isLunchOpen = false;
  isDinnerOpen = false;
  isDessertOpen = false;
  isDrinksOpen = true;
  displayDrinksMenu();
  event.stopPropagation();
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

    let data = document.querySelector("#email").value;
    fetch("http://localhost:3000/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        dataValue: data,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {});
  });

//filtering the gluten free options form the menu
document
  .querySelector("#glutenFreeCheckbox")
  .addEventListener("change", function (event) {
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

    event.stopPropagation();
  });
