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
document.getElementsByClassName("lopue").addEventlistener("click");
document.getElementsByClassName("fa").addEventlistener("click");
document.getElementById("submit").addEventlistener("click");

const breaky = [
  {
    food: "banana bread",
    items: ["banana", "flour", "eggs"],
    type: "breakfast",
    isVegan: false,
    price: 15,
  },
  {
    food: "breaky roll",
    items: ["eggs", "bacon", "cheese"],
    type: "breakfast",
    isVegan: false,
    price: 15,
  },
  {
    food: "acai bowl",
    items: ["acai", "pineaple", "granola"],
    type: "breakfast",
    isVegan: false,
    price: 15,
  },
];

const lunch = [
  {
    food: "pizza",
    items: ["dough", "tomato", "mushrooms", "vegam mozarella"],
    type: "lunch",
    isVegan: true,
    price: 20,
  },
  {
    food: "chicken curry",
    itmes: ["rice", "currypaste", "chicken"],
    type: "lunch",
    isVegan: false,
    price: 10,
  },
  {
    food: "sourdough sandwich",
    items: ["ham", "cheese", "pumpkin"],
    type: "lunch",
    isVegan: false,
    price: 17.2,
  },
];

const drinks = [
  {
    cafe: "flat white",
    type: ["short", "regular", "large"],
    isVegan: false,
    price: [4.5, 5.5, 6.5],
  },
  {
    cafe: "cappuccino",
    type: ["short", "regular", "large"],
    isVegan: false,
    price: [4.5, 5.5, 6.5],
  },
  {
    cafe: "long black",
    type: ["short", "regular", "large"],
    isVegan: true,
    price: [4.5, 5.5, 6.5],
  },
  {
    extras: {
      milk: ["soya", "almond", "oat"],
    },
  },
];
